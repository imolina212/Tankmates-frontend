import React from "react";

import "./Table.scss";

const Table = () => {
	return (
		<div className="table">
			<table>
				<tr>
					<th>Date</th>
					<th>G's changed</th>
					<th>Ph</th>
					<th>Ammonia</th>
					<th>Nitrite</th>
					<th>Nitrates</th>
				</tr>
				<tr>
					<td>10/18/22</td>
					<td>20</td>
					<td>7</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>11/08/22</td>
					<td>20</td>
					<td>7</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
				<tr>
					<td>11/28/22</td>
					<td>20</td>
					<td>7</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
			</table>
		</div>
	);
};

export default Table;
