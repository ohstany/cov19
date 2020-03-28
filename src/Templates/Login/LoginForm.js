import { useState, useCallback, useEffect, useContext } from "react";
import RootContext from "Context";
import { withTranslation } from "i18n";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

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
	const [loading, _loading] = useState(false);

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
		if (error) {
			setTimeout(() => {
				_error("");
			}, 2000);
		}
	}, [error]);

	const responseFacebook = callback => {
		_loading(true);
		console.log(callback);
		actioner({
			reduce: "LOGIN_SOCIAL",
			method: "POST",
			action: "clogin",
			data: {
				geo,
				provider: "facebook",
				callback
			}
		}).then(() => {
			_logged(true);
		});
	};

	const responseGoogle = callback => {
		console.log(callback);
	};

	useEffect(() => {
		if (logged && loginStatus && onAuth) {
			onAuth();
		}
	}, [loginStatus, logged]);

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
							<div className="lgbtn">
								<FacebookLogin
									appId="2911448168917098"
									autoLoad={false}
									isDisabled={loading}
									fields="name,email,picture"
									callback={responseFacebook}
								/>
							</div>

							<div className="lgbtn">
								<GoogleLogin
									clientId="987013950710-p1pfu35k0iq927ne44u1ppbnd5uasets.apps.googleusercontent.com"
									autoLoad={false}
									buttonText="LOGIN WITH GOOGLE"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={"single_host_origin"}
								/>
							</div>

							{/* <button
								onClick={() => {
									console.log("FB..");
									actioner({
										reduce: "LOGIN_SOCIAL",
										method: "POST",
										action: "clogin",
										data: {
											geo,
											provider: "facebook",
											callback: require("./fb.json")
										}
									});
								}}
							>
								FACEBOOK
							</button> */}
						</div>
					</form>
				</div>
			</div>
		</div>
	) : (
		t("alreadyLogged")
	);
});
