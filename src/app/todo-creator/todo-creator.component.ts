import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Project } from '../project';

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
  	this.ProjectService.addTodo(this.project.value, this.todo.value);
  }

}
