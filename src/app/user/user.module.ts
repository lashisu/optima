import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { InboxComponent } from './inbox/inbox.component';
import { Routes, RouterModule } from "@angular/router";

 const routes:Routes = [
  {
    path:'', 
    component:UserComponent,
    children : [
      {
        path: 'inbox', 
        component: InboxComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent, UserDashboardComponent, InboxComponent]
})
export class UserModule { }
