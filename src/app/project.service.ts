import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  private domain = "https://app-oblakogroup.herokuapp.com";
  private projects_url = this.domain + "/projects";
  private create_todo = this.domain + "/todos";

  projects: Project[] = [];

  public updateProjects() {
    this.http.get(this.projects_url).subscribe((data:any) => this.projects=data);
  }

  public addTodo(project_title: string, todo_text: string) {
  	let data_request = {
  		project: {
  			title: project_title,
  		},
  		todo: {
  			text: todo_text,
  		},
  	};

    this.http.post(this.create_todo, data_request).subscribe((data:any) => {
      this.updateProjects();
    });
  }

  public todoChangeState(project_id: number, todo_id: number, state: boolean) {
    this.http.patch(this.domain + `/projects/${project_id}/todos/${todo_id}`, {
      "state": state,
    }).subscribe((data:any) => {
      this.updateProjects();
    });
  }
}
