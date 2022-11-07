import React from "react";

import { GrStatusGoodSmall } from "react-icons/gr";
import "./SpeciesCard.scss";

function SpeciesCard({ id, tank_id, species_id, getSpeciesInfo }) {
	const specie = getSpeciesInfo(species_id);

	return (
		<div className="tankmate">
			<div className="tankmate__image">
				<img src={specie.pic} alt="tankmate" />
			</div>
			<div className="tankmate__info">
				<p>
					{specie.species_name}{" "}
					<span>
						Status:
						<GrStatusGoodSmall className="good-status" />
					</span>
				</p>
			</div>
		</div>
	);
}

export default SpeciesCard;
