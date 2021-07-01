import { BackendRequestService } from './../../services/backend-request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})
export class BudgetToolComponent {
  constructor(private http:BackendRequestService) { }
  templateName = 'salaryInfo'
  template = this.http.templates[this.templateName]
  computedData
  async submitForm(data) {
    this.computedData = await this.http.uploadForm(data,this.templateName)
  }
}
