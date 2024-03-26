import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasRightAuthorityGuard } from './has-right-authority.guard';

describe('hasRightAuthorityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasRightAuthorityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
