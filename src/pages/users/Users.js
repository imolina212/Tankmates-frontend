import React, { useState, useEffect } from "react";

import axios from "axios";
import UserCard from "./../../components/userCard/UserCard";
import "./Users.scss";

const API = process.env.REACT_APP_API_URL;

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/users`)
			.then((response) => {
				setUsers(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API]);

	return (
		<div className="users">
			<div className="users__container">
				{users.map((user, i) => {
					return <UserCard key={i} user={user} />;
				})}
			</div>
		</div>
	);
};

export default Users;
