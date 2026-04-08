import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceSubmit } from './grievance-submit';

describe('GrievanceSubmit', () => {
  let component: GrievanceSubmit;
  let fixture: ComponentFixture<GrievanceSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrievanceSubmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrievanceSubmit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
