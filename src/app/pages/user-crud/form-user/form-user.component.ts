import { Component } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  constructor(
    private formService: FormService
    
  ) { }

}
