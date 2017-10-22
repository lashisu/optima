import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "app/core/login/login.component";

const routes:Routes = [
  {
    path:"",component:LoginComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class CoreModule { }
