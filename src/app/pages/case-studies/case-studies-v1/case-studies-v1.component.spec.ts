import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesV1Component } from './case-studies-v1.component';

describe('CaseStudiesV1Component', () => {
  let component: CaseStudiesV1Component;
  let fixture: ComponentFixture<CaseStudiesV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudiesV1Component]
    });
    fixture = TestBed.createComponent(CaseStudiesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
