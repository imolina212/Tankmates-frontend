import React, { useEffect, useState } from "react";

import axios from "axios";
import Tank from "../../components/tank/Tank";
import "./MyTanks.scss";

const API = process.env.REACT_APP_API_URL;

const MyTanks = () => {
	const [tanks, setTanks] = useState([]);
	const [commonSpecies, setCommonSpecies] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/tanks`)
			.then((response) => {
				console.log("MY TANKS RESPONSE", response.data);
				setTanks(response.data.tanks);
				setCommonSpecies(response.data.commonSpecies);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API]);

	return (
		<div className="myTanks-page">
			{tanks.map((tank, index) => (
				<Tank
					key={index}
					getSpeciesInfo={(id) => commonSpecies[id]}
					{...tank}
				/>
			))}
		</div>
	);
};

export default MyTanks;
