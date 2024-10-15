import { GrEdit } from 'react-icons/gr'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteTodoById, setOpen } from '../features/todo/todoSlice'
import Modal from './Modal'
import { TodoProp } from '../types/TodoProp'



const Todo = ({ todoProp, index }: TodoProp) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodoById(todoProp.id));
    }

    const handleEdit = () => {
        dispatch(setOpen());
    }
    return (
        <div className='text-[#111111] min-h-[40px] flex justify-between items-center mt-[5px] border-b-[1px] border-b-[#111111]'>
            <div className='font-bold'>
                <span className='mr-1'>{index + 1}.</span>
                {todoProp.content}
            </div>
            <div className='flex gap-[10px] text-[20px]'>
                <div className='cursor-pointer hover:scale-125 transition-all'>
                    <RiDeleteBinLine onClick={handleDelete} />
                </div>
                <div className='cursor-pointer hover:scale-125 transition-all'>
                    <GrEdit onClick={handleEdit} />
                </div>
            </div>
            <Modal todoProp={todoProp} index={index} />
        </div>
    )
}

export default Todo