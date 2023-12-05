import React, { createContext, useState } from "react";

import Todo from "../components/Todo";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	const limitedTodos = (limit) => {
		const limitedTs = [];

		if (limit) {
			todos.forEach((t, i) => {
				if (i < 5)
					limitedTs.push(
						<Todo
							key={i}
							todo123={t}
							completed={completed}
							deleteTodo={deleteTodo}
						/>
					);
			});
		} else {
			todos.forEach((t, i) => {
				limitedTs.push(
					<Todo
						key={i}
						todo123={t}
						completed={completed}
						deleteTodo={deleteTodo}
					/>
				);
			});
		}

		return limitedTs;
	};

	const deleteTodo = (id) => {
		const x = [];

		todos.forEach((t) => {
			if (t.id !== id) x.push(t);
		});

		setTodos(x);
	};

	const completed = (id, todo, completed) => {
		let completedArr = [];

		console.log(id, todo, completed);

		todos.forEach((t) => {
			if (id === t.id) {
				completedArr.push({
					id,
					todo,
					completed: !completed,
				});

				console.log("first");
			} else completedArr.push(t);
		});

		setTodos(completedArr);
	};

	return (
		<TodoContext.Provider value={{ todos, setTodos, limitedTodos }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
