import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsV1Component } from './course-details-v1.component';

describe('CourseDetailsV1Component', () => {
  let component: CourseDetailsV1Component;
  let fixture: ComponentFixture<CourseDetailsV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailsV1Component]
    });
    fixture = TestBed.createComponent(CourseDetailsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
