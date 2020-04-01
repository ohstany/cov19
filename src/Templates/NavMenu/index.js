import RootContext from "Context";
import {
	memo,
	useContext,
	useCallback,
	useMemo,
	useState,
	useEffect
} from "react";
import { withTranslation, i18n } from "i18n";
import langs from "languages.json";
import Router from "next/router";
import phone from "../Subscribe/phone.png";

const Svg = () => (
	<svg
		viewBox="64 64 896 896"
		className=""
		data-icon="align-left"
		width="1em"
		height="1em"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
	</svg>
);

const Select = ({ visible, value, onChange, options = [] }) => {
	return (
		<div id="lngs" className={"sellang" + (visible ? " visible" : "")}>
			{options.map((i, ix) => (
				<div
					key={ix}
					className={"lo" + (value === i.value ? " sel" : "")}
					onClick={() => onChange(i.value)}
				>
					{i.label}
				</div>
			))}
		</div>
	);
};

export default memo(
	withTranslation("common")(({ t }) => {
		const {
			device,
			store: { closer },
			setStore
		} = useContext(RootContext);

		const [l, _l] = useState(false);

		const toggleMenu = useCallback(() => {
			setStore({ closer: !closer });
		}, [closer]);

		const options = useMemo(
			() =>
				Object.keys(langs).map(k => ({
					value: k,
					label: langs[k].nativeName
				})),
			[]
		);

		const outLang = e => {
			if (
				!document.getElementById("lngs").contains(e.target) &&
				!document.getElementById("langc").contains(e.target)
			) {
				_l(p => !p);
			}
		};

		useEffect(() => {
			if (l) {
				window.addEventListener("click", outLang);

				return () => {
					window.removeEventListener("click", outLang);
				};
			}
		}, [l]);

		return (
			<div className="navBlock">
				<div className="contain">
					<div id="closer" className="closer" onClick={toggleMenu}>
						<Svg />
					</div>

					<div className="submb subscribe">
						<img
							src="/bell.png"
							onClick={() => setStore({ subscribe: true })}
						/>
					</div>

					<div className="submb contus-i">
						<img
							src="/email.png"
							onClick={() => setStore({ contactUs: true })}
						/>
					</div>

					<div className="languages">
						<span
							id="langc"
							className="langc"
							onClick={() => _l(p => !p)}
						>
							{(i18n.language || "en").toUpperCase()}
						</span>
					</div>
				</div>

				<Select
					visible={l}
					value={i18n.language}
					onChange={value => {
						const pathname = window.history.state.as.replace(
							`/${i18n.language}/`,
							`/${value}/`
						);

						Router.push(Router.pathname, pathname, {
							shallow: true
						});

						setStore({ language: value });
						i18n.changeLanguage(value);
					}}
					options={options}
				/>
			</div>
		);
	})
);
