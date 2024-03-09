import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiagnosisComponent } from './list-diagnosis.component';

describe('ListDiagnosisComponent', () => {
  let component: ListDiagnosisComponent;
  let fixture: ComponentFixture<ListDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDiagnosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
