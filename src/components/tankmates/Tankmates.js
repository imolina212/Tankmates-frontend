import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import { FiMinus, FiPlus } from "react-icons/fi";
import SpeciesList from "../speciesList/SpeciesList";
import "./Tankmates.scss";

const API = process.env.REACT_APP_API_URL;

const Tankmates = ({ tankId }) => {
	const [tankmatesList, setTankmatesList] = useState([]);
	const [tankmateSearch, setTankmateSearch] = useState([]);
	const [speciesSearch, setSpeciesSearch] = useState("");
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		axios
			.get(`${API}/tankmates/tank/${tankId}`)
			.then((response) => {
				console.log(
					`Tankmates.js useEffect tankmates/tank/${tankId} response.data\n`,
					response.data
				);
				setTankmatesList(response.data);
				setRefresh(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [tankId, refresh]);

	useEffect(() => {
		if (speciesSearch) {
			const searchFilters = tankmatesList
				.map(({ species_id }) => species_id)
				.join();
			axios
				.get(
					`${API}/species/search/${speciesSearch}?filters=${searchFilters}`
				)
				.then((response) => {
					console.log(
						`Tankmates.js useEffect species/search/${speciesSearch} response.data\n`,
						response.data
					);
					setTankmateSearch(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [speciesSearch]);

	const addNewSpecieToTank = async (speciesId, tankId) => {
		try {
			const response = await axios.post(
				`${API}/tankmates/tank/${tankId}`,
				{ speciesId }
			);
			console.log(
				`SpeciesList.js handleClick speciesId=${speciesId} tankmates/tankmate/${tankId} response.data\n`,
				response.data
			);
			setSpeciesSearch("");
			setRefresh(true);
			return response.data;
			// setTankmateSearch(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	const updateQuantity = async (speciesId, removeTankmateId = 0) => {
		console.log("updateQuatinignit", speciesId, removeTankmateId);
		try {
			let response;
			if (!removeTankmateId) {
				response = await addNewSpecieToTank(speciesId, tankId);
				console.log("added new species", response);
				return;
			} else {
				response = await axios.delete(
					`${API}/tankmates/${removeTankmateId}`
				);
				console.log("removed a tankmate", response);
			}
			setRefresh(true);
			return;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="tankmates">
			<input
				type="search"
				placeholder="add new species to tank"
				value={speciesSearch}
				onChange={(e) => setSpeciesSearch(e.target.value)}
			/>
			{tankmateSearch && speciesSearch && (
				<SpeciesList
					speciesList={tankmateSearch}
					tankId={tankId}
					handleClick={addNewSpecieToTank}
				/>
			)}
			{tankmatesList.map(
				({ species_id, pic, species_name, tankmate_ids }, i) => (
					<div className="tankmates__info" key={i}>
						<div className="tankmates__info__pic">
							<img src={pic} alt="" />
						</div>
						<div className="tankmates__info__name">
							{species_name}
						</div>
						<div className="tankmates__info__quantity">
							<div
								className="button"
								onClick={() =>
									updateQuantity(
										species_id,
										tankmate_ids.pop()
									)
								}
							>
								<FiMinus />
							</div>
							{tankmate_ids.length}
							<div
								className="button"
								onClick={() => updateQuantity(species_id)}
							>
								<FiPlus />
							</div>
						</div>
						{/* <div className="tankmates__status">{tankmate.status}</div> */}
					</div>
				)
			)}
		</div>
	);
};

export default Tankmates;
