import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesDetailsComponent } from './case-studies-details.component';

describe('CaseStudiesDetailsComponent', () => {
  let component: CaseStudiesDetailsComponent;
  let fixture: ComponentFixture<CaseStudiesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudiesDetailsComponent]
    });
    fixture = TestBed.createComponent(CaseStudiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
