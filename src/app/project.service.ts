import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Todo } from './todo';
import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';

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
    this.http.get(this.projects_url).subscribe((data:any) => {
		this.projects = plainToClass(Project, data);
    });
  }

  public addTodo(project: Project, todo: Todo) {
  	let data_request = {
  		project: classToPlain(project),
  		todo: classToPlain(todo),
  	};

    this.http.post(this.create_todo, data_request).subscribe((data:any) => {

      if( project.id == 0 ) {
      	project = plainToClass(Project, [data.project])[0];
  		this.projects.push(project);
      }

      todo = plainToClass(Todo, [data.todo])[0];

      project.todos.push(todo);

      console.log(project);
    });
  }

  public todoChangeState(project: Project, todo: Todo, state: boolean) {
    this.http.patch(this.domain + `/projects/${project.id}/todos/${todo.id}`, {
      "state": state,
    }).subscribe((data:any) => {
    	todo = plainToClass(Todo, data)[0];
    });
  }
}
