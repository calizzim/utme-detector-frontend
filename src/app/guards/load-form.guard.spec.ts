import { TestBed } from '@angular/core/testing';

import { LoadFormGuard } from './load-form.guard';

describe('LoadFormGuard', () => {
  let guard: LoadFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
