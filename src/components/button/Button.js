import React from "react";

import "./Button.scss";

const Button = ({
	name = "name",
	variant = "variant",
	size = "size",
	...buttonProps
}) => {
	return (
		<div className="button-container">
			<button {...buttonProps} className={`btn ${variant} ${size}`}>
				{name}
			</button>
		</div>
	);
};

export default Button;
