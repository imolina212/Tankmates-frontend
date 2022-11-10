import React from "react";

import { Link } from "react-router-dom";
import "./UserCard.scss";

const UserCard = ({ user }) => {
	const { id, username, firstname, lastname, email, pic } = user;

	return (
		<Link to={`/users/${id}/tanks`}>
			<div className="userCard">
				<div className="userCard__pic">
					<img src={pic} alt="" />
				</div>
				<div className="userCard__info">
					<div className="userCard__info__username">{username}</div>
					<div className="userCard__info__fullname">
						Name : {firstname} {lastname}
					</div>
					<div className="userCard__info__email">Email : {email}</div>
				</div>
			</div>
		</Link>
	);
};

export default UserCard;
