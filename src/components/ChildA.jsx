import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ChildE } from "./ChildE";

export const UserContext = createContext({});

const ChildA = () => {
	const [users, setUsers] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);

			setUsers(res.data);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<UserContext.Provider value={{ users, loading }}>
			<ChildE />
		</UserContext.Provider>
	);
};

export default ChildA;
