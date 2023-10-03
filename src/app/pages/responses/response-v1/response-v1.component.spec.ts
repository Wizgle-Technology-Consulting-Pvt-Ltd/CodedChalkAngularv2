import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseV1Component } from './response-v1.component';

describe('ResponseV1Component', () => {
  let component: ResponseV1Component;
  let fixture: ComponentFixture<ResponseV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseV1Component]
    });
    fixture = TestBed.createComponent(ResponseV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
