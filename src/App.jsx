import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setPosts(res.data);
		};

		fetchPosts();
	}, []);

	// const tuwshuugiinHasah5 = () => {
	// 	let shineArr = [];
	// 	for (let i = 0; i < 10; i++) {
	// 		shineArr.push(
	// 			<Card
	// 				key={posts[i].id}
	// 				title={posts[i].title}
	// 				text={posts[i].body}
	// 			/>
	// 		);
	// 	}

	// 	return shineArr;
	// };

	const a = () => {
		const x = posts.filter((el) => el.id < 11);

		return x.map((el) => (
			<Card key={el.id} title={el.title} text={el.body} />
		));
	};

	return (
		<div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
			{/* <input type="color" /> */}
			<Card
				color="#ccc"
				title="Why do we use it?"
				text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
			/>
			<Card color="red" />
			<Card color="blue" />

			{/* {posts.map((el) => {
				return <Card title={el.title} text={el.body} />;
			})} */}
			{/* {posts.length !== 0 ? a() : ""} */}

			{/* {posts.length !== 0 ? tuwshuugiinHasah5() : ""} */}
		</div>
	);
}

export default App;
