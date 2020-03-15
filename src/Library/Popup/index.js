import React, { memo } from "react";

export default memo(
	({ children, visible, onClose }) => {
		const clickOut = e => {
			if (!document.getElementById("form").contains(e.target)) {
				onClose && onClose();
			}
		};

		return visible ? (
			<div id="popup" className="popup" onClick={clickOut}>
				<div id="form" className="form">
					{children}
				</div>
			</div>
		) : (
			""
		);
	},
	(p, n) => p === n
);
