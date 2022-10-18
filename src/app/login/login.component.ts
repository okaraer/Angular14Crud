import { UserService } from './../service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material-module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: UserService, private route: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  respdata: any;

  ProdceedLogin(logindata: any) {
    if (logindata.valid) {
      console.warn(logindata.value);
      this.service.protectedLogin(logindata.value).subscribe((item) => {
        this.respdata = item;
        if (this.respdata != null) {
          console.warn(item);
          localStorage.setItem('token', this.respdata.token);
          this.route.navigate(['home']);
        } else {
          alert('login field');
        }
      });
    }
  }
}
