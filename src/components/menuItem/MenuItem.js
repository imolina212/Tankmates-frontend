import React, { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import "./MenuItem.scss";

const MenuItem = ({ text, ...props }) => {
	const [displaySubMenu, setDisplaySubMenu] = useState(false);

	return (
		<li
			className="menuItem"
			onMouseEnter={() => setDisplaySubMenu(true)}
			onMouseLeave={() => setDisplaySubMenu(false)}
		>
			{text}
			<MdKeyboardArrowDown className="arrow" />
			{displaySubMenu && props.children}
		</li>
	);
};

export default MenuItem;
