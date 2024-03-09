import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiagnosisComponent } from './form-diagnosis.component';

describe('FormDiagnosisComponent', () => {
  let component: FormDiagnosisComponent;
  let fixture: ComponentFixture<FormDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDiagnosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
