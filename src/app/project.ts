import { Todo } from './todo';

export class Project {
    id: number = 0;
    title: string = "";
    todos: Todo[] = [];

    constructor(title?: string) {
      this.title = title || "";
    }
}
