import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeModel } from './module/model/theme.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'portifolio';

  plataformId = inject(PLATFORM_ID)
  themeModel = new ThemeModel(this.plataformId);

  constructor( ) { }

  ngOnInit(): void {
    this.themeModel.getPreferenceTheme()
  }
}
