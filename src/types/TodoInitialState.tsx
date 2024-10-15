export interface TodoInitialState {
    todos: TodoType[],
    open: boolean
}

export interface TodoType {
    id: number,
    content: string
}