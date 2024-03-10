import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

const routes = [
  { path: '', component: ListUserComponent }
];


@NgModule({
  declarations: [
    FormUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule
    
  ],
  providers: [ importProvidersFrom(HttpClientModule)],

})
export class UserModule { }
