import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  standalone: true,
  imports: [],
  templateUrl: './card-photo.component.html',
})
export class CardPhotoComponent {
  @Input({required: true}) img: string = '';
}
