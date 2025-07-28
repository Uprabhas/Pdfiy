import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { NewUser } from './new-user/new-user';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'login', title: "Login page", component: Login,
      },
      {
        path: 'newuser', title: "New user", component: NewUser
      },
      {
        path: '', redirectTo: 'user/login', pathMatch:'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
