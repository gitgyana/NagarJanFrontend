import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCard } from './label-card';

describe('LabelCard', () => {
  let component: LabelCard;
  let fixture: ComponentFixture<LabelCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
