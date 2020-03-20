import { useContext, memo } from "react";
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
			siteMeta: { title }
		} = useContext(RootContext) || {};

		const url = `${protocol}://${origin}/`;

		return (
			<div id="socials" className="socials">
				<div className="sct">{t("share")}</div>

				<div className="share-links">
					<a
						href="#"
						onClick={e =>
							share(
								e,
								"https://www.facebook.com/sharer.php?u=" + url,
								"facebook"
							)
						}
						rel="external noopener"
						className="fb">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href="#"
						onClick={e =>
							share(
								e,
								`https://twitter.com/intent/tweet?text=${title}&amp;url=${url}`,
								"twitter"
							)
						}
						rel="external noopener"
						className="tw">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href="#"
						onClick={e =>
							share(
								e,
								`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${title}`,
								"linkedin"
							)
						}
						rel="external noopener"
						className="ld">
						<span className="fa fa-linkedin"></span>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					{/* <a
						href={`https://reddit.com/submit?url=${url}&amp;title=${title}`}
						rel="external noopener"
						target="_blank"
						className="rdd">
						<FontAwesomeIcon icon={faReddit} />
					</a> */}
					<a
						href="#"
						onClick={e =>
							share(
								e,
								`https://vk.com/share.php?url=${url}`,
								"vk"
							)
						}
						rel="external noopener"
						className="vk">
						<FontAwesomeIcon icon={faVk} />
					</a>
					{/* <a
						href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&amp;st.shareUrl=${url}&amp;description=${title}&amp;media=http://asiandaily.co.kr/wp-content/uploads/2020/02/지하철11-1-677x470.jpg`}
						rel="external noopener"
						target="_blank"
						className="od">
						<FontAwesomeIcon icon={faOdnoklassniki} />
					</a> */}
					{/* <a
						href={`https://getpocket.com/save?title=${title}&amp;url=${url}`}
						rel="external noopener"
						target="_blank"
						className="pocket">
						<FontAwesomeIcon icon={faGetPocket} />
					</a> */}
					{/* <a
						href={`https://web.skype.com/share?url=${url}&amp;text=${title}`}
						rel="external noopener"
						target="_blank"
						className="skype">
						<FontAwesomeIcon icon={faSkype} />
					</a> */}
					<a
						onClick={e =>
							share(
								e,
								`https://api.whatsapp.com/send?text=${title}%20${url}`,
								"whatsapp"
							)
						}
						rel="external noopener"
						className="whatsapp">
						<FontAwesomeIcon icon={faWhatsapp} />
					</a>
					<a
						href="#"
						onClick={e =>
							share(
								e,
								`https://telegram.me/share/url?url=${url}&amp;text=${title}`,
								"telegram"
							)
						}
						rel="external noopener"
						className="telegram">
						<FontAwesomeIcon icon={faPaperPlane} />
					</a>
					<a
						href="#"
						onClick={e =>
							share(
								e,
								`viber://forward?text=${title}%20${url}`,
								"viber"
							)
						}
						rel="external noopener"
						className="viber">
						<FontAwesomeIcon icon={faViber} />
					</a>
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
						className="email">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
					<a
						className="custom copyurl"
						onClick={e => copy(e, url, t("copy"))}>
						<FontAwesomeIcon icon={faCopy} />
					</a>
				</div>
			</div>
		);
	}),
	() => true
);
