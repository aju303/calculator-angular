import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { LoginComponent } from './login/login.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"subtraction",component:SubtractionComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
