import React, { useContext, useEffect } from "react";
import { UserContext } from "./ChildA";

export const ChildY = () => {
	const { loading, users } = useContext(UserContext);

	return <div>{loading && "loading"}</div>;
};
