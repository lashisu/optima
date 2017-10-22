import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {
    path:"admin-dashboard",component:AdminDashboardComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminModule { }
