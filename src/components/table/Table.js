import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Table.scss";

const Table = ({ id }) => {
	const [tankLogs, setTankLogs] = useState([]);
	const API = process.env.REACT_APP_API_URL;

	useEffect(() => {
		axios
			.get(`${API}/tanklogs/${id}`)
			.then((response) => {
				console.log("TABLE RES.DATA", response.data);
				setTankLogs(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API, id]);

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
								<td>{tanklog.waterchange_date}</td>
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
		</div>
	);
};

export default Table;
