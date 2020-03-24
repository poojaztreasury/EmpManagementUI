import { Injectable, Inject } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Http,Response} from '@angular/http';
@Injectable()

export class empService {
    myAppUrl:string="";
    constructor(private _http:Http,@Inject('http://localhost:5000/') baseUrl:string){
        this.myAppUrl=baseUrl;
    }
getEmployee(){
    return this._http.get(this.myAppUrl + "api/emp/showemp")
      .pipe(map((response: Response) => response.json())
        , catchError(this.errorHandler));
}
errorHandler(error: Response) {
    return throwError(error);
    
}



























































































































































}