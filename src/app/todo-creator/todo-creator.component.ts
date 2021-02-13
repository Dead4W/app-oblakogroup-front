import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss']
})
export class TodoCreatorComponent {

  todo = new FormControl('');
  project = new FormControl('');

  constructor(public ProjectService: ProjectService) {}

  ngOnInit() {
    this.ProjectService.updateProjects();
  }

  onSubmit() {
    let selectedProject: Project = new Project();

    if( this.project.value == "" || this.todo.value == "" ) {
      alert("Невозможно создать задачу без категории и названия");
      return;
    }

    for( let i in this.ProjectService.projects ) {
      let project = this.ProjectService.projects[i];
      if( project.title == this.project.value ) {
        selectedProject = project;
      }
    }

    if( selectedProject.id == 0 ) {
      selectedProject = new Project(this.project.value);
    }

    let todo = new Todo(this.todo.value);

  	this.ProjectService.addTodo(selectedProject, todo);
  }

}
