import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "./loginres";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8000/app/auth/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, {
      username,
      password
    });
  }
}
