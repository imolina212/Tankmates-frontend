import React, { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import "./MenuItem.scss";

const MenuItem = ({ text, relative, ...props }) => {
	const [displaySubMenu, setDisplaySubMenu] = useState(false);

	return (
		<li
			className="menuItem"
			onMouseEnter={() => setDisplaySubMenu(true)}
			onMouseLeave={() => setDisplaySubMenu(false)}
			style={relative && { position: "relative" }}
		>
			{text}
			{props.children && <MdKeyboardArrowDown className="arrow" />}
			{displaySubMenu && (
				<div onClick={() => setDisplaySubMenu(false)}>
					{props.children}
				</div>
			)}
		</li>
	);
};

export default MenuItem;
