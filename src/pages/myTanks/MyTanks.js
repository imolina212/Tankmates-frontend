import React, { useEffect, useState } from "react";

import axios from "axios";
import Tank from "../../components/tank/Tank";
import "./MyTanks.scss";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const MyTanks = ({ loggedInUserId }) => {
	const [tanks, setTanks] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!loggedInUserId) {
			setTimeout(() => navigate("/login"), 2000);
		}
	}, []);

	useEffect(() => {
		axios
			.get(`${API}/tanks/user/${loggedInUserId}`)
			.then((response) => {
				setTanks(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [loggedInUserId]);
	if (!loggedInUserId) {
		return (
			<div className="myTanks-page">
				<div className="myTanks-page__message">
					<p>Please log in to view or add tanks</p>
					<p>Redirecting to login page</p>
				</div>
			</div>
		);
	}
	return (
		<div className="myTanks-page">
			<div className="tanks">
				{tanks.map((tank, index) => {
					return <Tank key={index} {...tank} />;
				})}
			</div>
		</div>
	);
};

export default MyTanks;
