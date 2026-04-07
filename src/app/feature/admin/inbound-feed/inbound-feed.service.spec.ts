import { TestBed } from '@angular/core/testing';

import { InboundFeedService } from './inbound-feed.service';

describe('InboundFeedService', () => {
  let service: InboundFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboundFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
