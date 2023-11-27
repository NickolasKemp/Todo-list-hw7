import React from "react";
import Check from "./Check"
import { BsTrash } from "react-icons/bs";
import cn from "classnames";

 
const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className="flex items-center justify-between gap-4 mb-3 rounded-2xl bg-blue-100 p-3 w-full"
			
		>
			<button onClick={() => changeTodo(todo._id)} className="flex items-center gap-3">
			<Check isCompleted = {todo.isCompleted}/>
				<span className={cn({
					'line-through': todo.isCompleted,
				})} 
				>{todo.title} 
				</span>
				</button>
			<button onClick={() => removeTodo(todo._id)}>
		<BsTrash 
			size={22} 
			className="text-white hover:text-gray-400 transition-colors ease-in-out duration-100" />
			</button>
		</div>
	)
}

export default TodoItem