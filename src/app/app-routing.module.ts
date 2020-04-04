import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { showemployee } from './component/showemp';
import { editemployeecomponent } from './component/update';
import { addemployeecomponent } from './component/create';



const routes: Routes = [
  { path: 'emplist', component: showemployee },
  {path:'update', component:editemployeecomponent},
  {path:'create',component:addemployeecomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
