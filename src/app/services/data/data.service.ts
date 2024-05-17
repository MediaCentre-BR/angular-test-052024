import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user'; // Importe a interface User, não o componente UserListComponent

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> { // Corrija o tipo de retorno para Observable<User[]>
    return this.http.get<User[]>(this.apiUrl);
  }
}
