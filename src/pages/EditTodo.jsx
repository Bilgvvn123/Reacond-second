import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTodo = () => {
	const [updatedTodo, setUpdatedTodo] = useState("");
	const [todos, setTodos] = useState(JSON.parse(localStorage["todos"]) || []);

	const { todoId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setUpdatedTodo(getTodo().todo);
	}, []);

	const getTodo = () => {
		const todo = todos.find((t) => t.id == todoId);

		return todo;
	};

	const updateTodo = () => {
		const id = Number(todoId);
		if (updatedTodo === "") return alert("Ta utgaa oruulna uu!");
		else {
			const todos2 = [];
			todos.forEach((t) => {
				if (t.id === id)
					todos2.push({ ...getTodo(), todo: updatedTodo });
				else todos2.push(t);
			});
			setTodos(todos2);

			navigate("/todos");
		}
	};

	return (
		<div>
			<h2>EditTodo</h2>
			<div>
				<input
					type="text"
					value={updatedTodo}
					onChange={(e) => setUpdatedTodo(e.target.value)}
				/>
				<button style={{ marginLeft: "3px" }} onClick={updateTodo}>
					update
				</button>
			</div>
		</div>
	);
};

export default EditTodo;
