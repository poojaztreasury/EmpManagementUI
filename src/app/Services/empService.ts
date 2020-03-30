import { Injectable, Inject } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http, Response } from '@angular/http';
@Injectable({
    providedIn: 'root'
})

export class empService {
    constructor(private _http: Http) { }
    getEmployee() {
        return this._http.get("https://reqres.in/api/users");
    }
}