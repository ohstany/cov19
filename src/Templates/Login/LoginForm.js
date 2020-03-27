import { useState, useCallback, useEffect, useContext } from "react";
import RootContext from "Context";

export default () => {
	const {
		actioner,
		store: { loginStatus, geo }
	} = useContext(RootContext);

	const [params, _params] = useState({
		username: "",
		password: ""
	});

	const [error, _error] = useState("");

	const updateState = useCallback(e => {
		const {
			target: { value }
		} = e;
		const name = e.target.getAttribute("name");

		_params(e => {
			return {
				...e,
				[name]: value
			};
		});
	}, []);

	const submitForm = e => {
		e.preventDefault();
		e.stopPropagation();

		if (["username", "password"].some(i => !params[i])) {
			_error("Must input login and password");
		} else {
			actioner({
				reduce: "LOGIN",
				method: "POST",
				action: "apilogin",
				data: {
					geo,
					...params
				}
			});
		}
	};

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				_error("");
			}, 2000);
		}
	}, [error]);

	const { username, password } = params;

	return !loginStatus ? (
		<div className="login">
			<div className="lgc">
				<div id="form" className="form">
					<h2>LOGIN</h2>

					<form>
						{error && <div className="error">{error}</div>}

						<input
							type="input"
							name="username"
							placeholder="Email or ID"
							onChange={updateState}
							required={true}
							value={username}
						/>

						<input
							type="password"
							name="password"
							placeholder="Input Password"
							required={true}
							onChange={updateState}
							value={password}
						/>

						<button onClick={submitForm} type="submit">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	) : (
		"You are logged in"
	);
};
