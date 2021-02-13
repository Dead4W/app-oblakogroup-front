import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(TodoCreatorComponent, dialogConfig);
  }

  title = 'app-oblakogroup-front';
}
