import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import * as _ from 'lodash'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupSheetTemplate
  
  constructor(private requests:BackendRequestService, private http:HttpClient) { 
  }
  
  ngOnInit(): void {
    this.signupSheetTemplate = this.requests.templates['user']  
  }

  async signup(data) {
    await this.requests.uploadForm(data,'user')
    await this.requests.login(_.pick(data,'email','password'))
  }
}
