import React, { useState, useCallback, memo, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import RootContext from "Context";

import phone from "./phone.png";
import email from "./email.png";
import phones from "./phones.json";

const via = {
	phone,
	email
};

export default memo(
	() => {
		const { api } = useContext(RootContext);
		const [state, _state] = useState({
			via: "phone",
			num: "+82",
			phone: "",
			email: ""
		});

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

		return (
			<div className={"block subscribe" + (openNot ? " active" : "")}>
				<span class="submb">
					<img src={phone} onClick={() => _openNot(e => !e)} />
				</span>

				<h2>
					Оставьте свой номер телефона или имейл и мы вас оповестим
					если есть рядом случай зараженния.
				</h2>

				<div className="sel">
					{["phone", "email"].map((w, x) => {
						return (
							<img
								key={x}
								className={w === state.via ? "selected" : ""}
								src={via[w]}
								onClick={() => setVia(w)}
							/>
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
													{p.dial_code} ({p.name})
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
							<div className="subss">Благодарим за подписку</div>
						)}
						{done === "0" && (
							<button onClick={submitForm}>
								<FontAwesomeIcon icon={faCheck} />
							</button>
						)}
					</div>
				</div>
			</div>
		);
	},
	() => true
);
