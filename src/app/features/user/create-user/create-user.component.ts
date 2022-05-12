import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    avatar: new FormControl(''),

  })
  constructor(private userService: UserService, private snackBar: MatSnackBar, private dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {


  }

  createUser() {

    this.userForm.markAllAsTouched();

    if (this.userForm.valid)
      this.userService.createUser(this.userForm.value).subscribe((val) => {

        this.snackBar.open('User Created Successfully !')._dismissAfter(3000)
        this.dialogRef.close();
      })
    else
      this.snackBar.open('Please fill all Required fields')._dismissAfter(3000);

  }
}
