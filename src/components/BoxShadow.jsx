import React, { useState } from "react";
import "./boxshadow.css";

const BoxShadow = () => {
	const [boxShadow, setBoxshadow] = useState({
		x: 10,
		y: 10,
		blur: 5,
		spread: 1,
		color: "#000",
		opacity: 1,
		inset: true,
	});

	return (
		<div>
			<h1>Box Shadow CSS Generator</h1>

			<div className="Hello">
				<div className="Sidebar">
					<p>Box Shadow Options</p>
					<div>
						<label>
							Horizontal Shadow Length{"    "}
							<span>{boxShadow.x}px</span>
						</label>
						<input
							type="range"
							min={-190}
							max={190}
							value={10}
							onChange={(e) =>
								setBoxshadow({
									...boxShadow,
									x: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>
							Vertical Shadow Length <span>{boxShadow.y}px</span>
						</label>
						<input
							type="range"
							min={-190}
							max={190}
							onChange={(e) =>
								setBoxshadow({
									...boxShadow,
									y: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>
							Blur Radius <span>{boxShadow.blur}px</span>
						</label>
						<input
							type="range"
							max={400}
							onChange={(e) =>
								setBoxshadow({
									...boxShadow,
									blur: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>
							Spread Radius <span>{boxShadow.spread}px</span>
						</label>
						<input
							type="range"
							min={-200}
							max={200}
							onChange={(e) =>
								setBoxshadow({
									...boxShadow,
									spread: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>
							Shadow Color <span>{boxShadow.color}</span>
						</label>
						<input
							type="color"
							onChange={(e) =>
								setBoxshadow({
									...boxShadow,
									color: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>
							Shadow Color Opacity{" "}
							<span>{boxShadow.opacity}px</span>
						</label>
						<input
							type="range"
							min={0}
							max={1}
							step={0.1}
							onChange={(e) =>
								setBoxshadow({
									...boxShadow,
									opacity: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label>Inset</label>
						<button
							style={{ marginLeft: "30px", padding: "2px 10px" }}
							onClick={() =>
								setBoxshadow({
									...boxShadow,
									inset: !boxShadow.inset,
								})
							}
						>
							{boxShadow.inset ? "On" : "Off"}
						</button>
					</div>
				</div>
				<div className="Content">
					<div style={{ position: "relative" }}>
						<div
							style={{
								width: "350px",
								height: "250px",
								opacity: boxShadow.opacity,
								background: "#158cba",
								boxShadow: `${boxShadow.inset ? "inset" : ""} ${
									boxShadow.x
								}px ${boxShadow.y}px ${boxShadow.blur}px ${
									boxShadow.spread
								}px ${boxShadow.color}`,
							}}
							className="box"
						></div>

						<div style={{ marginTop: "100px" }}>
							box-shadow: {boxShadow.x}px 10px 5px 0px
							rgba(0,0,0,0.75);
							<br />
							-webkit-box-shadow: 10px 10px 5px 0px
							rgba(0,0,0,0.75);
							<br /> -moz-box-shadow: 10px 10px 5px 0px
							rgba(0,0,0,0.75);
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxShadow;
