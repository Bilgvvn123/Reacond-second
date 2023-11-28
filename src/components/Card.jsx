import React from "react";

const Card = ({ color, text, title }) => {
	return (
		<div
			style={{
				width: "400px",
				backgroundColor: color,
				padding: "10px 20px",
				textAlign: "center",
				borderRadius: "10px",
			}}
			className="Card"
		>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
};

export default Card;
