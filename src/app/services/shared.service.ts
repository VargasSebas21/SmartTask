import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

private loginSubject = new BehaviorSubject<boolean>(false);
private loginData$ = this.loginSubject.asObservable();

  
    constructor() { }

    public getLoginData() {
      return this.loginData$;
    }

    public setLoginData(isLogged: boolean) {
      this.loginSubject.next(isLogged);
    }
}
