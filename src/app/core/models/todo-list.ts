import { TodoItem } from './todo-item';
export class TodoList {
    public id: number;
    public name: string;
    public items: TodoItem[];

    public get finishedItems(): number{
      return this.items.filter(item => item.done).length;
    }

    public static getMockList(): TodoList {
        return {
            id: 0,
            name: `New List`,
            items: [],
            finishedItems: 0
        };
    }

}
