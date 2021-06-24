import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {
  backendURL = environment.backendURL
  constructor(private http:HttpClient) {}
  asyncVerify(data,templateName) {
    let URL = this.backendURL+'forms/asyncVerify/'+templateName
    return this.http.post(URL,data).toPromise()
  }
  async uploadForm(data,templateName) {
    let URL = this.backendURL+'forms/'+templateName
    let result = await this.http.post(URL,data).toPromise()
    console.log(result)
  }
}
