import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-experiencia.component.html',
  styleUrl: './card-experiencia.component.scss',
})
export class CardExperienciaComponent {
  @Input() dates: string[] = [];
  @Input() habilidades: string[] = [];
  @Input() desc: string = '';
  @Input() cargo: string = '';
  @Input() empresa: string = '';
  @Input() link: string = '';
}
