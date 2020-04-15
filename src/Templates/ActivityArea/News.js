import { useState, memo } from "react";
import moment from "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/fontawesome-free-solid";

export default memo(
	({
		t,
		language,
		continent_code,
		data: {
			title,
			guid,
			create_date,
			meta_data: { sc, image } = {},
			content,
		} = {},
	}) => {
		const [sh, _sh] = useState(false);

		const tm = continent_code
			? moment(create_date)
					.lang(language || "en")
					.tz(continent_code)
					.format("DD MMM (dddd), YYYY")
			: moment(create_date)
					.lang(language || "en")
					.format("DD MMM (dddd), YYYY");

		return (
			<div className={"author" + (sh ? " shown" : "")}>
				<h3 className={"atitle clickable"}>
					<a
						href="#"
						target="_blank"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							_sh((e) => !e);
						}}
					>
						{title}
					</a>
				</h3>

				{sh && (
					<div className={"desc" + (sh ? " act" : "")}>
						{image && (
							<div className="imgb">
								<img src={image} alt="" />
							</div>
						)}

						<div
							className={"cont"}
							dangerouslySetInnerHTML={{
								__html: content,
							}}
						></div>
					</div>
				)}

				<span className="showh" onClick={() => _sh((e) => !e)}>
					{sh ? (
						t("Hide")
					) : (
						<>
							<FontAwesomeIcon icon={faEye} /> {t("Read More")}
						</>
					)}
				</span>

				{sc && (
					<div className="resource">
						{t("source")}:{" "}
						<a href={guid} target="_blank">
							{sc}
						</a>
					</div>
				)}

				<time dateTime={tm}>{tm}</time>
			</div>
		);
	},
	() => true
);
