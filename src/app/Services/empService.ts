import { Injectable, Inject } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Http,Response} from '@angular/http';
@Injectable({
    providedIn: 'root'  

})

export class empService {
  //  myAppUrl:string="";
    constructor(private _http:Http){
       // this.myAppUrl=baseUrl;
    }
getEmployee()
{
    return this._http.get("http://localhost:5001/api/emp/showemp");
//(map((response: Response) => response.json())
       // , catchError(this.errorHandler));
}
// errorHandler(error: Response) {
//     return throwError(error);
    
// }



























































































































































}