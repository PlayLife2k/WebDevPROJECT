import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Output() user = new EventEmitter<string>();
  @Output() pass = new EventEmitter<string>();

  public username: string;
  public password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  login() {
    this.user.emit(this.username);
    this.pass.emit(this.password);
  }
}
