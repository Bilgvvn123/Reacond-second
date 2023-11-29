import React from "react";

const Todo = ({ todo123, complete, deleteTodo }) => {
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
			<span>{todo123}</span>
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
					onClick={() => deleteTodo(todo123)}
				>
					delete
				</button>
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
				<span
					style={{
						background: "gray",
						border: "none",
						color: "#fff",
						padding: "3px 5px",
						marginRight: "10px",
					}}
					onClick={complete}
				>
					Uncompleted
				</span>
			</div>
		</div>
	);
};

export default Todo;
