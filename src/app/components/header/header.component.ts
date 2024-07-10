import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';

type button = { router: string; translante: string };

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    DarkModeComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  buttons: button[] = [
    {
      router: '',
      translante: 'Home',
    },
    {
      router: 'project',
      translante: 'Projetos',
    },
    {
      router: 'contact',
      translante: 'Contato',
    },
  ];
}
