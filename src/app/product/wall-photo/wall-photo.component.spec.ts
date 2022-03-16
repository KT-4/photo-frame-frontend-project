import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPhotoComponent } from './wall-photo.component';

describe('WallPhotoComponent', () => {
  let component: WallPhotoComponent;
  let fixture: ComponentFixture<WallPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
