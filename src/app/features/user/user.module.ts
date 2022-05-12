import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
const user: Route[] = [{
  path: '',
  component: UserComponent
}]

@NgModule({
  declarations: [
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(user), ReactiveFormsModule, SharedModule
  ]
})
export class UserModule { }
