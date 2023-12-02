import React from "react";
import { Link } from "react-router-dom";

import "./todo.css";

const Todo = ({ todo123, completed, deleteTodo }) => {
	return (
		<div
			style={{
				width: "95%",
				height: "50px",
				border: "1px solid #000",
				borderRadius: "10px",
				marginLeft: "10px",
				marginTop: "10px",
				paddingLeft: "5px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			{/* Todo */}
			<span className={todo123.completed ? "completed" : ""}>
				{todo123.todo}
			</span>
			<div
				style={{
					display: "flex",
					gap: "10px",
				}}
			>
				<button
					style={{
						background: "red",
						border: "none",
						color: "#fff",
						padding: "3px 5px",
					}}
					onClick={() => deleteTodo(todo123.id)}
				>
					delete
				</button>
				<Link to={`/edit/${todo123.id}`}>
					<button
						style={{
							background: "green",
							border: "none",
							color: "#fff",
							padding: "3px 5px",
						}}
					>
						edit
					</button>
				</Link>
				<span
					style={{
						background: todo123.completed ? "#355E3B" : "gray",
						border: "none",
						color: "#fff",
						padding: "3px 5px",
						marginRight: "10px",
					}}
					onClick={() =>
						completed(todo123.id, todo123.todo, todo123.completed)
					}
				>
					{todo123.completed ? "completed" : "Uncompleted"}
				</span>
			</div>
		</div>
	);
};

export default Todo;
