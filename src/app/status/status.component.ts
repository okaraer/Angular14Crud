import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: '<h4>404 Sayfa Bulunamadı!</h4>',
  styles: ['h4{color:red;font-size:50px}'],
})
export class StatusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
