import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsV1Component } from './service-details-v1.component';

describe('ServiceDetailsV1Component', () => {
  let component: ServiceDetailsV1Component;
  let fixture: ComponentFixture<ServiceDetailsV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailsV1Component]
    });
    fixture = TestBed.createComponent(ServiceDetailsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
