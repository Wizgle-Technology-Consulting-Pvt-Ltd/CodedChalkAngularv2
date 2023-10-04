import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailsV1Component } from './case-details-v1.component';

describe('CaseDetailsV1Component', () => {
  let component: CaseDetailsV1Component;
  let fixture: ComponentFixture<CaseDetailsV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseDetailsV1Component]
    });
    fixture = TestBed.createComponent(CaseDetailsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
