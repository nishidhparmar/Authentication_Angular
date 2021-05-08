import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}
  err = '';
  token: any = {};
  ngOnInit(): void {}
  register(reg: NgForm) {
    this.api.registerdata(reg.value).subscribe(
      (data) => {
        console.log(data),
          this.token = data,
          console.log(this.token.token),
          localStorage.setItem('token', this.token.token),
          this.router.navigate(['/special'])
      },
      (err) => {
        (this.err = err.error), console.log(err);
      }
    );
    reg.reset();
  }
}
