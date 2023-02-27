import React, { useState } from "react";

import axios from "axios";
import Button from "./../button//Button";
import "./../button/Button.scss";
import "./Newsletter.scss";

const API = process.env.REACT_APP_API_URL;

function Newsletter() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post(`${API}/newsletter-signup`, {
				firstName,
				lastName,
				email,
			});
			setFirstName("");
			setLastName("");
			setEmail("");

			if (!firstName || !lastName || !email) {
				window.alert("unsuccessful");
			} else {
				window.alert("successful");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="newsletterSubscription">
			<div className="newsletterSubscription__title">
				<h4>Subscribe to all the fun</h4>
				<p>
					Stay in touch with tankmates, see latest on updates, events
					and much more!
				</p>
			</div>
			<div>
				<form
					className="newsletterSubscription__formInput"
					onSubmit={handleSubmit}
				>
					<div className="newsletterSubscription__formInput__name">
						<input
							type="text"
							name="firstName"
							id="first-name"
							value={firstName} // needs to be 3 or more than
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First Name"
						/>

						<input
							type="text"
							name="lastName"
							id="last-name"
							value={lastName} // needs to be 3 or more than
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last Name"
						/>
					</div>

					<input
						className="newsletterSubscription__formInput__email"
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>

					<button
						className="btn primary rd sq small extend"
						variant="primary"
						type="submit"
					>
						SIGN UP NOW
					</button>
				</form>
			</div>
		</div>
	);
}

export default Newsletter;
