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

export default memo(
	() => {
		const {
			origin,
			protocol,
			siteMeta: { title }
		} = useContext(RootContext) || {};

		const url = `${protocol}://${origin}/`;

		return (
			<div className="socials">
				<div className="sct">Поделись, обереги друзей и близких.</div>
				<div className="share-links">
					<a
						href={"https://www.facebook.com/sharer.php?u=" + url}
						rel="external noopener"
						target="_blank"
						className="fb">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href={`https://twitter.com/intent/tweet?text=${title}&amp;url=${url}`}
						rel="external noopener"
						target="_blank"
						className="tw">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${title}`}
						rel="external noopener"
						target="_blank"
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
						href={`https://vk.com/share.php?url=${url}`}
						rel="external noopener"
						target="_blank"
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
						href={`https://api.whatsapp.com/send?text=${title}%20${url}`}
						rel="external noopener"
						target="_blank"
						className="whatsapp">
						<FontAwesomeIcon icon={faWhatsapp} />
					</a>
					<a
						href={`https://telegram.me/share/url?url=${url}&amp;text=${title}`}
						rel="external noopener"
						target="_blank"
						className="telegram">
						<FontAwesomeIcon icon={faPaperPlane} />
					</a>
					<a
						href={`viber://forward?text=${title}%20${url}`}
						rel="external noopener"
						target="_blank"
						className="viber">
						<FontAwesomeIcon icon={faViber} />
					</a>
					<a
						href={`mailto:?subject=${title}&amp;body=${url}`}
						rel="external noopener"
						target="_blank"
						className="email">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
					<a
						className="custom copyurl"
						onClick={event => {
							event.stopPropagation();
							var el = document.createElement("textarea");
							el.value = "${url}";
							document.body.appendChild(el);
							el.select();
							document.execCommand("copy");
							document.body.removeChild(el);
							alert("Скопировано");
						}}>
						<FontAwesomeIcon icon={faCopy} />
					</a>
				</div>
			</div>
		);
	},
	() => true
);
