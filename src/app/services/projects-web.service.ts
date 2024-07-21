import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectsInterface } from "../module/interfaces/projects.interface";

@Injectable({
  providedIn: 'root'
})

export class ProjectsWebService {
  private url = '/assets/json/projects.json';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(this.url);
  }
}
