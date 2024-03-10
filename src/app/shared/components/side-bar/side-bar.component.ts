import { Component } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(
    private sharedService: SharedService
  ) { 

  }

  public onLogout() {
    localStorage.setItem('loginState', 'false');
    this.sharedService.setLoginData(false);
  }
}
