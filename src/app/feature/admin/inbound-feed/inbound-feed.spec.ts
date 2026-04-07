import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundFeed } from './inbound-feed';

describe('InboundFeed', () => {
  let component: InboundFeed;
  let fixture: ComponentFixture<InboundFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboundFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
