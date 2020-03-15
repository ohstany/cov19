import { useEffect, useContext, memo } from "react";
import RootContext from "Context";

const Svg = () => (
	<svg
		viewBox="64 64 896 896"
		className=""
		data-icon="align-left"
		width="1em"
		height="1em"
		fill="currentColor"
		aria-hidden="true">
		<path d="M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
	</svg>
);

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
	dragging = false; // distinguish between onclick & onmousedown

export const MainBlock = memo(
	({ children }) => {
		const {
			device,
			store: { mapRef }
		} = useContext(RootContext) || {};

		const { resizer, mainBlock } = refs || {};

		const toggle = e => {
			if (!dragging) {
				e.stopPropagation();
				if (device === "pc") {
					slide(posFix <= 100 ? "right" : "left");
				} else {
					slide(posFix <= 100 ? "bottom" : "top");
				}
			}
			dragging = false;
		};

		const slide = (pos = "left") => {
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
					mainBlock.style.right = `-${menuW + 1}px`;
					mapRef.style.width = bodyW + "px";
					break;
				}

				case "bottom": {
					posFix = menuH;
					mainBlock.style.bottom = `-${menuH + 1}px`;
					break;
				}

				default:
					break;
			}
		};

		const dragStart = e => {
			e = e || window.event;
			// e.preventDefault();

			mainBlock.classList.remove("shifting");
			mapRef.classList.remove("shifting");

			if (e.type !== "touchstart") {
				document.onmouseup = dragEnd;
				document.onmousemove = dragAction;
			}

			resizer.onclick = toggle;
		};

		const dragAction = e => {
			e = e || window.event;

			// mark true if dragging to distinguish between onclick & onmousedown

			if (device === "pc") {
				if (e.type == "touchmove") {
					curPos = e.touches[0].clientX;
				} else {
					curPos = e.clientX;
				}
				posFix = menuW - (bodyW - curPos);

				if (posFix > 10 && menuW - posFix > 20) {
					dragging = true;
				}

				mainBlock.style.right = posFix > 0 ? `-${posFix + 1}px` : "";
				mapRef.style.width =
					curPos >= bodyW - menuW ? curPos + "px" : "";
			} else {
				if (e.type == "touchmove") {
					curPos = e.touches[0].clientY;
				} else {
					curPos = e.clientY;
				}
				posFix = menuH - (bodyH - curPos);

				if (posFix > 10 && menuH - posFix > 20) {
					dragging = true;
				}

				mainBlock.style.bottom =
					posFix > 0 && posFix <= menuH
						? `-${posFix + 1}px`
						: posFix > menuH
						? menuH + 1
						: "";
			}
		};

		const dragEnd = e => {
			mainBlock.classList.add("shifting");
			mapRef.classList.add("shifting");

			if (device === "pc") {
				if (posFix > menuW / 2) {
					slide("right");
				} else if (posFix <= menuW / 2) {
					slide("left");
				} else {
					mainBlock.style.right = `-${posFix + 1}px`;
					mapRef.style.width = curPos + "px";
				}
			} else {
				const half = menuH / 2;

				if (posFix > half && menuH - posFix < 150) {
					slide("bottom");
				} else if (posFix < half && posFix < 100) {
					slide("top");
				} else {
					mainBlock.style.bottom = `-${posFix + 1}px`;
				}
			}

			document.onmouseup = null;
			document.onmousemove = null;
		};

		useEffect(() => {
			if (mapRef) {
				if (device === "pc") {
					menuW = mainBlock.offsetWidth;
					bodyW = document.body.offsetWidth;
				} else {
					menuH = mainBlock.offsetHeight;
					bodyH = document.body.scrollHeight;
				}

				resizer.onmousedown = dragStart;
				resizer.addEventListener("touchstart", dragStart);
				resizer.addEventListener("touchend", dragEnd);
				resizer.addEventListener("touchmove", dragAction);
			}
		}, [mapRef]);

		return (
			<section className="mainBlock" ref={i => createRef(i, "mainBlock")}>
				<span className="resizer" ref={i => createRef(i, "resizer")}>
					<Svg />
				</span>

				<div className="hidden">{children}</div>
			</section>
		);
	},
	() => true
);
