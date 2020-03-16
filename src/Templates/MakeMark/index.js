import React, {
	memo,
	useState,
	useContext,
	useCallback,
	useEffect
} from "react";
import RootContext from "Context";
import Popup from "Library/Popup";
import { condition } from "Library/statuses.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { trackEvent } from "Library/GoogleAnalytics";

import { faThermometerThreeQuarters } from "@fortawesome/fontawesome-free-solid";

const initialState = {
	email: "",
	address: "",
	content: "",
	condition: "",
	amount: undefined,
	source: "",
	source2: ""
};

export default memo(
	() => {
		const {
			api,
			device,
			store: { geo, country_code, region_code }
		} = useContext(RootContext);

		const [visible, _visible] = useState(false);

		const [state, _state] = useState(initialState);

		const [done, _done] = useState("0");

		useEffect(() => {
			if ((done && done !== "0") || done === "-1") {
				setTimeout(() => {
					_done("0");
					_state(initialState);
				}, 3000);
			}
		}, [done]);

		const submitForm = e => {
			e.preventDefault();
			e.stopPropagation();

			if (["email", "address", "content"].some(i => !state[i])) {
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

		const {
			email,
			address,
			content,
			amount,
			source,
			source2,
			condition: cond
		} = state;

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

				<Popup visible={visible} onClose={togglePopup}>
					<h2>
						Fill out about infection in the form below and click
						submit.
					</h2>

					{done === "0" ? (
						<form>
							<ul>
								<li>
									Do not write an address of appartment or
									house.
								</li>
								<li>Do not indicate someone's initials.</li>
								<li>
									In violation of the above information
									provided will be deleted.
								</li>
							</ul>

							<input
								type="email"
								name="email"
								placeholder="Your Email Address"
								onChange={updateState}
								required={true}
								value={email}
							/>
							<label />

							<input
								type="text"
								name="address"
								placeholder="City, Street, Place (EX: cafeteria) "
								required={true}
								onChange={updateState}
								value={address}
							/>
							<label />

							<input
								type="number"
								name="amount"
								placeholder="Number of infected"
								onChange={updateState}
								required={true}
								value={amount}
							/>
							<label />

							<div className="selcond">
								<h5>Case</h5>
								<span
									onClick={() =>
										_state(e => ({
											...e,
											condition: ""
										}))
									}>
									<input
										name="condition"
										type="radio"
										value=""
										checked={cond === ""}
									/>
									None
								</span>
								{Object.keys(condition).map((r, rx) => {
									return (
										<span
											key={rx}
											onClick={() =>
												_state(e => ({
													...e,
													condition: r
												}))
											}>
											<input
												name="condition"
												type="radio"
												value={r}
												checked={cond === r}
											/>
											{condition[r]}
										</span>
									);
								})}
							</div>

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
							We've received your information. <br />
							Thank you!
						</div>
					)}
				</Popup>
			</>
		);
	},
	() => true
);
