import { empService } from '../../Services/empService';
import { from } from 'rxjs';
import { Injectable, Inject, Component, OnInit } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'create',
  templateUrl: 'create.html'
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService: empService, private _router: Router) {
  }
  ngOnInit() {
    this.employeeForm = new FormGroup({
      emp_no: new FormControl(),
      employee_name: new FormControl(),
      employee_salary: new FormControl(),
      employee_age: new FormControl()
    });
  };

  save(employeeForm) {
    if (employeeForm.valid) {
      this._employeeService.saveEmployee(employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/emplist'])
        }, error => this.errorMessage = error);
    }
    else {
      alert('form is not valid');
    }

  }
  cancel() {
    this._router.navigate(['/emplist']);
  }
}
