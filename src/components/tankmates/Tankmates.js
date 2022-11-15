import React, { useEffect, useState } from "react";

import axios from "axios";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./Tankmates.scss";

const API = process.env.REACT_APP_API_URL;

const Tankmates = ({ tankId }) => {
	const [tankmatesList, setTankmatesList] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/tankmates/tank/${tankId}`)
			.then((response) => {
				console.log(
					`Tankmates.js useEffect tankmates/tank/${tankId} response.data\n`,
					response.data
				);
				setTankmatesList(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [tankId]);

	return (
		<div className="tankmates">
			Tankmates component
			{tankmatesList.map((tankmate, i) => (
				<div className="tankmates__info" key={i}>
					<div className="tankmates__info__pic">
						<img src={tankmate.pic} alt="" />
					</div>
					<div className="tankmates__info__name">
						{tankmate.species_name}
					</div>
					<div className="tankmates__info__quantity">
						<div className="button">
							<FiMinus />
						</div>
						{tankmate.quantity}
						<div className="button">
							<FiPlus />
						</div>
					</div>
					{/* <div className="tankmates__status">{tankmate.status}</div> */}
				</div>
			))}
		</div>
	);
};

export default Tankmates;
