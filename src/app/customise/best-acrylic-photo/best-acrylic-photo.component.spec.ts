import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestAcrylicPhotoComponent } from './best-acrylic-photo.component';

describe('BestAcrylicPhotoComponent', () => {
  let component: BestAcrylicPhotoComponent;
  let fixture: ComponentFixture<BestAcrylicPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestAcrylicPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestAcrylicPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
