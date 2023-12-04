import React from "react";

const Todos = ({ limitedTodos }) => {
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
