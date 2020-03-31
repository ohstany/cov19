import "./style.scss";

export default ({
	children,
	className = "",
	visible = false,
	position = "right",
	width = "600px",
	onClose = () => false
}) => {
	const clickOut = e => {
		if (!document.getElementById("drinner").contains(e.target)) {
			onClose && onClose();
		}
	};

	return (
		<div
			className={
				"drawer" +
				(position ? " " + position : "right") +
				(visible ? " visible" : "") +
				(className ? " " + className : "")
			}
			onClick={clickOut}
		>
			<div id="drinner" className="drinner" style={{ width }}>
				{children}
			</div>
		</div>
	);
};
