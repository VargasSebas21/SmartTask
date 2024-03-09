import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicalDiagnosisComponent } from './pages/medical-diagnosis/medical-diagnosis/medical-diagnosis.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    MedicalDiagnosisComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
