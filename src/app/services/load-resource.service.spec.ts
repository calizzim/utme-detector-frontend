import { TestBed } from '@angular/core/testing';

import { LoadResourceService } from './load-resource.service';

describe('LoadResourceService', () => {
  let service: LoadResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
