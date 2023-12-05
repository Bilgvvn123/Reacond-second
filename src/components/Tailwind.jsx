import React from "react";

const Tailwind = () => {
	return (
		<div>
			<div className="h-screen bg-slate-500">
				<h1 className="text-blue-200 bg-blue-500 text-[50px] leading-[100px] tracking-[30px] w-[330px] p-[20px] m-auto  border-pink-900 border-[20px] border-solid rounded-b-[50px] hover:text-[20px] hover:rounded-none hover:border-none animate-pulse ">
					Hello world!
				</h1>
				<a href="#about">about</a>
				<a href="#contact">contact</a>
				<a href="#settings">settings</a>
			</div>
			<div id="about" className="h-screen bg-green-300"></div>
			<div id="contact" className="h-screen bg-green-600"></div>
			<div id="settings" className="h-screen bg-green-900"></div>
		</div>
	);
};

export default Tailwind;
