import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { showemployee } from './component/showemp';



const routes: Routes = [
  { path: 'emplist', component: showemployee }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
