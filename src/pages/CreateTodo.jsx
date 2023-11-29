import React, { useState } from "react";

import Todo from "../components/Todo";

const CreateTodo = () => {
	const [todo, setTodo] = useState("");
	const [completed, setCompleted] = useState(false);
	const [todos, setTodos] = useState([]);

	const BabugiinAddFunc = () => {
		if (todo.length !== 0) {
			setTodos([...todos, todo]);

			// reset input
			setTodo("");
		} else {
			alert("Ta utgaa oruulna uu!");
		}
	};

	const deleteTodo = (todo) => {
		const x = [];

		todos.forEach((t) => {
			if (t !== todo) x.push(t);
		});

		setTodos(x);
	};

	const complete = () => {
		console.log("completed");
	};

	const limitedTodos = () => {
		const limitedTs = [];
		todos.forEach((t, i) => {
			if (i < 5)
				limitedTs.push(<Todo todo123={t} deleteTodo={deleteTodo} />);
		});

		return limitedTs;
	};

	console.log(limitedTodos());

	return (
		<div
			style={{
				width: "700px",
				height: "700px",
				border: "1px solid #000",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "30px",
				padding: "10px",
				borderRadius: "10px",
			}}
		>
			<div
				style={{
					display: "flex",
					gap: "15px",
				}}
			>
				{/* Input */}
				<input
					type="text"
					placeholder="Hiih ymaa oruulna uu!!!"
					value={todo}
					style={{
						width: "200px",
						height: "30px",
						padding: "5px 10px",
					}}
					onChange={(e) => setTodo(e.target.value)}
				/>

				{/* Add Button */}
				<button
					style={{
						width: "50px",
						height: "30px",
					}}
					onClick={BabugiinAddFunc}
					className="btn"
				>
					Add
				</button>
				<button
					style={{
						width: "50px",
						height: "30px",
					}}
					onClick={() => {
						setTodos([]);
					}}
					className="btn"
				>
					AC
				</button>
			</div>

			{/* Todos */}
			<div
				style={{
					border: "1px solid #000",
					height: "100%",
					width: "100%",
					margin: "20px",
				}}
				className="todos"
			>
				{/* Todo */}

				<div>{limitedTodos()}</div>
			</div>
		</div>
	);
};

export default CreateTodo;
