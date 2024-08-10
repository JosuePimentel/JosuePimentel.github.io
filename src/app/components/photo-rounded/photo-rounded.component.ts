import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-rounded',
  standalone: true,
  imports: [],
  templateUrl: './photo-rounded.component.html',
  host: {
    'class': 'w-20 h-20 rounded-full overflow-hidden shadow-boxShadow shadow-black dark:shadow-white hover:shadow-shiny cursor-pointer transition-transform',
    'id': 'photo-rounded'
  }
})
export class PhotoRoundedComponent {

}
