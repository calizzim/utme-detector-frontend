import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})
export class BudgetToolComponent implements OnInit {

  constructor(private http:BackendRequestService) { }
  templateName = 'salaryInfo'
  template = this.http.templates[this.templateName]
  data = [
    {
      name: "Germany",
      value: 8940000
    },
    {
      name: "England",
      value: 8940000
    },
    {
      name: "Spain",
      value: 8940000
    },
    {
      name: "France",
      value: 8940000
    }
  ]
  computedData
  ngOnInit():void {}
  async submitForm(data) {
    this.computedData = await this.http.uploadForm(data,this.templateName)
  }
}
