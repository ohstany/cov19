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
import { withTranslation } from "i18n";
import InfiniteScroll from "react-infinite-scroll-component";

const CountryList = withTranslation("countries")(
	({ t, value, onChange = () => false }) => {
		return (
			<select value={value || ""} onChange={onChange}>
				><option value="">{t("selectCountry")}</option>
				{countries.map((c, ci) => {
					return (
						<option key={ci} value={c.country_code}>
							{t(c.name)}
						</option>
					);
				})}
			</select>
		);
	}
);

const CityList = withTranslation("cities")(
	({ t, value, regions, onChange = () => false }) => {
		return (
			<select value={value} onChange={onChange}>
				<option value="">{t("selectCity")}</option>
				{(regions || []).map((r, ri) => {
					return (
						<option key={ri} value={r.region_code}>
							{t(r.name)}
						</option>
					);
				})}
			</select>
		);
	}
);

const News = memo(
	({
		t,
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

				<time dateTime={create_date}>{create_date}</time>
			</div>
		);
	},
	() => true
);

const RenderSource = ({ title = "Source", s }) => {
	return (
		<div className="src">
			{title + ": "}
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

const caseDef = {
	infections: 0,
	infected: 0,
	cured: 0,
	suspicion: 0,
	mortal: 0
};

const Activity = ({ t }) => {
	const {
		api,
		actioner,
		store: {
			country_code,
			region_code,
			cpos,
			index,
			news,
			newsLimit,
			activity,
			activityLimit,
			mapMarkers
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

	const GetInfo = useCallback(() => {
		const index =
			country_code && region_code
				? mapMarkers.findIndex(
						i =>
							"" + i.region === "" + region_code &&
							"" + i.locale === "" + country_code
				  )
				: false;

		const cases =
			country_code && !region_code
				? mapMarkers.reduce(
						(
							ac,
							{ locale, infected, suspicion, cured, mortal }
						) => {
							if (locale === country_code) {
								ac.infections +=
									infected + suspicion + cured + mortal;
								ac.infected += infected;
								ac.suspicion += suspicion;
								ac.cured += cured;
								ac.mortal += mortal;
							}
							return ac;
						},
						{ ...caseDef }
				  )
				: country_code && region_code
				? mapMarkers[index] || { ...caseDef }
				: { ...caseDef };

		console.log(
			"index",
			mapMarkers,
			cases,
			mapMarkers[index],
			country_code,
			region_code
		);

		return (
			<div className="ininfo">
				<li className="infobox hd">
					<div className="innr">
						<span className="cnt">
							{numComma(cases.infections)}
						</span>
						<span className="ttl">{t("allcases")}</span>
					</div>
				</li>

				{["infected", "cured", "suspicion", "mortal"].map((k, ki) => {
					return k !== "none" ? (
						<li className="infobox" key={ki}>
							<div className="innr">
								<span className={`cnt cond ${k}`}>
									{numComma(cases[k])}
								</span>
								<span className={`ttl`}>
									{" " + t(condition[k])}
								</span>
							</div>
						</li>
					) : (
						""
					);
				})}
			</div>
		);
	}, [mapMarkers, country_code, region_code]);

	const newsData = useMemo(
		() => (country_code && news[country_code] ? news[country_code] : []),
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
			country_code && activity[markerKey] ? activity[markerKey] : false,
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
		({ a: { ID, condition: cond, type, number, details, date } = {} }) => {
			return ID ? (
				<div className={"author " + type}>
					<h3 className={"atitle " + type}>
						{`${t(sources[type])} #${ID}`}
					</h3>

					<div className={"desc"}>{details.content}</div>

					<div className="resource">
						{details.source && (
							<RenderSource
								title={t("source")}
								s={details.source}
							/>
						)}
						{details.source2 && (
							<RenderSource
								title={t("source")}
								s={details.source2}
							/>
						)}
					</div>

					<div className={"infc"}>
						{number >= 1 && (
							<span>
								<b className="b">{numComma(number)}</b>{" "}
								{number > 1 ? t("cases") : t("case")}
							</span>
						)}

						{cond !== "none" && (
							<span className={"cond " + cond}>
								<b className={"b circ " + cond} />
								{t(condition[cond])}
							</span>
						)}

						<time dateTime={date}>{date}</time>
					</div>
				</div>
			) : (
				t("clickmap")
			);
		},
		[]
	);

	const setCountry = useCallback(({ target: { value } }) => {
		setStore({
			country_code: value,
			region_code: ""
		});
	}, []);

	const setCity = useCallback(({ target: { value } }) => {
		setStore({
			region_code: value
		});
	}, []);

	return (
		<div id="activityArea" className={"block activityArea " + nav}>
			<nav>
				<ol>
					{[
						// {
						// 	id: "local",
						// 	className: "pin",
						// 	title: <Pin />
						// },
						{ id: "acts", title: t("infections") },
						{ id: "news", title: t("news") }
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
									if (m.id === "local" && index === undefined)
										return;
									navigation(m.id);
								}}
							>
								{m.title}
							</li>
						);
					})}
				</ol>
			</nav>

			<div className={"activity"}>
				<div id="sc-markers" className="bb b1">
					<MakeMark />

					<div className="filterNavi tbf">
						<div className="fitem tbf-c">
							<CountryList
								value={country_code}
								onChange={setCountry}
							/>
						</div>

						<div className="sep" />

						<div className="fitem tbf-c">
							<CityList
								value={region_code}
								onChange={setCity}
								regions={builtRegions}
							/>
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
								<NoContent text={t("selectCity")} />
							)
						}
						endMessage={<NoContent text={t("nodata")} />}
						scrollableTarget="sc-markers"
					>
						<GetInfo />

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
					{/* <button
						onClick={() => {
							api({
								method: "GET",
								action: "crontest",
								params: "action=parser"
							}).then(r => {
								console.log("SSS", r);
							});
						}}>
						SSSS
					</button> */}
					<InfiniteScroll
						dataLength={newsData.length}
						next={fetchNews}
						hasMore={!newsLimited}
						loader={<Skeleton1 row={5} />}
						endMessage={<NoContent />}
						scrollableTarget="sc-news"
					>
						{newsData.map((a, ax) => (
							<News key={ax} data={a} ax={ax} t={t} />
						))}
					</InfiniteScroll>
				</div>
			</div>
		</div>
	);
};

Activity.getInitialProps = async () => ({
	namespacesRequired: ["common", "countries", "cities"]
});

export default memo(withTranslation("common")(Activity), () => true);
