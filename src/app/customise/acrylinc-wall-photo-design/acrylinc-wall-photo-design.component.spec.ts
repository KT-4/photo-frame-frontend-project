import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylincWallPhotoDesignComponent } from './acrylinc-wall-photo-design.component';

describe('AcrylincWallPhotoDesignComponent', () => {
  let component: AcrylincWallPhotoDesignComponent;
  let fixture: ComponentFixture<AcrylincWallPhotoDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrylincWallPhotoDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrylincWallPhotoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
