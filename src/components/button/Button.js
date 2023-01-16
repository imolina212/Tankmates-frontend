import React from "react";

import { IoArrowForwardCircle } from "react-icons/io5";
import "./Button.scss";

const Button = ({
	name = "name",
	variant = "variant",
	size = "size",
	arrow = false,
	in_stock,
	...buttonProps
}) => {
	return (
		<div
			{...buttonProps}
			className={`btn ${variant} ${size} ${!in_stock && "disabled"}`}
		>
			{name}
			{arrow && (
				<IoArrowForwardCircle className="btn__arrow-icon" size={20} />
			)}
		</div>
	);
};

export default Button;
