import { Injectable, Inject } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class empService {
    baseUrl = "http://dummy.restapiexample.com/";

    constructor(private _http: HttpClient) { }
    getEmployee(): Observable<any> {
        return this._http
            .get<any>(this.baseUrl+"api/v1/employees")
            .pipe(catchError(this.errorHandl));
    }
    updateEmployee(employee):Observable<any>
    {
      return this._http.put(this.baseUrl+"/api/v1/update",employee)
      .pipe(catchError(this.errorHandl));
    }      0,mnbvcxz
     
    getEmpById(id:number):Observable<any>
    {
        return this._http.get(this.baseUrl+"api/v1/employee/"+id)
        .pipe(catchError(this.errorHandl));
    }

    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}