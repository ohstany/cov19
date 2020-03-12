export default ({ text = false }) => (
	<div className="contentCooking">
		<img src={"/coronavirus.png"} alt="loader" />
		<div className="txt">{text || "Содержание отсутствует"}</div>
	</div>
);
