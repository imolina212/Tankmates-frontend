import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./Login.scss";

const API = process.env.REACT_APP_API_URL;

const Login = ({ loggedInUserId, setUser }) => {
	const [err, setErr] = useState("");
	const inputRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (loggedInUserId) {
			navigate("/tanks");
		}
	}, [loggedInUserId]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(inputRef);
			const response = await axios.post(`${API}/users/login`, {
				email: inputRef.current.value,
			});
			console.log("MY USER RESPONSE", response.data);
			setUser(response.data.id);
		} catch (err) {
			if (err.response.status == 400 && err.response.data.err) {
				console.log("if error");
				setErr(err.response.data.err);
			}
			console.log(err);
		}
	};

	return (
		<div className="login">
			<div className="login__heading">Customer Log in</div>
			<div className="login__form">
				<form onSubmit={handleSubmit}>
					<label htmlFor="email" value="email">
						Email:
						<input type="text" ref={inputRef} />
					</label>
					<input type="submit" value="Log in" />
				</form>
			</div>
			<div className="login__message">
				{err && <span style={{ color: "red" }}>{err}</span>}
			</div>
		</div>
	);
};

export default Login;
