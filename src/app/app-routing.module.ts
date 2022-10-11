import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'userManagement',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  // {
  //   path: 'userManagement',
  //   component: UserManagementComponent,
  //   children: [{ path: 'user-details/:id', component: UserDetailsComponent }],
  // },
  // {path: '**', componenet : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
