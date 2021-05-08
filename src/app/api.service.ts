import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  registerurl = 'http://localhost:3000/api/register';
  loginurl = 'http://localhost:3000/api/login';
  eventsurl = 'http://localhost:3000/api/events';
  specialurl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient, private router: Router) {}

  registerdata(data) {
    return this.http.post(this.registerurl, data);
  }
  logindata(data) {
    return this.http.post(this.loginurl, data);
  }
  events() {
    return this.http.get(this.eventsurl);
  }
  special() {
    return this.http.get(this.specialurl);
  }

  login() {
    return !!localStorage.getItem('token');
  }
  gettoken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/events'])
  }
}
