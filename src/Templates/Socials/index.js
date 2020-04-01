import { useContext, memo, useMemo } from "react";
import RootContext from "Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faPaperPlane,
	faEnvelope,
	faCopy
} from "@fortawesome/fontawesome-free-solid";

import {
	faFacebook,
	faTwitter,
	faLinkedin,
	faReddit,
	faVk,
	faViber,
	faOdnoklassniki,
	faGetPocket,
	faSkype,
	faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { withTranslation } from "i18n";

import { trackEvent } from "Templates/GoogleAnalytics";

const share = (e, url, sc = "") => {
	e.preventDefault();
	e.stopPropagation();
	trackEvent("click", "share", sc);
	window.open(url, "_blank");
};

const copy = (e, url, title) => {
	e.preventDefault();
	e.stopPropagation();
	trackEvent("click", "share", "copylink");
	var el = document.createElement("textarea");
	el.value = url;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	document.body.removeChild(el);
	alert(title);
};

export default memo(
	withTranslation("common")(({ t }) => {
		const {
			origin,
			protocol,
			siteMeta: { title },
			store: { country_code }
		} = useContext(RootContext) || {};

		const url = `${protocol}://${origin}/`;

		const socialButtons = useMemo(() => {
			return [
				{
					url: "https://www.facebook.com/sharer.php?u=" + url,
					id: "facebook",
					className: "fb",
					allow: "",
					exclude: "",
					icon: faFacebook,
					main: true
				},
				{
					url: `viber://forward?text=${title}%20${url}`,
					id: "viber",
					className: "viber",
					allow: "UA,RU,KZ,BY,UZ,KG,GE,AZ,AM",
					exclude: "",
					icon: faViber,
					main: false
				},
				{
					url: `https://twitter.com/intent/tweet?text=${title}&amp;url=${url}`,
					id: "twitter",
					className: "tw",
					allow: "",
					exclude: "",
					icon: faTwitter,
					main: true
				},
				{
					url: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${title}`,
					id: "linkedin",
					className: "ld",
					allow: "",
					exclude: "UA",
					icon: faLinkedin,
					main: true
				},
				{
					url: `https://vk.com/share.php?url=${url}`,
					id: "vk",
					className: "vk",
					allow: "RU,KZ,BY,UZ,KG,GE,AZ,AM",
					exclude: "",
					icon: faVk,
					main: false
				},
				{
					url: `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&amp;st.shareUrl=${url}&amp;description=${title}&amp;media=http://asiandaily.co.kr/wp-content/uploads/2020/02/지하철11-1-677x470.jpg`,
					id: "connect",
					className: "od",
					allow: "RU,KZ,BY,UZ,KG,GE,AZ,AM",
					exclude: "",
					icon: faOdnoklassniki,
					main: false
				},
				{
					url: `https://api.whatsapp.com/send?text=${title}%20${url}`,
					id: "whatsapp",
					className: "whatsapp",
					allow: "",
					exclude: "UA",
					icon: faWhatsapp,
					main: true
				},
				{
					url: `https://telegram.me/share/url?url=${url}&amp;text=${title}`,
					id: "telegram",
					className: "telegram",
					allow: "",
					exclude: "",
					icon: faPaperPlane,
					main: true
				},
				{
					url: `https://reddit.com/submit?url=${url}&amp;title=${title}`,
					id: "reddit",
					className: "reddit",
					allow: "",
					exclude: "",
					icon: faReddit,
					main: false
				},
				{
					url: `https://getpocket.com/save?title=${title}&amp;url=${url}`,
					id: "pocket",
					className: "pocket",
					allow: "",
					exclude: "",
					icon: faGetPocket,
					main: false
				}
			];
		});

		return (
			<div id="socials" className="socials">
				<div className="sct">{t("share")}</div>

				<div className="share-links">
					{socialButtons.map((i, ix) => {
						return (i.main &&
							i.exclude.indexOf(country_code) === -1) ||
							(i.allow.indexOf(country_code) >= 0 &&
								i.exclude.indexOf(country_code) === -1) ? (
							<a
								key={ix}
								href="#"
								onClick={e => share(e, i.url, i.id)}
								rel="external noopener"
								className={i.className}
							>
								<FontAwesomeIcon icon={i.icon} />
							</a>
						) : (
							""
						);
					})}

					{/* {["UA"].indexOf(country_code) === -1 && (
						<a
							href="#"
							onClick={e =>
								share(
									e,
									`mailto:?subject=${title}&amp;body=${url}`,
									"email"
								)
							}
							rel="external noopener"
							className="email"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					)} */}

					<a
						className="custom copyurl"
						onClick={e => copy(e, url, t("copy"))}
					>
						<FontAwesomeIcon icon={faCopy} />
					</a>
				</div>
			</div>
		);
	}),
	() => true
);
