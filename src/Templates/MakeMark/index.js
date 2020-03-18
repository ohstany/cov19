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
import { withTranslation } from "i18n";
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
	withTranslation("common")(({ t }) => {
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
				alert(t("fillReqFields"));
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
						alert(t("mustFillReqFields"));
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
							{t("infectionReport")}
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
					<h2>{t("infectionReportTitle")}</h2>

					{done === "0" ? (
						<form>
							<ul>
								<li>{t("restrict1")}</li>
								<li>{t("restrict2")}</li>
								<li>{t("restrict3")}</li>
							</ul>

							<input
								type="email"
								name="email"
								placeholder={t("emailPlaceholder")}
								onChange={updateState}
								required={true}
								value={email}
							/>
							<label />

							<input
								type="text"
								name="address"
								placeholder={t("addressPlaceholder")}
								required={true}
								onChange={updateState}
								value={address}
							/>
							<label />

							<input
								type="number"
								name="amount"
								placeholder={t("amountPlaceholder")}
								onChange={updateState}
								required={true}
								value={amount}
							/>
							<label />

							<div className="selcond">
								<h5>{t("caseb")}</h5>
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
									{t("none")}
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
											{t(condition[r])}
										</span>
									);
								})}
							</div>

							<input
								name="source"
								type="text"
								placeholder={t("sourcePlaceholder")}
								onChange={updateState}
								value={source}
							/>
							<label />

							<input
								name="source2"
								type="text"
								placeholder={t("source2Placeholder")}
								onChange={updateState}
								value={source2}
							/>
							<label />

							<textarea
								name="content"
								placeholder={t("casePlaceholder")}
								onChange={updateState}
								required={true}
								value={content}
							/>
							<label />

							<button onClick={submitForm} type="submit">
								{t("submit")}
							</button>
						</form>
					) : (
						<div className="formacc">
							{t("iRecieved")}
							<br />
							{t("thankyou")}
						</div>
					)}
				</Popup>
			</>
		);
	}),
	() => true
);
