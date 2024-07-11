import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeModel } from './module/model/theme.model';
import { FooterComponent } from './components/footer/footer.component';
import { ToUpComponent } from './components/to-up/to-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ToUpComponent
  ],
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
