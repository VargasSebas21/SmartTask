import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormGroup } from '@angular/forms';
import { LoginFormService } from './login-form.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formGroup!: FormGroup;

  constructor(
    private authServiceService: AuthServiceService,
    private loginFormService: LoginFormService,
    private sharedService: SharedService
  ) {
    this.formGroup = this.loginFormService.getFormGroup();
  }

  public onLogin() {
    if (this.formGroup.valid && this.authServiceService.login(this.formGroup.getRawValue())) {
      this.sharedService.setLoginData(true);
    } else {
      alert('Login failed');
    }

  }
}