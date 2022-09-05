import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedBackliftComponent } from './led-backlift.component';

describe('LedBackliftComponent', () => {
  let component: LedBackliftComponent;
  let fixture: ComponentFixture<LedBackliftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedBackliftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedBackliftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
