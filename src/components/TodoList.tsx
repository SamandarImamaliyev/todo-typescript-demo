import { useSelector } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../store/store'
import { TodoType } from '../types/TodoInitialState'

const TodoList = () => {
    const { todos } = useSelector((store: RootState) => store.todo)

    return (
        <div className='flex justify-center bg-[#001E62] h-[calc(100vh-200px)]'>
            <div className='container flex flex-col justify-center items-center pb-3'>
                <div className='w-[75%]'>
                    <div className='text-[#fff] text-center text-[24px]'>ToDo List</div>
                    <div className='h-[600px] bg-[#fff] rounded-[8px] mt-[10px] p-[20px] overflow-y-auto'>
                        {
                            todos?.map((todo: TodoType, index: number) => (
                                <Todo key={todo.id} todoProp={todo} index={index} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoList