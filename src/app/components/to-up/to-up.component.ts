import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationModel } from '../../module/model/navigation.model';
import { Router } from '@angular/router';
import { EventsElementModel } from '../../module/model/events-element.model';

@Component({
  selector: 'app-to-up',
  standalone: true,
  imports: [],
  templateUrl: './to-up.component.html',
})
export class ToUpComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    this.eventsElementModel.setEventToApearTop('up', 80, 'apear', 'hidden');
  }

  router = inject(Router);
  plataformId = inject(PLATFORM_ID);
  navigationModel = new NavigationModel(this.router, this.plataformId);
  eventsElementModel = new EventsElementModel(this.plataformId);
  toTop() {
    this.navigationModel.navigateToElement('body');
  }
}
