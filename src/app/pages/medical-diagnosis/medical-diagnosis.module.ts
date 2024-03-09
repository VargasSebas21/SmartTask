import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDiagnosisComponent } from './form-diagnosis/form-diagnosis.component';
import { ListDiagnosisComponent } from './list-diagnosis/list-diagnosis.component';



@NgModule({
  declarations: [
    FormDiagnosisComponent,
    ListDiagnosisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicalDiagnosisModule { }
