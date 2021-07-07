import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  is() {
    return Boolean(localStorage.getItem('token'))
  }
  constructor() { }
}
