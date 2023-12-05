import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2";
import "./global.css";

import { BrowserRouter as Router } from "react-router-dom";
import TodoProvider from "./context/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<TodoProvider>
			<App2 />
		</TodoProvider>
	</Router>
);
