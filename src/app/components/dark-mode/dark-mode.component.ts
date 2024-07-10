import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { ThemeModel } from '../../module/model/theme.model';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode.component.html',
})
export class DarkModeComponent implements OnInit {

  plataformId = inject(PLATFORM_ID);
  themeModel = new ThemeModel(this.plataformId);

  isDarkModeActive: boolean = false;

  constructor( ) { }

  ngOnInit(): void {
    this.isDarkModeActive = this.themeModel.getActualTheme()
  }

  click(e: MouseEvent) {
    this.themeModel.changeActualTheme();
    this.isDarkModeActive = this.themeModel.getActualTheme()
  }
}
