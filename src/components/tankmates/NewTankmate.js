import React, { useState } from "react";

import axios from "axios";
import "./NewTankmate.scss";

const API = process.env.REACT_APP_API_URL;

const NewTankmate = () => {
	const [tankmate, setTankmate] = useState([]);

	const addTankmate = () => {
		axios.post(`${API}/`);
	};

	return (
		<div className="newTankmateForm">
			<div className="newTankmateForm__header">New Tankmate Form</div>
			<form action="" className="newTankmateForm__container">
				<div className="newTankmateForm__container__field">
					<label htmlFor="species_name">Species Name</label>
					<input type="text" name="species_name" id="species_name" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="scientific_name">Scientific Name</label>
					<input
						type="text"
						name="scientific_name"
						id="scientific_name"
					/>
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="origin">Origin</label>
					<input type="text" name="origin" id="origin" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="pic">Pic</label>
					<input type="text" name="pic" id="pic" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="species_type">Species Type</label>
					<input type="text" name="species_type" id="species_type" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="min_temp">Min Temp</label>
					<input type="text" name="min_temp" id="min_temp" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="max_temp">Max Temp</label>
					<input type="text" name="max_temp" id="max_temp" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="min_ph">Min Ph</label>
					<input type="text" name="min_ph" id="min_ph" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="max_ph">Max Ph</label>
					<input type="text" name="max_ph" id="max_ph" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="temperament">Temperament</label>
					<input type="text" name="temperament" id="temperament" />
				</div>
				<div className="newTankmateForm__container__field">
					<label htmlFor="max_length">Max Length</label>
					<input type="text" name="max_length" id="max_length" />
				</div>
			</form>
			<input
				type="submit"
				className="newTankmateForm__button"
				value="Add tankmate"
			/>
		</div>
	);
};

export default NewTankmate;
