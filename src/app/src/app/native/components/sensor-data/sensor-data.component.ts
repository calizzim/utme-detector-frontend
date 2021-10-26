import { RequestService } from './../../../../../native/services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {
  datasets
  constructor(private http:RequestService) { }

  async ngOnInit() {
    this.datasets = await this.http.getDatasets()
  }

}
