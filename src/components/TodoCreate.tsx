import { useDispatch } from "react-redux"
import { createTodo } from "../features/todo/todoSlice"
import { useState } from "react";
import { TodoType } from "../types/TodoInitialState";

const TodoCreate = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<string>('');

    const handleClick = () => {
        if (todo.trim().length == 0) {
            alert("add todo");
            return;
        }

        const payload: TodoType = {
            id: Math.floor((Math.random() * 12345) / Math.random()),
            content: todo
        }

        dispatch(createTodo(payload));
        setTodo('');
    }

    return (
        <div className="bg-[#A6192E] h-[200px] flex justify-center">
            <div className="container flex justify-center" >
                <div className={`flex flex-col gap-3 pt-5 w-[75%]`}>
                    <div>
                        <input type="text" value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTodo(e.target.value) }} className="w-[100%] h-[60px] rounded-md border-4 outline-none px-4 border-slate-900" />
                    </div>
                    <div>
                        <button className="w-[100%] bg-slate-900 text-white font-bold outline rounded-md h-[60px] hover:text-yellow-200 "
                            onClick={() => { handleClick() }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoCreate