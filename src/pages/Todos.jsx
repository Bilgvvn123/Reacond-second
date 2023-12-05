import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todos = () => {
	const { limitedTodos } = useContext(TodoContext);

	return (
		<div>
			<h2>Todo lists</h2>

			<div style={{ width: "700px" }}>
				{/* Todos */}
				{limitedTodos()}
			</div>
			{/* <Hello todos/> */}
		</div>
	);
};

export default Todos;
