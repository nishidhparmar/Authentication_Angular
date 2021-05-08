import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private api : ApiService ) { }
  intercept(req:any,next:any){
    let tokenreq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.api.gettoken()}`
      }
    })
    return next.handle(tokenreq)
  }
}
