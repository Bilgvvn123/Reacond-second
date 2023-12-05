import React, { useState } from "react";

import { Button } from "antd";

import BoxShadow from "./components/BoxShadow";
import TodoWrapper from "./components/TodoWrapper";
import ChildA from "./components/ChildA";

const App2 = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{/* <TodoWrapper /> */}
			{/* <ChildA /> */}
			{/* <Button style={{ color: "red" }}>Click</Button> */}

			<p className="text-3xl font-bold underline">Hello world!</p>
		</div>
	);
};

export default App2;
