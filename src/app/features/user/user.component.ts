import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { IUser } from 'src/app/core/user/user.types';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  private unsubscribeAll: Subject<any> = new Subject<any>();

  public data: IUser[] = [];
  public selectedFilter = 'A - Z'
  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(val => {
        this.data = val;
        this.filterData();
      })
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  filterData() {
    //Sort Data using selected Filter
    if (this.selectedFilter == 'A - Z') {
      //Sort Ascending
      this.data.sort((a, b) => a.first_name > b.first_name ? 1 : -1);
    } else {
      //Sort Decending
      this.data.sort((a, b) => a.first_name < b.first_name ? 1 : -1);

    }
  }

  deleteUser(usr: IUser) {
    if (window.confirm(`Sure ! you want to delete ${usr.first_name} ${usr.last_name}`)) {
      let index = this.data.findIndex(x => x.id == usr.id);

      this.data.splice(index, 1);
    }
  }


  createUser() {

    // Open Create User Form
    this.dialog.open(CreateUserComponent).afterClosed().subscribe(() => {

      //Get Fresh User List
      this.userService.getUsers().subscribe();
    })
  }


}
