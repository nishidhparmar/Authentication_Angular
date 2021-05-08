import { ApiService } from './../api.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}
  err = '';
  token: any = {};
  ngOnInit(): void {}
  login(log: NgForm) {
    this.api.logindata(log.value).subscribe(
      (data) => {
        console.log(data),
          this.token = data,
          console.log(this.token.token),
          localStorage.setItem('token', this.token.token),
          this.router.navigate(['/special']);
      },
      (err) => ((this.err = err.error), console.log(err))
    );
    log.reset();
  }
}
