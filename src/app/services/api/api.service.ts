import { Injectable } from '@angular/core';
import { User } from '../../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../environments/environment.development';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>
  {

    return this.http.get<User[]>(ENVIRONMENT.apiUrl).pipe(catchError(this._handleError));

  }

  private _handleError(error: any): Observable<never> {
    console.error('Error:', error);
    throw new Error('Error HTTP request');
  }

}
