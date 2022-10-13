import { MaterialModule } from './../../material-module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
