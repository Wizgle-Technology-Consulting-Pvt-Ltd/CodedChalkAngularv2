import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerInternshipComponent } from './summer-internship.component';

describe('SummerInternshipComponent', () => {
  let component: SummerInternshipComponent;
  let fixture: ComponentFixture<SummerInternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummerInternshipComponent]
    });
    fixture = TestBed.createComponent(SummerInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
