import { Injectable, Inject } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class empService {
    baseUrl = "https://localhost:5001";

    constructor(private _http: HttpClient) { }
    getEmployee(): Observable<any> {
        return this._http
            .get<any>(this.baseUrl + "/api/emp/showemp")
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
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