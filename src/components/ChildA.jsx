import React, { useState, createContext, useEffect } from "react";
import { ChildE } from "./ChildE";
import TodoProvider from "../context/TodoContext";

export const ChildContext = createContext();
export const FatherContext = createContext();

const ChildA = () => {
	const [a, setA] = useState("Sain bnuu Child A-s mendcilj baina");

	return (
		<TodoProvider>
			<FatherContext.Provider value={{ hello: "hello" }}>
				<ChildContext.Provider value={a}>
					<ChildE />
				</ChildContext.Provider>
			</FatherContext.Provider>
		</TodoProvider>
	);
};

export default ChildA;
