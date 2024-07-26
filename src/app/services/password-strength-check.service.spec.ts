import { TestBed } from '@angular/core/testing';

import { PasswordStrengthCheckService } from './password-strength-check.service';

describe('PasswordStrengthCheckService', () => {
  let service: PasswordStrengthCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordStrengthCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
