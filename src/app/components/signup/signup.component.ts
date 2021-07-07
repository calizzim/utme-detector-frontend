import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private requests:BackendRequestService, private http:HttpClient) { 
  }
  
  ngOnInit(): void {
  }

  async signup(data) {
    await this.requests.uploadForm(data,'user')
    await this.requests.login({email: data.email, password: data.password})
  }
}
