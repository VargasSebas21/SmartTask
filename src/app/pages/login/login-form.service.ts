import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  private formGroup!: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  public getFormGroup() {
    return this.formGroup
  }
}