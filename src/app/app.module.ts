import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ProjectBlockComponent} from './project-block/project-block.component';
import {TodoCreatorComponent} from './todo-creator/todo-creator.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProjectBlockComponent,
    TodoCreatorComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TodoCreatorComponent]
})
export class AppModule { }
