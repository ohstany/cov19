import settings from "api-config";
import fetch from "isomorphic-unfetch";

export default async (_params, _signal = false, methods = false) => {
	const pass = {
		method: _params.method ? _params.method : "POST",
		credentials: "include"
	};

	if (pass.method !== "GET" && pass.method !== "HEAD") {
		if (_params.upload) {
			const formData = new FormData();
			formData.append("data", JSON.stringify(_params));
			if (_params.upload !== undefined)
				formData.append("upload", _params.upload);
			pass.body = formData;
		} else {
			pass.body = JSON.stringify(_params ? _params : {});
		}
	}

	const location = _params.location ? _params.location : "external";

	// do request
	try {
		if (_params.action) {
			const request = await fetch(
				settings.protocol +
					"://" +
					settings.apipath +
					(location === "local"
						? "/" + _params.action
						: settings.apiver +
						  _params.action +
						  (_params.params
								? _params.params[0] === "?"
									? _params.params
									: "?" + _params.params
								: "")),
				_signal ? { ...pass, signal: _signal.signal } : pass
			)
				.then(d => d.json())
				.then(d => d);

			const { return: result = {} } = request || {};

			const { error = false } = result || {};

			if (
				((error &&
					["logged_out_user", "unauthorized_request"].indexOf(
						error.code
					) >= 0) ||
					request.loginStatus === false) &&
				methods &&
				methods.loginStatus === true
			) {
				_signal.abort && _signal.abort();
				methods.logout(request.loginStatus);
			} else if (error && error.code === "permission_no_rights") {
				alert("No permissions");
			}

			return result;
		}
	} catch (e) {
		console.log("Request Aborted..", e);
	}
	return false;
};
