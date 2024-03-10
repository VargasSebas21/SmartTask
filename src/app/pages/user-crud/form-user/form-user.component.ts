import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { UserHttpService } from '../services/user-http.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  providers: [UserHttpService, FormService]
})
export class FormUserComponent implements OnInit {
  @Input() public user: any;

  public formGroup! : FormGroup;
  
  constructor(
    private formService: FormService,
    private userHttpService: UserHttpService
  ) {
    this.formGroup = this.formService.getFormGroup();
    console.log(this.user);
    
  
  }
public ngOnInit() {
  if (this.user) {
    this.formGroup.patchValue(this.user);
  }
}

public onEdit() {
  const user = {
    id:this.user.id, 
    ...this.formGroup.getRawValue()
  }
  this.userHttpService.update(user).subscribe(
    (data: any) => {
      alert('User updated');
      window.location.reload();
    }
  );
}


public onSubmit() {
    this.userHttpService.create(this.formGroup.getRawValue()).subscribe(
      (data: any) => {
        alert('User created');
        window.location.reload();
      }
    );
  
    }

  }