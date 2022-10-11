import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListUserComponent,
    UserCardComponent,
    UserManagementComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
