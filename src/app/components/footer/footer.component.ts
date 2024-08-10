import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type button = { router: string; translante: string };

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  host: {
    'class': 'text-lightGray flex items-center justify-between w-full pt-6 mt-2 text-sm separator max-lg:flex-col max-lg:gap-2'
  }
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
