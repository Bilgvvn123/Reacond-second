import React, { useContext, useState } from "react";

import Todo from "../components/Todo";
import { TodoContext } from "../context/TodoContext";

const CreateTodo = () => {
	const { todos, setTodos, limitedTodos } = useContext(TodoContext);
	const [todo, setTodo] = useState("");

	const BabugiinAddFunc = (e) => {
		console.log(e);
		console.log(new Date());
		if (todo.length !== 0) {
			setTodos([
				...todos,
				{
					todo,
					id: Math.floor(Math.random() * 100000),
					completed: false,
				},
			]);

			// reset input
			setTodo("");
		} else {
			alert("Ta utgaa oruulna uu!");
		}
	};

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

				<div>{limitedTodos("limit")}</div>
			</div>
		</div>
	);
};

export default CreateTodo;
