import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './pages/user-crud/user.module';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    DashboardComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    UserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
