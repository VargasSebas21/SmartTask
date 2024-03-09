import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public login ({user, password}: {user: string, password: string}) {
    if (user === 'admin@gmail.com' && password === 'admin') {
      return true;
    }
    return false;
  }

  constructor() { }
}
