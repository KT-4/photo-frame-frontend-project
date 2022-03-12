import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCaseSectionComponent } from './phone-case-section.component';

describe('PhoneCaseSectionComponent', () => {
  let component: PhoneCaseSectionComponent;
  let fixture: ComponentFixture<PhoneCaseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCaseSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCaseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
