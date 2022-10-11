import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserManagementComponent } from '../user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [{ path: 'user-details/:id', component: UserDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
