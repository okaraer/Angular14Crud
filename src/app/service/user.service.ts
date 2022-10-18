import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  protectedLogin(inputdata: any) {
    return this.http.post('https://dummyjson.com/auth/login', inputdata);
  }
}
