import { useEffect, useContext, memo } from "react";
import RootContext from "Context";

const refs = {};

const createRef = (input, id) => {
	refs[id] = input;
	return false;
};

var curPos = 0,
	posFix = 0,
	menuW = 0,
	bodyW = 0,
	menuH = 0,
	bodyH = 0,
	startedPos = 0,
	blockTop = 0,
	lastScroll = 0,
	scrollTo = "",
	dragging = false,
	social = null,
	inner = null; // distinguish between onclick & onmousedown

export const MainBlock = memo(
	({ children }) => {
		const {
			device,
			store: { mapRef, closer }
		} = useContext(RootContext) || {};

		const { resizer, mainBlock } = refs || {};

		useEffect(() => {
			if (closer !== undefined) {
				toggle();
			}
		}, [closer]);

		const toggle = e => {
			if (!dragging) {
				e && e.stopPropagation();
				if (device === "pc") {
					slide(posFix <= 100 ? "right" : "left");
				} else {
					slide(posFix <= 100 ? "bottom" : "top");
				}
			}
			dragging = false;
		};

		const slide = (pos = "left") => {
			mainBlock.classList.add("shifting");
			mapRef.classList.add("shifting");

			switch (pos) {
				case "top":
				case "left": {
					posFix = 0;
					mainBlock.removeAttribute("style");
					mapRef.removeAttribute("style");
					break;
				}

				case "right": {
					posFix = menuW;
					mainBlock.style.right = `-${menuW}px`;
					mapRef.style.width = bodyW + "px";
					break;
				}

				case "bottom": {
					posFix = menuH;
					mainBlock.style.bottom = `-${menuH - 39}px`;
					break;
				}

				case "half": {
					posFix = menuH;
					mainBlock.style.bottom = `-${menuH / 2}px`;
					break;
				}

				default:
					break;
			}
		};

		const dragStart = e => {
			e = e || window.event;

			mainBlock.classList.remove("shifting");
			mapRef.classList.remove("shifting");

			if (e.type === "touchstart" && device === "mobile") {
				blockTop = mainBlock.offsetTop;
				posFix = blockTop;
				startedPos = e.touches[0].clientY;
			}
		};

		const dragAction = e => {
			e = e || window.event;

			e.stopPropagation();
			e.preventDefault();

			if (device === "mobile") {
				if (e.type == "touchmove") {
					curPos = e.touches[0].clientY;
				} else {
					curPos = e.clientY;
				}

				if (curPos > lastScroll) {
					scrollTo = "down";
				} else if (curPos < lastScroll) {
					scrollTo = "top";
				} else {
					scrollTo = "";
				}

				lastScroll = curPos;

				posFix = blockTop - (startedPos - curPos);

				if (menuH - posFix < 200) {
					social.classList.add("hide");
				} else {
					social.classList.remove("hide");
				}

				mainBlock.style.bottom = "-" + (posFix || 0) + "px";
			}
		};

		const dragEnd = e => {
			e.preventDefault();
			e.stopPropagation();

			if (device === "mobile") {
				const half = menuH / 2;

				if (posFix > half && menuH - posFix < 150) {
					slide("bottom");
				} else if (posFix < half && posFix < 300) {
					slide("top");
				} else {
					mainBlock.style.bottom = `-${posFix + 1}px`;
				}

				if (posFix < 100) {
					removeEvents(mainBlock);
				} else {
					startEvents(mainBlock);
				}
			}

			document.onmouseup = null;
			document.onmousemove = null;
		};

		const removeEvents = el => {
			el.removeEventListener("touchstart", dragStart);
			el.removeEventListener("touchend", dragEnd);
			el.removeEventListener("touchmove", dragAction);
		};

		const startEvents = el => {
			el.onmousedown = dragStart;
			el.addEventListener("touchstart", dragStart);
			el.addEventListener("touchend", dragEnd);
			el.addEventListener("touchmove", dragAction);
		};

		useEffect(() => {
			if (device && mapRef) {
				if (device === "mobile") {
					menuH = mainBlock.offsetHeight;
					bodyH = document.body.scrollHeight;

					inner = document.getElementById("activityArea");
					social = document.getElementById("socials");

					startEvents(mainBlock);
					startEvents(resizer);

					setTimeout(() => {
						slide("half");
					}, 800);
				} else {
					menuW = mainBlock.offsetWidth;
					bodyW = document.body.offsetWidth;
				}
			}
		}, [device, mapRef]);

		return (
			<section className="mainBlock" ref={i => createRef(i, "mainBlock")}>
				<span
					className="resizer"
					ref={i => createRef(i, "resizer")}
				></span>
				<div className="layout">{children}</div>
			</section>
		);
	},
	() => true
);
