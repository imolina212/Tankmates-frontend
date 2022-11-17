import React, { useEffect, useState } from "react";

import axios from "axios";
import "./SpeciesList.scss";

const API = process.env.REACT_APP_API_URL;

const SpeciesList = ({ speciesList, tankId, handleClick }) => {
	return (
		<div className="speciesList">
			{speciesList.map((specie, i) => (
				<div className="speciesList__info" key={i}>
					<div
						className="speciesList__info__addSpecies"
						onClick={() => {
							handleClick(specie.id, tankId);
						}}
					>
						+
					</div>
					<div className="speciesList__info__pic">
						<img src={specie.pic} alt="" />
					</div>
					<div className="speciesList__info__name">
						{specie.species_name}
					</div>
				</div>
			))}
		</div>
	);
};

export default SpeciesList;
