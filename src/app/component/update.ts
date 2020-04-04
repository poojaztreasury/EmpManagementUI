import { empService } from '../Services/empService';
import { from } from 'rxjs';
import { Injectable, Inject, Component, OnInit } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
//import { threadId } from 'worker_threads';
@Component({
    selector: 'update',
    templateUrl: './update.html'
})
export class editemployeecomponent implements OnInit {
    public employeeForm: FormGroup;
    public id1 : number;
    errorMessage: any;
    ngOnInit(){
        if(this.id1>0){
            this._empService.getEmpById(this.id1)
            .subscribe(resp =>this.employeeForm.setValue(resp),error=>this.errorMessage=error);
        }
        this.employeeForm = new FormGroup({
            id: new FormControl(),
            employee_name : new FormControl(),
            employee_salary : new FormControl(),
            employee_age : new FormControl()
        

        })
    }
    constructor(private _fb:FormBuilder,private _avroute:ActivatedRoute, private _router: Router, private _empService: empService) {
       if(this._avroute.snapshot.params["id"])
       {
           this.id1=this._avroute.snapshot.params["id"];
       }

    }
    update() {
        this._empService
            .updateEmployee(this.employeeForm.value)
            .subscribe((result) => {
                this._router.navigate(['/emplist'])
            },error=>this.errorMessage);
    }
    cancel(){
        this._router.navigate(['/emplist']);
    }

    get id(){return this.employeeForm.get("id");}
    get employee_name(){ return this.employeeForm.get("employee_name");}
    get employee_salary(){ return this.employeeForm.get("employee_salary");}
    get employee_age(){return this.employeeForm.get("employee_age");}
}
