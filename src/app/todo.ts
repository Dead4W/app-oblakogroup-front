export class Todo {
    id: number = 0;
    text: string = "";
    isCompleted: boolean = false;

    constructor(text: string) {
      this.text = text || "";
    }
}
