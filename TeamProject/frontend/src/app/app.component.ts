import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "./views/landing/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public username: string;
  public password: string;

  logged = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login() {
    this.logged = true;
    this.loginService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('token', res.token);
    });

    this.username = '';
    this.password = '';
  }

  logout(){
    this.logged = false;
    localStorage.clear();
  }

}
