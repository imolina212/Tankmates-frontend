import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Tankmates from "../tankmates/Tankmates";
import Table from "../table/Table";
import "./TankDetails.scss";

function TankDetails() {
	const [tank, setTank] = useState({});
	const API = process.env.REACT_APP_API_URL;
	const { tankId } = useParams();

	useEffect(() => {
		axios
			.get(`${API}/tanks/${tankId}`)
			.then((response) => {
				setTank(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [tankId]);

	return (
		<div className="tankDetails">
			Tank Details Page
			<Tankmates tankId={tankId} />
			<Table tankId={tankId} />
		</div>
	);
}

export default TankDetails;
