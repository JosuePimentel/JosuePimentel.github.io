import { Component, OnInit, signal } from '@angular/core';
import { ProjectsInterface } from '../../module/interfaces/projects.interface';
import { ProjectsWebService } from '../../services/projects-web.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { LoadComponent } from '../../components/load/load.component';
import { DropDownComponent } from '../../components/drop-down/drop-down.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectCardComponent,
    LoadComponent,
    DropDownComponent
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  allProjects: ProjectsInterface[] = [];
  filteredProjects = signal<ProjectsInterface[]>([]);
  actualFilter = '';
  filters: string[] = [
    'Todos',
    'Web',
    'Terminal'
  ]

  constructor(private service: ProjectsWebService) {}

  ngOnInit(): void {
    this.service.getProjects().subscribe((resp: any) => {
      this.allProjects = resp
      this.changeActualFilter('Todos')
    });
  }

  changeActualFilter(e: string) {
    this.actualFilter = e;

    if(this.actualFilter == 'Todos') {
      this.filteredProjects.set(this.allProjects);
    } else {
      this.filteredProjects.set([]);
      this.allProjects.forEach((ele: ProjectsInterface) => {
        if(ele.type == this.actualFilter)
          this.filteredProjects().push(ele);
      });
    }
  }
}
