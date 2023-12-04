// import
import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [a, setA] = useState("SAin uuuuuuuuuuuuuuuuuu");

	return <TodoContext.Provider value={a}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
