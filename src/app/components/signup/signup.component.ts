import { LoadResourceService } from './../../services/load-resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupSheetTemplate
  
  constructor(private forms:LoadResourceService) { 
  }
  
  ngOnInit(): void {
    this.signupSheetTemplate = this.forms.templates['user']
  }

}
