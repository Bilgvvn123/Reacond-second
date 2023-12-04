import React, { useContext } from "react";
import { ChildContext } from "./ChildA";
import { TodoContext } from "../context/TodoContext";

export const ChildY = () => {
	const a = useContext(TodoContext);

	return <div>ChildY + {a}</div>;
};
