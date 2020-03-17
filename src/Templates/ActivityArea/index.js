import {
	useEffect,
	useState,
	useCallback,
	useContext,
	memo,
	useMemo
} from "react";
// import Pin from "Assets/images/pin.svg";
import MakeMark from "Templates/MakeMark";
import { Skeleton1 } from "Templates/Skeleton";
import NoContent from "Templates/NoContent";
import RootContext from "Context";
import countries from "Library/countries-array.json";
import { sources } from "Library/statuses.js";
import { condition } from "Library/statuses";
import { numComma } from "Library";
import InfiniteScroll from "react-infinite-scroll-component";

const News = memo(
	({
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
						}}>
						{title}
					</a>
				</h3>

				<div className={"desc" + (sh ? " act" : "")}>
					{image && sh && (
						<div className="imgb">
							<img src={image} alt="" />
						</div>
					)}

					<div
						className={"cont"}
						dangerouslySetInnerHTML={{
							__html: content
						}}></div>
				</div>

				<span className={"showh"} onClick={() => _sh(e => !e)}>
					{sh ? "-" : "+"}
				</span>

				{sc && (
					<div className="resource">
						Source: #{" "}
						<a href={guid} target="_blank">
							{sc}
						</a>
					</div>
				)}

				<time dateTime={create_date}>{create_date}</time>
			</div>
		);
	},
	() => true
);

const RenderSource = ({ s }) => {
	return (
		<div className="src">
			Source:{" "}
			{s.indexOf("youtube") >= 0 && s.indexOf("iframe") >= 0 ? (
				<div
					dangerouslySetInnerHTML={{
						__html: s
					}}
				/>
			) : (
				<a href={s} target="_blank">
					{s}
				</a>
			)}
		</div>
	);
};

export default memo(
	() => {
		const {
			actioner,
			store: {
				country_code,
				region_code,
				cpos,
				index,
				news,
				newsLimit,
				activity,
				activityLimit
			},
			setStore
		} = useContext(RootContext) || {};

		const [nav, _nav] = useState("acts");
		const [fetchingNews, _fetchingNews] = useState(false);
		const [fetchingMarkers, _fetchingMarkers] = useState(false);

		const active = false;
		const rkey = region_code || "other";
		const markerKey = `${country_code}_${rkey}`;
		const { regions = false } = cpos || {};

		const newsData = useMemo(
			() =>
				country_code && news[country_code] ? news[country_code] : [],
			[country_code, fetchingNews]
		);

		const newsLimited = useMemo(
			() =>
				country_code && newsLimit[country_code]
					? newsLimit[country_code]
					: false,
			[country_code, fetchingNews]
		);

		const activityLimited = useMemo(
			() =>
				country_code && activityLimit[markerKey]
					? activityLimit[markerKey]
					: false,
			[country_code, rkey, fetchingMarkers]
		);

		const infections = useMemo(
			() =>
				country_code && activity[markerKey]
					? activity[markerKey]
					: false,
			[country_code, rkey, fetchingMarkers]
		);

		const builtRegions = useMemo(
			() =>
				regions &&
				Object.keys(regions).map(n => ({
					region_code: n,
					...regions[n]
				})),
			[regions]
		);

		useEffect(() => {
			if (country_code) {
				fetchNews();
			}
		}, [country_code]);

		useEffect(() => {
			if (region_code) {
				fetchMarkers();
			}
		}, [region_code]);

		const fetchMarkers = () => {
			if (region_code && country_code && fetchingMarkers === false) {
				_fetchingMarkers(true);

				const offset =
					activity[markerKey] && activity[markerKey].length
						? activity[markerKey][activity[markerKey].length - 1].ID
						: 0;

				setTimeout(() => {
					actioner({
						reduce: "SET_ACTIVITY",
						method: "GET",
						action: "activity",
						params: `country=${country_code}&city=${region_code}&limit=10&offset=${offset}`
					}).then(() => {
						_fetchingMarkers(false);
					});
				}, 200);
			}
		};

		const fetchNews = () => {
			if (fetchingNews === false) {
				_fetchingNews(true);

				const offset =
					news[country_code] && news[country_code].length
						? news[country_code][news[country_code].length - 1]
								.create_date
						: 0;

				setTimeout(() => {
					actioner({
						method: "GET",
						action: "news",
						params: `locale=${country_code}&limit=10&offset=${offset}`,
						reduce: "SET_NEWS"
					}).then(() => {
						_fetchingNews(false);
					});
				}, 200);
			}
		};

		const navigation = useCallback(key => {
			_nav(key);
		}, []);

		useEffect(() => {
			if (index >= 0) {
				navigation("local");
			}
		}, [index]);

		const SingleItem = useCallback(
			({
				a: { ID, condition: cond, type, number, details, date } = {}
			}) => {
				return ID ? (
					<div className={"author " + type}>
						<h3 className={"atitle " + type}>
							{/* <span className={"b circ " + type}></span> */}
							{`${sources[type]} #${ID}`}
						</h3>

						<div className={"desc"}>{details.content}</div>

						<div className="resource">
							{details.source && (
								<RenderSource s={details.source} />
							)}
							{details.source2 && (
								<RenderSource s={details.source2} />
							)}
						</div>

						<div className={"infc"}>
							{cond !== "none" && (
								<span className={"cond " + cond}>
									<b className={"b circ " + cond} />
									{condition[cond]}
								</span>
							)}

							{number > 1 && (
								<span>
									<b className="b">{numComma(number)}</b>{" "}
									cases
								</span>
							)}

							<time dateTime={date}>{date}</time>
						</div>
					</div>
				) : (
					"Click on marker on the map"
				);
			},
			[]
		);

		return (
			<div className={"block activityArea " + nav}>
				<nav>
					<ol>
						{[
							// {
							// 	id: "local",
							// 	className: "pin",
							// 	title: <Pin />
							// },
							{ id: "acts", title: "Infections" },
							{ id: "news", title: "News" }
						].map((m, mx) => {
							return (
								<li
									key={mx}
									className={
										"navi " +
										(m.className || "") +
										(m.id === nav ? " active" : "")
									}
									onClick={() => {
										if (
											m.id === "local" &&
											index === undefined
										)
											return;
										navigation(m.id);
									}}>
									{m.title}
								</li>
							);
						})}
					</ol>
				</nav>

				<MakeMark />

				<div className={"activity"}>
					<div id="sc-markers" className="bb b1">
						<div className="filterNavi tbf">
							<div className="fitem tbf-c">
								<select
									value={country_code || ""}
									onChange={({ target: { value } }) =>
										setStore({
											country_code: value,
											region_code: ""
										})
									}>
									><option value="">Select country</option>
									{countries.map((c, ci) => {
										return (
											<option
												key={ci}
												value={c.country_code}>
												{c.name}
											</option>
										);
									})}
								</select>
							</div>
							<div className="sep" />
							<div className="fitem tbf-c">
								<select
									value={region_code}
									onChange={({ target: { value } }) =>
										setStore({ region_code: value })
									}>
									<option value="">Select City</option>
									{regions &&
										builtRegions.map((r, ri) => {
											return (
												<option
													key={ri}
													value={r.region_code}>
													{r.name}
												</option>
											);
										})}
								</select>
							</div>
						</div>

						<InfiniteScroll
							dataLength={infections ? infections.length : 0}
							next={fetchMarkers}
							hasMore={!activityLimited}
							loader={
								region_code ? (
									<Skeleton1 row={5} />
								) : (
									<NoContent text="Select the city" />
								)
							}
							endMessage={<NoContent text="No More Data" />}
							scrollableTarget="sc-markers">
							{infections && infections.length
								? infections.map((a, ax) => {
										return (
											<SingleItem
												nav={nav}
												key={ax}
												a={a}
												ax={ax}
											/>
										);
								  })
								: ""}
						</InfiniteScroll>
					</div>

					<div className="bb b2">
						<SingleItem nav={nav} a={active} ax={0} />
						{active && (
							<div className="comments">
								{/* <h3>Comments ({comments.length || 0})</h3> */}
								{/* {comments
									? comments.map((c, cx) => {
											return (
												<div
													className="cm author"
													key={cx}>
													<div className="chead">
														<b>{c.user}</b>
														{c.date ? (
															<span>
																{" - " + c.date}
															</span>
														) : (
															""
														)}
													</div>
													<div className="cbody">
														{c.content}
													</div>
												</div>
											);
									  })
									: "There are no comments"} */}
							</div>
						)}
					</div>

					<div id="sc-news" className="bb b3">
						<InfiniteScroll
							dataLength={newsData.length}
							next={fetchNews}
							hasMore={!newsLimited}
							loader={<Skeleton1 row={5} />}
							endMessage={<NoContent />}
							scrollableTarget="sc-news">
							{newsData.map((a, ax) => (
								<News key={ax} data={a} ax={ax} />
							))}
						</InfiniteScroll>
					</div>
				</div>
			</div>
		);
	},
	() => true
);
