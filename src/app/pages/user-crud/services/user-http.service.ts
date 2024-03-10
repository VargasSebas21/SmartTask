import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(
    private http: HttpClient
  ) { }

  public list () {
    return this.http.get('http://localhost:3000/users');
  }

  public create (user: any) {
    return this.http.post('http://localhost:3000/users', user);
  }

  public delete (id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  public update (user: any) {
    return this.http.put(`http://localhost:3000/users/${user.id}`, user);
  }
}
