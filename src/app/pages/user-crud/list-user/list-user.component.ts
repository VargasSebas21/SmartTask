import { Component } from '@angular/core';
import { FormUserComponent } from '../form-user/form-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserHttpService } from '../services/user-http.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [UserHttpService]
})
export class ListUserComponent {


  public users: any[] = [];

  constructor(
    private modalService: NgbModal,
    private userHttpService: UserHttpService
  ) {
    this.userHttpService.list().subscribe(
      (data: any) => {
        this.users = data.data;
      }
    );
  }

  /**
   * Este metodo abre el modal
   */
  public onOpenModal() {
    this.modalService.open(FormUserComponent);
  }

  /**
   * edita el usuario segun el parametro que se pase
   * @param user objeto de tipo user que se va a editar
   */
  public onEdit(user: any ) {
    const modalRef = this.modalService.open(FormUserComponent);
    modalRef.componentInstance.user = user;
  }

  public onDelete(id: number) {
    this.userHttpService.delete(id).subscribe(
      (data: any) => {
        alert('User deleted');
        window.location.reload();
      }
    );
  }
}
