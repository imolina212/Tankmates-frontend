import React from "react";

import { GrStatusGoodSmall } from "react-icons/gr";
import "./SpeciesCard.scss";

function SpeciesCard(tankmate) {
	const { id, tank_id, species_id, getSpeciesInfo, pic, species_name } =
		tankmate;

	return (
		<div className="tankmate">
			<div className="tankmate__image">
				<img src={pic} alt="tankmate" />
			</div>
		</div>
	);
}

export default SpeciesCard;
