import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const create: Route[] = [{
  path: "",
  component: CreateUserComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(create), MatInputModule, MatButtonModule
  ]
})
export class CreateUserModule { }
