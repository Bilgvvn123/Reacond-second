import React, { useState } from "react";

import { Button } from "antd";

import BoxShadow from "./components/BoxShadow";
import TodoWrapper from "./components/TodoWrapper";

const App2 = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<TodoWrapper />
			<Button style={{ color: "red" }}>Click</Button>
		</div>
	);
};

export default App2;
