import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Functionclick(name: any) {
    alert(name);
  }
  constructor() {}
  headername = 'Angular Tutorial';
  isdisabled = true;
  colorname = 'red';

  ngOnInit(): void {}
}
