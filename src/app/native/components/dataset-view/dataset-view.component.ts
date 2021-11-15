import { environment } from './../../../../environments/environment';
import { RequestService } from '../../services/request.service';
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

  names = [
    {name: "temperature", display: "Temperature"},
    {name: "humidity", display: "Humidity"},
    {name: "pm10", display: "Particulate Matter (1.0)"},
    {name: "pm25", display: "Particulate Matter (2.5)"},
    {name: "pm40", display: "Particulate Matter (4.0)"},
    {name: "pm100", display: "Particulate Matter (10.0)"},
    {name: "pmSize", display: "Particulate Matter Size"},
    {name: "tvoc", display: "Total VOC"},
    {name: "co2", display: "Carbon Dioxide"},
  ]

  constructor(
    private router:Router,
    private request:RequestService) { 
    this.datasetID = this.router.getCurrentNavigation().extras.fragment
    if(!this.datasetID) { router.navigate(['']) }
  }

  async ngOnInit() {
    console.log(this.datasetID)
    this.data = await this.request.getDataset(this.datasetID)
    console.log(this.data)
  }

  download() {
    window.location.href = environment.backendURL+"sensordata/download/"+this.datasetID
  }
}