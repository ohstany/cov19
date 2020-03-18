import { withTranslation } from "i18n";

export default withTranslation("common")(({ t, text = false }) => (
	<div className="contentCooking">
		<img src={"/coronavirus.png"} alt="loader" />
		<div className="txt">{text ? t(text) : t("nocontent")}</div>
	</div>
));
