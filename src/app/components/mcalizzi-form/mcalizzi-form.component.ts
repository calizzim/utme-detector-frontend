import { BackendRequestService } from '../../services/backend-request.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
@Component({
  selector: 'mcalizzi-form',
  templateUrl: './mcalizzi-form.component.html',
  styleUrls: ['./mcalizzi-form.component.css']
})
export class McalizziFormComponent implements OnInit {
  @Input('template') template;
  @Input('templateName') formName;
  @Input('submitAction') submitAction;
  @Input('alert') alert = { active: false, message: '' }

  @Output('formSubmitted') data = new EventEmitter();

  form = new FormGroup({});
  
  constructor(private request:BackendRequestService) { }
  
  ngOnInit(): void {
    for(let group of this.template.groups){
      let formGroup = new FormGroup({});
      for(let component of group.components){
        let formControl = new FormControl(
          '', 
          this.getValidators(component.validators),
          this.getAsyncValidatorFn(component.name,component.asyncValidators)
        );
        formGroup.addControl(component.name, formControl);
      }
      this.form.addControl(group.title,formGroup)
    }
  }

  isValid(group, field) {
    const obj = this.form.get([group.title,field.name])
    return (obj.touched || this.failedToSubmit) && !obj.errors
  }
  isInvalid(group, field) {
    const obj = this.form.get([group.title, field.name])
    return (obj.touched || this.failedToSubmit) && obj.errors
  }
  isNeutral(group, field) {
    const obj = this.form.get([group.title, field.name])
    return !obj.touched && !this.failedToSubmit
  }
  

  getMessage(group, field) {
    let component = this.form.get([group.title,field.name])
    const errors = component.errors
    if(errors) {
      return Object.keys(errors).sort().map(e => errors[e])[0]
    }
    return 'looks good'
  }

  failedToSubmit = false
  onSubmit() {
    //make sure that the form is valid
    if(!this.form.valid) {
      this.failedToSubmit = true
      return
    }
    //construct the return object
    let data = {};
    for(let group of this.template.groups){
      for(let component of group.components){
        data[component.name] = this.form.get([group.title, component.name]).value;
      }
    }
    if(this.submitAction == 'upload') this.request.uploadForm(data,this.formName)
    this.data.emit(data)
    if(this.template.resetOnSubmit) this.form.reset()
    this.failedToSubmit = false
  }
  
  getValidators(validators) {
    //get all of the validator functions
    let validatorFns = []
    for(let [index,validator] of validators.entries()) {
      validatorFns.push(this.getValidatorFn(index,validator))
    }
    return validatorFns
  }

  getValidatorFn(index,validator):ValidatorFn {
    validator.expression = JSON.parse(validator.expression)
    const expression = RegExp(validator.expression.source, validator.expression.flags)
    return (field:AbstractControl):ValidationErrors|null => {
      if(!expression.test(field.value)) {
        let error = {}; error[index] = validator.message;
        return error
      }
      return null
    }
  }

  getAsyncValidatorFn(fieldName, validators):AsyncValidatorFn|null {
    if(!validators) return null
    return (field:AbstractControl):Promise<ValidationErrors|null> => {
      return this.request.asyncVerify({
        name: fieldName,
        value: field.value,
        validators: validators
      }, this.formName)
    }
  }

}