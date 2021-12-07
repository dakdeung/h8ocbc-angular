import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  // GET
  getUsers(): Observable<any> {
    let api = `${this.endpoint}`;
    return this.http
      .get(api)
      .pipe(catchError(this.handleError));
  }

  //POST
  postEmployee(user: User):  Observable<any> {
    let api = `${this.endpoint}`;
    return this.http
      .post(api, user)
      .pipe(catchError(this.handleError));
  }

  // PUT
  putEmployee(id: Number, user: User): Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http
      .put(api, user)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  deleteEmployee(id: Number) : Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http
      .delete(api)
      .pipe(catchError(this.handleError));
  }

  handleError (e: HttpErrorResponse){
    let msg = '';
    if (e.error instanceof ErrorEvent) {
      msg = e.error.message;
    }else{
      msg = `Error Code: ${e.status}\n Message: ${e.message}`;
    }
    return throwError(msg);
  };
}
