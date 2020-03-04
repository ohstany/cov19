import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

import phone from "./phone.png";
import email from "./email.png";
import phones from "./phones.json";

const via = {
	phone,
	email
};

export default () => {
	const [state, _state] = useState({
		via: "phone",
		num: "+82",
		phone: "",
		email: ""
	});

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
		<div className="block subscribe">
			<h2>
				Оставьте свой номер телефона или имейл и мы вас оповестим если
				есть рядом случай зараженния.
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
					{
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
					}
					<button>
						<FontAwesomeIcon icon={faCheck} />
					</button>
				</div>
			</div>
		</div>
	);
};
