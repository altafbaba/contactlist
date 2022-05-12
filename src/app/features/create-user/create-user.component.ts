import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
    emailId: new FormControl('', [Validators.required, Validators.email])
  })

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    console.log(this.createForm.value)
  }

}
