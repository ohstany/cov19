import React, {
	useState,
	useCallback,
	memo,
	useContext,
	useEffect
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faMobile,
	faTimes,
	faEnvelope
} from "@fortawesome/fontawesome-free-solid";
import RootContext from "Context";

import phone from "./phone.png";
import email from "./email.png";
import phones from "Library/phoned.json";

// const via = {
// 	phone: faMobile,
// 	email: faEnvelope
// };

const via = {
	phone,
	email
};

export default memo(
	() => {
		const { api, store: { geo } = {} } = useContext(RootContext);
		const [state, _state] = useState({
			via: "phone",
			num: phones[0].dial_code,
			phone: "",
			email: ""
		});

		const [sh, _sh] = useState(true);

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
		const [openNot, _openNot] = useState(false);

		const submitForm = () => {
			if (state.phone || state.email) {
				api({
					method: "POST",
					action: "subscribe",
					data: state
				}).then(res => {
					console.log("res", res);
					if (res || res === "-1") {
						_done(res);
					} else {
						alert("Неверный формат номера телефона или почты");
					}
				});
			} else {
				alert(
					"Необходимо ввести номера телефона или электронный адрес"
				);
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

		const setVia = useCallback(via => {
			_state(e => ({ ...e, via }));
		}, []);

		return sh ? (
			<div className={"block subscribe" + (openNot ? " active" : "")}>
				<div className="container tbf">
					<span className="submb">
						<img src={phone} onClick={() => _openNot(e => !e)} />
					</span>
					<h2 className="tbf-c titl">
						Подпишитесь, и мы оповестим о зарежении в вашем регионе.
					</h2>
					<div className="tbf-c sel">
						<div className="centrize">
							{["phone", "email"].map((w, x) => {
								return (
									<img
										key={x}
										className={
											w === state.via ? "selected" : ""
										}
										src={via[w]}
										onClick={() => setVia(w)}
									/>
									// <div
									// 	onClick={() => setVia(w)}
									// 	className={
									// 		"swb" +
									// 		(w === state.via ? " selected" : "")
									// 	}>
									// 	<FontAwesomeIcon key={x} icon={via[w]} />
									// </div>
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
													onChange={updateState}>
													{phones.map((p, px) => (
														<option
															key={px}
															value={p.dial_code}>
															{p.dial_code} (
															{p.name})
														</option>
													))}
												</select>

												<input
													name="phone"
													placeholder="Номер телефона"
													value={state.phone}
													onChange={updateState}
												/>
											</>
										),
										email: (
											<input
												name="email"
												placeholder="Эл.почта"
												value={state.email}
												onChange={updateState}
											/>
										)
									}[state.via || ""]
								) : (
									<div className="subss">
										Благодарим за подписку
									</div>
								)}
								{done === "0" && (
									<button onClick={submitForm}>
										<FontAwesomeIcon icon={faCheck} />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
				<FontAwesomeIcon
					className="closec"
					icon={faTimes}
					onClick={() => {
						document.body.classList.remove("subsc");
						_sh(e => !e);
					}}
				/>
			</div>
		) : (
			""
		);
	},
	() => true
);
