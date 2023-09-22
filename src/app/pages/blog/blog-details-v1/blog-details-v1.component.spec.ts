import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsV1Component } from './blog-details-v1.component';

describe('BlogDetailsV1Component', () => {
  let component: BlogDetailsV1Component;
  let fixture: ComponentFixture<BlogDetailsV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailsV1Component]
    });
    fixture = TestBed.createComponent(BlogDetailsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
