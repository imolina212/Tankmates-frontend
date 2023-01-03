import React from "react";

import Button from "../button/Button";
import "./NewTankLog.scss";

const NewTankLog = () => {
	return (
		<div className="form">
			<form action="" className="form__container">
				<div className="form__container__inputField">
					<label htmlFor="date">Date</label>
					<input type="text" name="date" id="date" />
				</div>
				<div className="form__container__inputField">
					<label htmlFor="gallons_changed">Gallons Changed</label>
					<input
						type="text"
						name="gallons_changed"
						id="gallons_changed"
					/>
				</div>
				<div className="form__container__inputField">
					<label htmlFor="ph">Ph</label>
					<input type="text" name="ph" id="ph" />
				</div>
				<div className="form__container__inputField">
					<label htmlFor="ammonia">Ammonia</label>
					<input type="text" name="ammonia" id="ammonia" />
				</div>
				<div className="form__container__inputField">
					<label htmlFor="nitrite">Nitrite</label>
					<input type="text" name="nitrite" id="nitrite" />
				</div>
				<div className="form__container__inputField">
					<label htmlFor="nitrate">Nitrate</label>
					<input type="text" name="nitrate" id="nitrate" />
				</div>
			</form>
			<Button name="Add Tank Log" variant="primary" size="sq medium" />
		</div>
	);
};

export default NewTankLog;
