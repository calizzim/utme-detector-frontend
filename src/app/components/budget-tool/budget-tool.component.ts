import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})
export class BudgetToolComponent implements OnInit {

  constructor(private request:BackendRequestService) { }
  template = this.request.templates['salaryInfo']
  formSumitted = false
  taxes = {}
  data
  ngOnInit():void {}
  async submitForm(data) {
    this.data=data
    let salary = data.salaryType == 'monthly' ? 12 * data.pretaxSalary : data.pretaxSalary
    this.taxes = await this.request.post('api/taxes', { 
      salary: salary, 
      state: data.state, 
      filingStatus: data.filingStatus 
    })
    this.taxes['total']=this.taxes['state']+this.taxes['federal']
    this.data['posttaxSalary']=data.pretaxSalary-this.taxes['total']
    this.data['yearlySavings']=data.posttaxSalary*data.savingPercentage/100
    this.formSumitted=true
  }
}
