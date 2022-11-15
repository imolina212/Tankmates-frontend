import React from "react";

import { Link } from "react-router-dom";
import SpeciesCard from "../speciesCard/SpeciesCard";
import { GrStatusGoodSmall } from "react-icons/gr";
import "./Tank.scss";

const Tank = ({
	tank_id,
	is_saltwater,
	size,
	tank_name,
	user_id,
	waterchange_frequency,
	tankmates,
}) => (
	<Link to={`/users/${user_id}/tanks/${tank_id}`} className="tank">
		<h3>{tank_name}</h3>
		<div className="tank__container">
			<div className="tank__container__tankmates">
				{tankmates.map((tankMate, index) => {
					return <SpeciesCard key={index} {...tankMate} />;
				})}
			</div>
			<div className="tank__container__status">
				<p>
					Tank Status: Water Change Due{" "}
					<span>
						<GrStatusGoodSmall className="bad-status" />
					</span>
				</p>
			</div>
		</div>
	</Link>
);

export default Tank;
