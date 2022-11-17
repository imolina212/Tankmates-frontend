import React from "react";

import "./Signup.scss";

const Signup = () => {
	return (
		<div className="container">
			<div className="signup">
				<div className="signup__heading">Create Account</div>
				<div className="signup__form">
					<form>
						<label htmlFor="firstName" value="firstName"></label>
						<input
							type="text"
							className="signup__form__inputField"
							placeholder="First Name"
						/>
						<label htmlFor="lastName" value="lastName"></label>
						<input
							type="text"
							className="signup__form__inputField"
							placeholder="Last Name"
						/>
						<label htmlFor="email" value="email"></label>
						<input
							type="text"
							className="signup__form__inputField"
							placeholder="Email Address"
						/>
						<label htmlFor="password" value="password"></label>
						<input
							type="text"
							className="signup__form__inputField"
							placeholder="Password"
						/>
						<input
							type="submit"
							className="signup__form__button"
							value="Sign Up"
						/>
					</form>
				</div>
				<div className="signup__message">
					<div className="signup__message__error">
						{/* {err && <span>{err}</span>} */}
					</div>
					<div className="signup__message__terms">
						By clicking "Log In", you agree to tankmates Terms of
						Use and Privacy Policy. California residents can review
						our Notice of Financial Incentives here.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
