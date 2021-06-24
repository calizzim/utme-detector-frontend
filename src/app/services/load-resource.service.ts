import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadResourceService {
  constructor(private http:HttpClient) { }
  templates = {}
  async loadTemplate(templateName) {
     this.templates[templateName] = 
     await this.http.get(environment.backendURL+'forms/'+templateName).toPromise()
  }
}
