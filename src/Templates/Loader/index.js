export const LoaderSmall = (height = "60px", width = "60px") => (
	<div className="sloader" style={{ height, width }}></div>
);

export default (props) => {
	return (
		<div className="panLoader">
			<div className="pploader" />
			<div className="panContainer">
				<div className="pan" />
				<div className="handle" />
			</div>
			<div className="shadow" />
		</div>
	);
};
