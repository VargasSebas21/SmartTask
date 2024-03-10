import { Component } from '@angular/core';
import { FormUserComponent } from '../form-user/form-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  constructor(
    private modalService: NgbModal
  ) {

  }

  public onOpenModal() {
    this.modalService.open(FormUserComponent);
  }
}
