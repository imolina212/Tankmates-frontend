import React from "react";

import { IoArrowForwardCircle } from "react-icons/io5";
import "./Button.scss";

interface ButtonInterface {
	name: string;
	arrow: boolean;
	variant: string;
	size: string;
	in_stock: boolean;
}

const Button = ({
	name = "name",
	variant = "variant",
	size = "size",
	arrow = false,
	in_stock,
	...buttonProps
}: ButtonInterface) => {
	return (
		<button {...buttonProps} className={`btn ${variant} ${size}`}>
			{name}
			{arrow && (
				<IoArrowForwardCircle className="btn__arrow-icon" size={20} />
			)}
		</button>
	);
};

export default Button;
