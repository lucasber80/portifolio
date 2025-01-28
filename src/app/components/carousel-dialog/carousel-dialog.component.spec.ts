import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDialogComponent } from './carousel-dialog.component';

describe('CarouselDialogComponent', () => {
  let component: CarouselDialogComponent;
  let fixture: ComponentFixture<CarouselDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
