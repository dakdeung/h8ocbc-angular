import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  // GET
  getUsers(): Observable<any> {
    let api = `${this.endpoint}`;
    return this.http
      .get(api)
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
