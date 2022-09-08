import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAcrylicNamePlateComponent } from './design-acrylic-name-plate.component';

describe('DesignAcrylicNamePlateComponent', () => {
  let component: DesignAcrylicNamePlateComponent;
  let fixture: ComponentFixture<DesignAcrylicNamePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignAcrylicNamePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAcrylicNamePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
