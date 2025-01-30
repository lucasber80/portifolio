import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarouselDialogComponent } from '../carousel-dialog/carousel-dialog.component';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss',
})
export class CardProjetoComponent {
  @Input() img: string = '';
  @Input() titulo: string = '';
  @Input() desc: string = '';
  @Input() link: string = '';
  @Input() habilidades: string[] = [];
  @Input() carousel_imgs: string[] = [];

  readonly dialog = inject(MatDialog);

  openCarouselDialog(): void {
    this.dialog.open(CarouselDialogComponent, {
      width: '90%', // Define a largura como 90% da tela
      maxWidth: '900px', // Define o tamanho máximo (opcional)
      height: 'auto', // Altura automática baseada no conteúdo
      maxHeight: '80vh', // Limite a altura a 80% da viewport
      data: {
        images: this.carousel_imgs,
      },
    });
  }

  cardClicado() {
    if (this.carousel_imgs.length > 0) {
      this.openCarouselDialog();
    } else {
      window.open(this.link, '_blank');
    }
  }
}
