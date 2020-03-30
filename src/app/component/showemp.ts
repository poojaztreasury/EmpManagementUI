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
    public empList: EmpData[];
    constructor(public http: Http, private _router: Router, private _empService:empService 
    ) {
       window.alert("hello");
        this.getemp();
        console.log("emp loading");
    }
    getemp() {
         this._empService.getEmployee().subscribe((data) => console.log(data));
        
    } 

}
interface EmpData {
    empid: number
    empname: string
    empemail: string
    emphomeadd: string
    empdep: string
    empphone: number
    emprepmanager: string
    empofficeadd: string
    isDeleted: boolean
    isActive: boolean
    addedby: string
    addedon: Date
    modifiedby: string
    modifiedon: Date
}