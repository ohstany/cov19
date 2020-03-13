import React, { memo, useState, useContext, useCallback } from "react";
import RootContext from "Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { trackEvent } from "Library/GoogleAnalytics";

import { faThermometerThreeQuarters } from "@fortawesome/fontawesome-free-solid";

export default memo(
	() => {
		const {
			api,
			device,
			store: { geo, country_code, region_code }
		} = useContext(RootContext);

		const [visible, _visible] = useState(false);

		const [state, _state] = useState({
			email: "",
			city: "",
			street: "",
			content: "",
			amount: undefined,
			source: "",
			source2: ""
		});

		const [done, _done] = useState("0");

		const submitForm = e => {
			e.preventDefault();
			e.stopPropagation();

			if (["email", "city", "content"].some(i => !state[i])) {
				alert("Please, fill out all required fields.");
			} else {
				api({
					method: "POST",
					action: "report",
					data: {
						state,
						location: {
							geo,
							country_code,
							region_code
						}
					}
				}).then(res => {
					console.log("res", res);
					if (res || res === "-1") {
						trackEvent("click", "usermark");
						_done(res);
					} else {
						alert("Must fill in all required fields.");
					}
				});
			}
		};

		const updateState = useCallback(e => {
			const {
				target: { value }
			} = e;
			const name = e.target.getAttribute("name");

			_state(e => {
				return {
					...e,
					[name]: value
				};
			});
		}, []);

		const togglePopup = useCallback(() => _visible(e => !e), []);

		const clickOut = e => {
			if (!document.getElementById("form").contains(e.target)) {
				togglePopup();
			}
		};

		const { email, city, street, content, amount, source, source2 } = state;

		return (
			<>
				{device === "pc" ? (
					<div className="block makeMark">
						<button onClick={togglePopup}>
							Report About Infection
						</button>
					</div>
				) : (
					<div className="makeMark-mb">
						<FontAwesomeIcon
							onClick={togglePopup}
							icon={faThermometerThreeQuarters}
						/>
					</div>
				)}

				{visible && (
					<div id="popup" className="popup" onClick={clickOut}>
						<div id="form" className="form">
							<h2>
								Infection Report. Fill out the form below and
								click submit.
							</h2>

							{done === "0" ? (
								<form>
									<ul>
										<li>
											Do not write an address of
											appartment or house.
										</li>
										<li>
											Do not indicate person initials.
										</li>
										<li>
											In violation of the above
											information will be rejected.
										</li>
									</ul>

									<input
										type="email"
										name="email"
										placeholder="Email Address"
										onChange={updateState}
										required={true}
										value={email}
									/>
									<label />

									<input
										type="text"
										name="city"
										placeholder="City"
										required={true}
										onChange={updateState}
										value={city}
									/>
									<label />

									<input
										type="text"
										name="street"
										placeholder="Street"
										onChange={updateState}
										value={street}
									/>
									<label />

									<input
										type="number"
										name="amount"
										placeholder="Number of infected"
										onChange={updateState}
										required={true}
										value={
											amount === undefined ? 0 : amount
										}
									/>
									<label />

									<input
										name="source"
										type="text"
										placeholder="Link to the source #1 (Youtube, website..)"
										onChange={updateState}
										value={source}
									/>
									<label />

									<input
										name="source2"
										type="text"
										placeholder="Link to the source #1 (Youtube, website..)"
										onChange={updateState}
										value={source2}
									/>
									<label />

									<textarea
										name="content"
										placeholder="Write about case"
										onChange={updateState}
										required={true}
										value={content}
									/>
									<label />

									<button onClick={submitForm} type="submit">
										Submit
									</button>
								</form>
							) : (
								<div className="formacc">
									We've received your information. Thank you!
								</div>
							)}
						</div>
					</div>
				)}
			</>
		);
	},
	() => true
);
