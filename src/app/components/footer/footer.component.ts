import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type button = { router: string; translante: string };

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
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
