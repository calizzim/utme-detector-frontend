import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})

export class BudgetToolComponent {
  constructor(private http:BackendRequestService) { }
  templateName = 'salaryInfo'
  computedData
  async submitForm(data) {
    this.computedData = await this.http.uploadForm(data,this.templateName)
  }
}
