import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "./Login.scss";

const API = process.env.REACT_APP_API_URL;

const Login = ({ loggedInUserId, setUser }) => {
	const [err, setErr] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const password = useRef("");
	const inputRef = useRef("");
	const navigate = useNavigate();

	useEffect(() => {
		if (loggedInUserId) {
			setTimeout(() => navigate("/tanks"), 500);
		}
	}, [loggedInUserId]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!password.current.value || !inputRef.current.value) return;
		try {
			const response = await axios.post(`${API}/users/login`, {
				email: inputRef.current.value,
				password: password.current.value,
			});
			setUser(response.data.id);
		} catch (err) {
			if (err.response.status == 400 && err.response.data.err) {
				setErr(err.response.data.err);
			}
			console.log(err);
		}
	};

	return (
		<div className="container">
			<div className="login">
				<div className="login__heading">Customer Log in</div>
				<form className="login__form" onSubmit={handleSubmit}>
					<label htmlFor="email" value="email">
						Email:<span style={{ color: "red" }}>*</span>
						<div className="login__form__inputFieldWrapper">
							<input
								type="text"
								className="login__form__inputField"
								ref={inputRef}
							/>
						</div>
					</label>
					<label htmlFor="standard-adornment-password">
						Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						className="login__form__inputField"
						ref={password}
					/>
					<div
						className="login__visibility"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <MdVisibility /> : <MdVisibilityOff />}
					</div>
					<input
						type="submit"
						className="login__form__button"
						value="Sign in"
					/>
				</form>
				<div className="login__message">
					<div className="login__message__error">
						{err && <span>{err}</span>}
					</div>
					<div className="login__message__terms">
						By clicking "Sign In", you agree to tankmates Terms of
						Use and Privacy Policy. California residents can review
						our Notice of Financial Incentives here.
					</div>
					<div className="login__signupLink">
						<p>
							<span>New to tankmates? </span>
							<Link to="/signup">Create account here</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
