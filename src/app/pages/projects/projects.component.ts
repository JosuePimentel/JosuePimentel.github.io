import { Component, OnInit, signal } from '@angular/core';
import { ProjectsInterface } from '../../module/interfaces/projects.interface';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { LoadComponent } from '../../components/load/load.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectCardComponent,
    LoadComponent
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects = signal<ProjectsInterface[]>([]);

  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.service.getProjects().subscribe((resp: ProjectsInterface[]) => {
      this.projects.set(resp);
    });
  }
}
