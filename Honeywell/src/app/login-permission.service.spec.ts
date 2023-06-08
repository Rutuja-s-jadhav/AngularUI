import { TestBed } from '@angular/core/testing';

import { LoginPermissionService } from './login-permission.service';

describe('LoginPermissionService', () => {
  let service: LoginPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
