import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './shared/login.service';
import { Login } from './shared/login';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  holdingLogin: boolean

  dataLogin: Login

  constructor(
    private router: Router,
    private logService: LoginService,
  ) {
    this.dataLogin = new Login();
    this.logService = new LoginService()
    this.holdingLogin = true
  }

  ngOnInit() {}

  login() {
    let loginOK: boolean = this.logService.tryLogin(this.dataLogin)
    if (loginOK) {
      this.holdingLogin = false
      
      // Store
      localStorage.setItem('userName', 'admin');

      let delayMillis: number = 2000;
      setTimeout(() => {
        this.router.navigate(['mybands']);
      }, delayMillis);
    }
  }
}
