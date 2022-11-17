import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Signup.scss";

const API = process.env.REACT_APP_API_URL;

const Signup = () => {
	const username = useRef("");
	const firstname = useRef("");
	const lastname = useRef("");
	const email = useRef("");
	const password = useRef("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			username: username.current.value,
			firstname: firstname.current.value,
			lastname: lastname.current.value,
			email: email.current.value,
			password: password.current.value,
		};
		if (Object.values(payload).some((val) => !val)) return;
		try {
			console.log("signup.js payload", payload);
			const response = await axios.post(`${API}/users/signup`, payload);
			console.log("Signup.js response.data", response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="signup">
				<div className="signup__heading">Create Account</div>
				<div className="signup__form">
					<form onSubmit={handleSubmit}>
						<label htmlFor="username" value="username">
							Username
							<input
								ref={username}
								name="username"
								type="text"
								className="signup__form__inputField"
								placeholder="Username"
							/>
						</label>
						<label htmlFor="firstname" value="firstname">
							First Name
							<input
								ref={firstname}
								name="firstname"
								type="text"
								className="signup__form__inputField"
								placeholder="First Name"
							/>
						</label>
						<label htmlFor="lastname" value="lastname">
							Last Name
							<input
								ref={lastname}
								name="lastname"
								type="text"
								className="signup__form__inputField"
								placeholder="Last Name"
							/>
						</label>
						<label htmlFor="email" value="email">
							Email Address
							<input
								ref={email}
								name="email"
								type="text"
								className="signup__form__inputField"
								placeholder="Email Address"
							/>
						</label>
						<label htmlFor="password" value="password">
							Password
							<input
								ref={password}
								name="password"
								type="text"
								className="signup__form__inputField"
								placeholder="Password"
							/>
						</label>
						<input
							type="submit"
							className="signup__form__button"
							value="Sign Up"
						/>
					</form>
				</div>
				<div className="signup__message">
					<div className="signup__message__error"></div>
					<div className="signup__message__terms">
						By clicking "Sign up", you agree to tankmates Terms of
						Use and Privacy Policy. California residents can review
						our Notice of Financial Incentives here.
					</div>
					<div className="signup__loginLink">
						<p>
							<span>Already a tankmates member? </span>
							<Link to="/login">Log in here</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
