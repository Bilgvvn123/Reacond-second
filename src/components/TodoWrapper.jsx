// input - utgaa awnaa
// add button - drna
// div - utguudaa gargana

// garc ireh todo-dee
// delete button - ustgahiin
// edit button - zaswarlah
// completed button - hiisen eseh

// create add -> create pagend
// todos -> todos pagend

import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

import CreateTodo from "../pages/CreateTodo";
import Todos from "../pages/Todos";
import EditTodo from "../pages/EditTodo";

const TodoWrapper = () => {
	const { todos, setTodos } = useContext(TodoContext);

	useEffect(() => {
		if (!localStorage["todos"]) {
			localStorage["todos"] = "[]";
		} else {
			setTodos(JSON.parse(localStorage["todos"]));
		}
	}, []);

	useEffect(() => {
		localStorage["todos"] = JSON.stringify(todos);
	}, [todos]);

	return (
		<div>
			<Link to={"/todos"}>Todos</Link> <Link to={"/"}>Home</Link>{" "}
			<Link to={"/create"}>Create</Link>
			<Routes>
				<Route path="/create" element={<CreateTodo />} />

				<Route path="/todos" element={<Todos />} />

				<Route path="/edit/:todoId" element={<EditTodo />} />
			</Routes>
		</div>
	);
};

export default TodoWrapper;
