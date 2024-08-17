import { Component, Input } from '@angular/core';
import { ProjectsInterface } from '../../module/interfaces/projects.interface';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

type social = { link: string, svg: string };

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    SocialMediaComponent,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './project-card.component.html',
  host: {
    'class': 'w-full h-[250px] rounded-md relative overflow-hidden cursor-pointer group'
  }
})
export class ProjectCardComponent {
  @Input({required: true}) data: ProjectsInterface | undefined;


  constructor() {}
}
