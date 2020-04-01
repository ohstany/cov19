import React, {
	useState,
	useCallback,
	memo,
	useContext,
	useEffect
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import RootContext from "Context";
import Popup from "Templates/Popup";
import { notification, validateEmail } from "Library";
import { withTranslation } from "i18n";

import { trackEvent } from "Templates/GoogleAnalytics";

export default memo(
	withTranslation()(({ t }) => {
		const { api, store: { geo, contactUs } = {}, setStore } = useContext(
			RootContext
		);

		const [state, _state] = useState({
			content: "",
			email: ""
		});

		useEffect(() => {
			document.body.classList.add("subsc");
		}, []);

		const [done, _done] = useState("0");

		const submitForm = () => {
			if (state.email && !validateEmail(state.email)) {
				notification(t("wrongEmailFormat"));
				return false;
			} else if (!state.content) {
				notification(t("contentRequired"));
				return false;
			}

			api({
				method: "POST",
				action: "contactus",
				data: {
					...state,
					geo
				}
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
					notification(t("wrongEmailFormat"));
				}
			});
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

		const togglePopup = useCallback(
			() => setStore({ contactUs: !contactUs }),
			[contactUs]
		);

		return (
			<Popup className="subs" visible={contactUs} onClose={togglePopup}>
				<div className="block subscribe cus">
					<h2 className="titl">{t("contactUsTitle")}</h2>
					<div className="sel">
						<div className="centrize">
							<div className={"inpf cus"}>
								{done === "0" ? (
									<>
										<input
											name="email"
											placeholder={t("email")}
											value={state.email}
											onChange={updateState}
										/>

										<textarea
											name="content"
											placeholder={t("leaveMessage")}
											value={state.content}
											onChange={updateState}
										/>
									</>
								) : (
									<div className="subss">
										{t("contactThank")}
									</div>
								)}
							</div>

							{done === "0" && (
								<>
									<button onClick={submitForm}>
										<FontAwesomeIcon icon={faCheck} />
										{t("send")}
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</Popup>
		);
	}),
	() => true
);
