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
    if(authServiceService.isLogged()) {
      this.sharedService.setLoginData(true);
    }
      
  }

/**
 * Este metodo se encarga de hacer el login falso por medio del servicio de autenticacion
 */

  public onLogin() {
    if (this.formGroup.valid && this.authServiceService.login(this.formGroup.getRawValue())) {
      this.sharedService.setLoginData(true);
    } else {
      alert('Login failed');
    }

  }
}