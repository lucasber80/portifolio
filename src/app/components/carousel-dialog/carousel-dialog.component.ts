import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-carousel-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-dialog.component.html',
  styleUrl: './carousel-dialog.component.scss',
})
export class CarouselDialogComponent {
  images: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.images = data.images || [];
  }
}
