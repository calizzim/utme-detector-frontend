import { TestBed } from '@angular/core/testing';

import { BackendRequestService } from './backend-request.service';

describe('BackendRequestServiceService', () => {
  let service: BackendRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
