import { useState, memo } from "react";
import moment from "moment";

export default memo(
	({
		t,
		language,
		data: {
			title,
			guid,
			create_date,
			meta_data: { sc, image } = {},
			content
		} = {}
	}) => {
      const [sh, _sh] = useState(false);
      
		return (
			<div className={"author" + (sh ? " shown" : "")}>
				<h3 className={"atitle clickable"}>
					<a
						href="#"
						target="_blank"
						onClick={e => {
							e.preventDefault();
							e.stopPropagation();
							_sh(e => !e);
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
								__html: content
							}}
						></div>
					</div>
				)}

				<span className={"showh"} onClick={() => _sh(e => !e)}>
					{sh ? "-" : "+"}
				</span>

				{sc && (
					<div className="resource">
						{t("source")}: #{" "}
						<a href={guid} target="_blank">
							{sc}
						</a>
					</div>
				)}

				<time dateTime={create_date}>
					{create_date
						? moment(create_date)
								.lang(language || "en")
								.fromNow()
						: ""}
				</time>
			</div>
		);
	},
	() => true
);