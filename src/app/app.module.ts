import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './pages/user-crud/user.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
