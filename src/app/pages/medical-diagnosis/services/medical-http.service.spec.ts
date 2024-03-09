import { TestBed } from '@angular/core/testing';

import { MedicalHttpService } from './medical-http.service';

describe('MedicalHttpService', () => {
  let service: MedicalHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
