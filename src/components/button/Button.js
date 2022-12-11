import React from "react";

import "./Button.scss";

const Button = ({ name = "name", variant = "variant", size = "size" }) => {
	return (
		<div className="button-container">
			<button className={`btn ${variant} ${size}`}>{name}</button>
		</div>
	);
};

export default Button;
