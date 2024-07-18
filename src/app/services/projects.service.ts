import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectsInterface } from "../module/interfaces/projects.interface";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private url = '/assets/json/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectsInterface[]> {
    return this.http.get<ProjectsInterface[]>(this.url);
  }
}
