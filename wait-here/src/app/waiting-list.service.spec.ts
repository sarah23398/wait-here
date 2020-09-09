import { TestBed } from '@angular/core/testing';

import { WaitingListService } from './waiting-list.service';

describe('WaitingListService', () => {
  let service: WaitingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
