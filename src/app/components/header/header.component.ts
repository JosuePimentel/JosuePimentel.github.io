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
  openMenu: boolean = false;
  buttons: button[] = [
    {
      router: 'home',
      translante: 'Home',
    },
    {
      router: 'projects',
      translante: 'Projetos',
    },
    {
      router: 'contact',
      translante: 'Contato',
    },
  ];
}
