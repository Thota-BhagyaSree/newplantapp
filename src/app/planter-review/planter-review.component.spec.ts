import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanterReviewComponent } from './planter-review.component';

describe('PlanterReviewComponent', () => {
  let component: PlanterReviewComponent;
  let fixture: ComponentFixture<PlanterReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanterReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanterReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
