import { Login } from 'app/login/shared/login';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  tryLogin(dataLogin: Login): boolean {
    // consulta al server
    return true;
  }

}
