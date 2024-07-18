import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeModel {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getPreferenceTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.localStorage.getItem('theme') === 'dark')
        window.document.body.classList.add('dark');
      else window.document.body.classList.remove('dark');
    }
  }

  getActualTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (window.document.body.classList.contains('dark')) return true;
    }
    return false;
  }

  changeActualTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.document.body.classList.toggle('dark');
      if(!window.document.body.classList.contains('dark')) {
        window.localStorage.removeItem('theme');
      } else {
        window.localStorage.setItem('theme', 'dark');
      }
    }
  }
}
