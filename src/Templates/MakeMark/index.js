import React, { memo, useState, useCallback } from "react";

export default memo(() => {
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

						<ul>
							<li>Не указывайте адрес квартиры или дома.</li>
							<li>Не указывайте конктретные инициалы.</li>
							<li>
								При нарушении вышеперечисленного оповещение
								будет удалено.
							</li>
						</ul>

						<form>
							<input
								type="email"
								name="email"
								placeholder="Введите вашу электронную почту"
								onChange={updateState}
								required={true}
								value={email}
							/>

							<input
								type="text"
								name="city"
								placeholder="Город заражения"
								required={true}
								onChange={updateState}
								value={city}
							/>

							<input
								type="text"
								name="street"
								placeholder="Улица заражения"
								onChange={updateState}
								value={street}
							/>

							<input
								type="number"
								name="amount"
								placeholder="Количество заразившихся"
								onChange={updateState}
								required={true}
								value={amount === undefined ? 0 : amount}
							/>

							<input
								name="source"
								type="text"
								placeholder="Cсылка на ресурс №1 (Youtube, новости и тд.)"
								onChange={updateState}
								value={source}
							/>

							<input
								name="source2"
								type="text"
								placeholder="Cсылка на ресурс №2 (Youtube, новости и тд.)"
								onChange={updateState}
								value={source2}
							/>

							<textarea
								name="content"
								placeholder="Опишите случай"
								onChange={updateState}
								required={true}
								value={content}
							/>

							<button type="submit">Отправить</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
});
