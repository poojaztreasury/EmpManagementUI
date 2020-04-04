import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { showemployee } from './component/showemp';
import { editemployeecomponent } from './component/update';



const routes: Routes = [
  { path: 'emplist', component: showemployee },
  {path:'update', component:editemployeecomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
