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
  selector: 'create',
  templateUrl: './create.html'
})
export class addemployeecomponent implements OnInit {
  employeeForm: FormGroup;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService:empService, private _router: Router) {
  }
  ngOnInit() {
    this.employeeForm = new FormGroup({
      empno: new FormControl(),
      ename: new FormControl(),
      eadd: new FormControl(),
      esal: new FormControl()
    });
  };
    get id(){return this.employeeForm.get("id");}
    get employee_name(){ return this.employeeForm.get("employee_name");}
    get employee_salary(){ return this.employeeForm.get("employee_salary");}
    get employee_age(){return this.employeeForm.get("employee_age");}

  save() {
    this._employeeService.saveEmployee(this.employeeForm.value)
      .subscribe((data) => {
        this._router.navigate(['/emplist'])
      }, error => this.errorMessage = error);
  }
  cancel() {
    this._router.navigate(['/emplist']);
  }
}
