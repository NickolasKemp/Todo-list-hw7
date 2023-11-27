import React, { useState } from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./CreateTodoField/CreateTodoField";


const data = [
	{
		_id: '1',
		title: 'Finish the homework of Dev-School',
		isCompleted: false,
	},
	{
		_id: '2',
		title: 'Read the book',
		isCompleted: false,
	},
	{
		_id: '3',
		title: 'Go to shop',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))


	const addTodo = (title) => {
		setTodos([...todos, {
			_id: new Date(),
			title,
			isCompleted: false
		},
		])
	}

	window.addTodo = addTodo

	return (
		<div className=' text-black w-4/5 mx-auto'>
			<h1 className="text-2xl font-bold mb-4 text-white text-center">To do list</h1>
			<CreateTodoField setTodos={setTodos} />
			{todos.map(todo => (
				< TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo} />
			))}
		</div>
	)
}

export default Home