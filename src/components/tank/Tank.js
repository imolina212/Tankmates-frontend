import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import SpeciesCard from "../speciesCard/SpeciesCard";
import { GrStatusGoodSmall } from "react-icons/gr";
import "./Tank.scss";

const API = process.env.REACT_APP_API_URL;

const Tank = ({
	id,
	is_saltwater,
	size,
	tank_name,
	user_id,
	waterchange_frequency,
	tankMates,
	getSpeciesInfo,
}) => (
	<div className="tank">
		{tank_name}
		{tankMates.map((tankMate, index) => (
			<SpeciesCard
				key={index}
				{...tankMate}
				getSpeciesInfo={getSpeciesInfo}
			/>
		))}
		<div className="tank__status">
			<p>
				Tank Status: Water Change Due{" "}
				<span>
					<GrStatusGoodSmall className="bad-status" />
				</span>
			</p>
		</div>
	</div>
);

export default Tank;
