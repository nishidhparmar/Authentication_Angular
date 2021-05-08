import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { CanActivate,   } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api : ApiService,private router : Router){}
  canActivate():any{
    if(this.api.login()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
