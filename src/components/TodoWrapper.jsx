// input - utgaa awnaa
// add button - drna
// div - utguudaa gargana

// garc ireh todo-dee
// delete button - ustgahiin
// edit button - zaswarlah
// completed button - hiisen eseh

// create add -> create pagend
// todos -> todos pagend

import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import CreateTodo from "../pages/CreateTodo";
import Todos from "../pages/Todos";
import Todo from "./Todo";

const TodoWrapper = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage["todos"]) || []);

	useEffect(() => {
		localStorage["todos"] = JSON.stringify(todos);
	}, [todos]);

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
		<div>
			<Link to={"/todos"}>Todos</Link> <Link to={"/"}>Home</Link>{" "}
			<Link to={"/create"}>Create</Link>
			<Routes>
				<Route
					path="/create"
					element={
						<CreateTodo
							todos={todos}
							setTodos={setTodos}
							limitedTodos={limitedTodos}
						/>
					}
				/>

				<Route
					path="/todos"
					element={
						<Todos todos={todos} limitedTodos={limitedTodos} />
					}
				/>
			</Routes>
		</div>
	);
};

export default TodoWrapper;
