import React, { memo, useState, useContext, useCallback } from "react";
import RootContext from "Context";

export default memo(
	() => {
		const { api } = useContext(RootContext);

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
				alert("Необходимо заполнить все необходимые поля");
			} else {
				api({
					method: "POST",
					action: "marker",
					data: state
				}).then(res => {
					console.log("res", res);
					if (res || res === "-1") {
						_done(res);
					} else {
						alert("Необходимо заполнить все необходимые поля");
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
				<div className="block makeMark">
					<button onClick={togglePopup}>Сообщить о заражении</button>
				</div>

				{visible && (
					<div id="popup" className="popup" onClick={clickOut}>
						<div id="form" className="form">
							<h2>
								Заполните форму ниже и нажмите кнопку отправить.
							</h2>

							{done === "0" ? (
								<form>
									<ul>
										<li>
											Не указывайте адрес квартиры или
											дома.
										</li>
										<li>
											Не указывайте конктретные инициалы.
										</li>
										<li>
											При нарушении вышеперечисленного
											оповещение будет удалено.
										</li>
									</ul>

									<input
										type="email"
										name="email"
										placeholder="Введите вашу электронную почту"
										onChange={updateState}
										required={true}
										value={email}
									/>
									<label />

									<input
										type="text"
										name="city"
										placeholder="Город заражения"
										required={true}
										onChange={updateState}
										value={city}
									/>
									<label />

									<input
										type="text"
										name="street"
										placeholder="Улица заражения"
										onChange={updateState}
										value={street}
									/>
									<label />

									<input
										type="number"
										name="amount"
										placeholder="Количество заразившихся"
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
										placeholder="Cсылка на ресурс №1 (Youtube, новости и тд.)"
										onChange={updateState}
										value={source}
									/>
									<label />

									<input
										name="source2"
										type="text"
										placeholder="Cсылка на ресурс №2 (Youtube, новости и тд.)"
										onChange={updateState}
										value={source2}
									/>
									<label />

									<textarea
										name="content"
										placeholder="Опишите случай"
										onChange={updateState}
										required={true}
										value={content}
									/>
									<label />

									<button onClick={submitForm} type="submit">
										Отправить
									</button>
								</form>
							) : (
								<div className="formacc">
									Мы получили уведомление от вас, в ближайшее
									время данные появятся на карте.
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
