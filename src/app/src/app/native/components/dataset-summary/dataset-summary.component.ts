import { RequestService } from './../../../../../native/services/request.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'dataset-summary',
  templateUrl: './dataset-summary.component.html',
  styleUrls: ['./dataset-summary.component.css']
})
export class DatasetSummaryComponent implements OnInit {
  @Input('cr-dataset') dataset

  startDate
  startTime
  editing = false

  constructor(
    private router:Router,
    private request:RequestService) { }

  ngOnInit(): void {
    let date = new Date(this.dataset.start)
    this.startDate = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
    this.startTime = date.toLocaleTimeString("en-US", {hour: 'numeric', minute: 'numeric', second: 'numeric'})
  }

  viewData() {
    this.router.navigate(["viewData"], { fragment: this.dataset._id })
  }

  changeName() {  
    this.editing = !this.editing
  }

  async setName(newName) {
    this.dataset.title = await this.request.changeName(this.dataset._id, newName)
    this.editing = !this.editing
  }
}
