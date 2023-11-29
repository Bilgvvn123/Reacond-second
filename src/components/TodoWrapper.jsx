// input - utgaa awnaa
// add button - drna
// div - utguudaa gargana

// garc ireh todo-dee
// delete button - ustgahiin
// edit button - zaswarlah
// completed button - hiisen eseh

// create add -> create pagend
// todos -> todos pagend

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import CreateTodo from "../pages/CreateTodo";
import Todos from "../pages/Todos";

const TodoWrapper = () => {
	return (
		<div>
			<Link to={"/todos"}>Todos</Link> <Link to={"/"}>Home</Link>{" "}
			<Link to={"/create"}>Create</Link>
			<Routes>
				<Route path="/create" element={<CreateTodo />} />

				<Route path="/todos" element={<Todos />} />
			</Routes>
		</div>
	);
};

export default TodoWrapper;
