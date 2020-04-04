import { empService } from '../Services/empService';
import { from } from 'rxjs';
import { Injectable, Inject, Component } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'showemp',
    templateUrl: './showemp.html'
})
export class showemployee {
    public empList: any;
    public sampleData: any;
    constructor(public http: Http, private _router: Router, private _empService: empService) {
        this.getemp();

    }
    getemp() {
        this._empService
            .getEmployee()
            .subscribe((result) => {
                this.empList = result.data;
            });
    }

}
