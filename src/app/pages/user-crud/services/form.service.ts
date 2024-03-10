import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formGroup!: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    })
  }

  public getFormGroup() {
    return this.formGroup
  }
}