import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./Table.scss";

const API = process.env.REACT_APP_API_URL;

const Table = ({ userId, tankId }) => {
	const [tankLogs, setTankLogs] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/tanklogs/${tankId}`)
			.then((response) => {
				console.log("TABLE RES.DATA", response.data);
				setTankLogs(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [tankId]);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put(`${API}/tanklogs/${tankId}`, tankLogs).then(() => {
			console.log("updated");
		});
	};

	return (
		<div className="table">
			<div>Water Change History</div>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>G's changed</th>
						<th>Ph</th>
						<th>Ammonia</th>
						<th>Nitrite</th>
						<th>Nitrates</th>
					</tr>
				</thead>
				<tbody>
					{tankLogs.map((tanklog, i) => {
						return (
							<tr key={i}>
								<td>
									{new Date(
										tanklog.waterchange_date
									).toLocaleDateString("en-us")}
								</td>
								<td>{tanklog.gallons_changed}</td>
								<td>{tanklog.ph}</td>
								<td>{tanklog.ammonia}</td>
								<td>{tanklog.nitrite}</td>
								<td>{tanklog.nitrate}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="table__buttons">
				<Link to={`${API}/users/${userId}/tanks/${tankId}/newTanklog`}>
					<button>add tank log</button>
				</Link>
			</div>
		</div>
	);
};

export default Table;
