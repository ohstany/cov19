import React, {
	useState,
	useCallback,
	memo,
	useContext,
	useEffect
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/fontawesome-free-solid";
import RootContext from "Context";
import Popup from "Templates/Popup";
import { notification, validateNumber, validateEmail } from "Library";
import { withTranslation, Link, Router } from "i18n";

import phone from "./phone.png";
import email from "./email.png";
import phones from "Library/phoned.json";

import { trackEvent } from "Templates/GoogleAnalytics";

const via = {
	phone,
	email
};

export default memo(
	withTranslation()(({ t }) => {
		const { api, store: { geo, subscribe } = {}, setStore } = useContext(
			RootContext
		);

		const [notShow, _notShow] = useState(false);

		const [state, _state] = useState({
			via: "phone",
			num: phones[0].dial_code,
			phone: "",
			email: "",
			checked: false
		});

		useEffect(() => {
			document.body.classList.add("subsc");
		}, []);

		useEffect(() => {
			if (geo && geo.country_code) {
				const ph = phones.find(i => i.code === geo.country_code);
				ph &&
					_state(e => ({
						...e,
						num: ph.dial_code
					}));
			}
		}, [geo]);

		const [done, _done] = useState("0");

		const submitForm = () => {
			if (state.phone || state.email) {
				if (state.phone && !validateNumber(state.phone)) {
					notification(t("wrongInputFormat"));
					return false;
				} else if (state.email && !validateEmail(state.email)) {
					notification(t("wrongInputFormat"));
					return false;
				} else if (!state.checked) {
					notification(t("mustAgree"));
					return false;
				}

				api({
					method: "POST",
					action: "subscribe",
					data: state
				}).then(res => {
					// console.log("res", res);
					if (res || res === "-1") {
						trackEvent(
							"click",
							"subscribe",
							state.phone && !state.email
								? "pnone"
								: !state.phone && state.email
								? "email"
								: "both"
						);
						_done(res);
					} else {
						notification(t("wrongInputFormat"));
					}
				});
			} else {
				notification(t("reuiredInputFormat"));
			}
		};

		const updateState = useCallback(e => {
			const {
				target: { value }
			} = e;
			const name = e.target.getAttribute("name");

			if (name === "phone" && !/^[0-9]+$/.test(value) && value !== "") {
				return false;
			}

			_state(e => {
				return {
					...e,
					[name]: value
				};
			});
		}, []);

		const setVia = useCallback(via => {
			_state(e => ({ ...e, via }));
		}, []);

		const togglePopup = useCallback(
			() => setStore({ subscribe: !subscribe }),
			[subscribe]
		);

		// useEffect(() => {
		// 	_notShow(true);
		// 	setTimeout(() => {
		// 		if (!localStorage.getItem("notshowsub")) {
		// 			togglePopup();
		// 		}
		// 	}, 3000);
		// }, []);

		return (
			<Popup className="subs" visible={subscribe} onClose={togglePopup}>
				<div className="block subscribe">
					<h2 className="titl">{t("leavecontacts")}</h2>
					<div className="sel">
						<div className="centrize">
							{[
								{
									w: "phone",
									text: "tonumber"
								},
								{ w: "email", text: "toemail" }
							].map(({ w, text }, x) => {
								return (
									<div
										key={x}
										onClick={() => setVia(w)}
										className={
											"subsel" +
											(w === state.via ? " selected" : "")
										}
									>
										<img src={via[w]} />
										{t(text)}
									</div>
								);
							})}

							<div className={"inpf " + state.via}>
								{done === "0" ? (
									{
										phone: (
											<>
												<select
													name="num"
													value={state.num}
													onChange={updateState}
												>
													{phones.map((p, px) => (
														<option
															key={px}
															value={p.dial_code}
														>
															{p.dial_code}{" "}
															{state.num !==
																p.dial_code &&
																`(${p.name})`}
														</option>
													))}
												</select>

												<input
													name="phone"
													placeholder={t(
														"phonenumber"
													)}
													value={state.phone}
													onChange={updateState}
												/>
											</>
										),
										email: (
											<input
												name="email"
												placeholder={t("email")}
												value={state.email}
												onChange={updateState}
											/>
										)
									}[state.via || ""]
								) : (
									<div className="subss">
										{t("subscrThank")}
									</div>
								)}
							</div>

							{done === "0" && (
								<>
									<div className="agree">
										<label>
											<input
												type="checkbox"
												checked={state.checked}
												onChange={({
													target: { checked }
												}) => {
													_state(p => ({
														...p,
														checked
													}));
												}}
											/>
											{t("privacyAgree") + " "}
											<a href="/privacy" target="_blank">
												{t("privacyPolicy")}
											</a>
										</label>
									</div>

									<button onClick={submitForm}>
										<FontAwesomeIcon icon={faCheck} />
										{t("subscribe")}
									</button>
								</>
							)}

							{notShow && (
								<label
									className="notshow"
									onClick={() => {
										localStorage.setItem(
											"notshowsub",
											true
										);
										togglePopup();
									}}
								>
									{t("donotshow")}
								</label>
							)}
						</div>
					</div>
				</div>
			</Popup>
		);
	}),
	() => true
);
