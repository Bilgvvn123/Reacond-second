import React, { useContext } from "react";
import { ChildY } from "./ChildY";
import { FatherContext } from "./ChildA";

export const ChildX = () => {
	const { hello } = useContext(FatherContext);

	return (
		<div>
			<h2>{hello}</h2>
			<ChildY />
		</div>
	);
};
