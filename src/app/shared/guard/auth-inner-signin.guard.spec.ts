import { TestBed } from '@angular/core/testing';

import { AuthInnerSigninGuard } from './auth-inner-signin.guard';

describe('AuthInnerSigninGuard', () => {
  let guard: AuthInnerSigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthInnerSigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
