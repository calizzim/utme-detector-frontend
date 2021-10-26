import { RequestService } from './../../../../../native/services/request.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-view',
  templateUrl: './dataset-view.component.html',
  styleUrls: ['./dataset-view.component.css']
})
export class DatasetViewComponent implements OnInit {
  datasetID:string
  data:any


  constructor(
    private router:Router,
    private request:RequestService) { 
    this.datasetID = this.router.getCurrentNavigation().extras.fragment
    if(!this.datasetID) { router.navigate(['/sensorData']) }
  }

  async ngOnInit() {
    console.log(this.datasetID)
    this.data = await this.request.getDataset(this.datasetID)
  }

}
