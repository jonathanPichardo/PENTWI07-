export class TodoItem {
    public description: string;
    public done: boolean;

    public static getMockItem() {
        return {
            description: 'New Task',
            done: false
        };
    }

}
