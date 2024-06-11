import { useState } from "react";

function ToDoList() {
	const [todos, setTodos] = useState([]);
	const [newItem, setNewItem] = useState("");

	const handleAddTodoItem = (event) => {
		event.preventDefault;

		const newTodoItem = {
			id: Math.random().toString(36).substring(2, 9),
			text: newItem,
			completed: false,
		};

		setTodos([...todos, newTodoItem]);

		setNewItem("");
	};

	return (
		<div>
			<h2>My To-do list</h2>
			<input
				type="text"
				value={newItem}
				placeholder="Enter new to-do item"
				onChange={(event) => setNewItem(event.target.value)}
			/>
			<button onClick={(event) => handleAddTodoItem(event)}>Add item</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
