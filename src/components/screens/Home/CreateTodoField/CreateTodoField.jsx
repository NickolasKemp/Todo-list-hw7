import React, { useState } from "react";




const CreateTodoField = ({ setTodos }) => {

	const [title, setTitle] = useState('')


	const addTodo = (title) => {
		setTodos(prev => [
			{
			_id: new Date(),
			title,
			isCompleted: false,
		},
			...prev,
		])
		setTitle('')
	}

	console.log(title)

	return (
		<div 
		className="flex items-center justify-between gap-4 mb-3 rounded-2xl border-white-200 border-2 px-5 py-3 w-full mt-10 placeholder: text-black-200 bg-blue-50">
			<input 
			type="text" 
			onChange={e => setTitle(e.target.value)} 
			value={title}
			onKeyPress={e => e.key === 'Enter' && addTodo(title)}
			className='bg-transparent w-full border-none outline-none' 
			placeholder="Add a task"

			/>
		</div>
	)
}

export default CreateTodoField