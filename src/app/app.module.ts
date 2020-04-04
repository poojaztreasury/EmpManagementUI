import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ empService } from './Services/empService';
import{ showemployee } from './component/showemp';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {editemployeecomponent} from "./component/update";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpModule } from '@angular/http';
import { CreateEmployeeComponent } from './component/create/create';

@NgModule({
  declarations: [
    AppComponent,
    showemployee,
    editemployeecomponent,
    CreateEmployeeComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
   
  ],
  providers: [empService],
  bootstrap: [AppComponent]
})
export class AppModule { }
