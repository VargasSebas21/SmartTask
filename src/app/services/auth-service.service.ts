import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogged () {
    return localStorage.getItem('loginState') === 'true';
  }

  public login ({user, password}: {user: string, password: string}) {
    if (user === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('loginState', 'true');
      return true;
    }
    return false;
  }

  constructor() { }
}
