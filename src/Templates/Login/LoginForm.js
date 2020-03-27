import { useState, useCallback, useEffect, useContext } from "react";
import RootContext from "Context";
import { withTranslation } from "i18n";
import FacebookLogin from "react-facebook-login";

export default withTranslation("common")(({ t, onAuth = false }) => {
	const {
		actioner,
		store: { loginStatus, geo }
	} = useContext(RootContext);

	const [params, _params] = useState({
		username: "",
		password: ""
	});

	const [error, _error] = useState("");

	const [logged, _logged] = useState(false);

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
			_error(t("idnandpassword"));
		} else {
			actioner({
				reduce: "LOGIN",
				method: "POST",
				action: "apilogin",
				data: {
					geo,
					...params
				}
			}).then(() => {
				_logged(true);
			});
		}
	};

	useEffect(() => {
		if (logged && loginStatus && onAuth) {
			onAuth();
		}
	}, [loginStatus, logged]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				_error("");
			}, 2000);
		}
	}, [error]);

	const responseFacebook = response => {
		console.log(response);
	};

	const { username, password } = params;

	return !loginStatus ? (
		<div className="login">
			<div className="lgc">
				<div id="form" className="form">
					<h2>{t("Login")}</h2>

					<form>
						{error && <div className="error">{error}</div>}

						<input
							type="input"
							name="username"
							placeholder={t("emailOrId")}
							onChange={updateState}
							required={true}
							value={username}
						/>

						<input
							type="password"
							name="password"
							placeholder={t("ipassword")}
							required={true}
							onChange={updateState}
							value={password}
						/>

						<button onClick={submitForm} type="submit">
							{t("Login")}
						</button>

						<div className="soclogin">
							<FacebookLogin
								appId="2911448168917098"
								autoLoad={false}
								fields="name,email,picture"
								callback={responseFacebook}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	) : (
		t("alreadyLogged")
	);
});
