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
  host: {
    'class': 'flex p-5 h-20 w-[60%] justify-around items-center text-black border-primaryColorLight bg-primaryColorLight dark:bg-gray border-[0.5px] dark:border-gray shadow-boxShadow dark:shadow-white border-solid dark:text-white rounded-md my-14 mx-[20%] box-border max-2xl:px-24 max-2xl:w-[70%] max-2xl:mx-[15%] max-[1200px]:px-14 max-md:w-[80%] max-md:mx-[10%] max-[550px]:px-6 max-[550px]:w-[90%] max-[550px]:mx-[5%] max-[425px]:w-[95%] max-[425px]:mx-[2.5%]'
  }
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
