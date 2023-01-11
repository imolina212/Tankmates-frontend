import React from "react";

import "./SubMenu.scss";

const SubMenu = ({ ...props }) => {
	return <ol className="subMenu">{props.children}</ol>;
};

export default SubMenu;
