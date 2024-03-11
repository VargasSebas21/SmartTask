import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(
    private http: HttpClient
  ) { }

//este metodo se encarga de listar los usuarios

  public list () {
    return this.http.get('http://localhost:3000/users');
  }
//este metodo se encarga de crear un usuario
  public create (user: any) {
    return this.http.post('http://localhost:3000/users', user);
  }
//este metodo se encarga de eliminar un usuario
  public delete (id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
//este metodo se encarga de actualizar un usuario
  public update (user: any) {
    return this.http.put(`http://localhost:3000/users/${user.id}`, user);
  }
}
