import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})

export class BudgetToolComponent implements OnInit{
  constructor(private http:BackendRequestService) {}
  disabled
  loaded = false

  async updateDisabled() {
    let c = await this.http.get('forms/completed')
    this.disabled = {
      housing: !c.salaryInfo,
      transportation: !c.homeInfo,
      other: !c.carInfo,
      summary: !c.otherInfo
    }
  }

  async ngOnInit() {
    await this.updateDisabled()
    this.loaded = true
  }
}
