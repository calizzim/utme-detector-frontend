import { BackendRequestService } from './../../reusable/services/backend-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http:BackendRequestService) { }
  
  async getDatasets() {
    let datasets = this.http.get('sensorData')
    return datasets
  }

  async getDataset(id) {
    let dataset = this.http.get(`sensorData/${id}`)
    return dataset
  }

  async changeName(id, newName) {
    let dataset = this.http.post(`sensorData/${id}`, { name: newName })
    return dataset
  }

  async deleteDataset(id) {
    return this.http.delete(`sensorData/${id}`)
  }
}
