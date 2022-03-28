import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylicPrintComponent } from './acrylic-print.component';

describe('AcrylicPrintComponent', () => {
  let component: AcrylicPrintComponent;
  let fixture: ComponentFixture<AcrylicPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrylicPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrylicPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
