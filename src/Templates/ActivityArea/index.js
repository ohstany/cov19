import {
	useEffect,
	useState,
	useCallback,
	useContext,
	memo,
	useMemo,
} from "react";
import MakeMark from "Templates/MakeMark";
import { Skeleton1 } from "Templates/Skeleton";
import NoContent from "Templates/NoContent";
import RootContext from "Context";
import { condition, sources } from "Library/statuses";
import { CountryList, CityList } from "./CountryList";
import { numComma, CityName } from "Library";
import { withTranslation } from "i18n";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment-timezone";
import Chat from "./Chat";
import News from "./News";
import NoSsr from "Templates/NoSsr";

const caseDef = {
	infections: 0,
	infected: 0,
	cured: 0,
	suspicion: 0,
	mortal: 0,
};

const RenderSource = memo(({ title = "Source", s }) => {
	return (
		<div className="src">
			{"#" + title + ": "}
			{s.indexOf("youtube") >= 0 && s.indexOf("iframe") >= 0 ? (
				<div
					dangerouslySetInnerHTML={{
						__html: s,
					}}
				/>
			) : (
				<a href={s} target="_blank">
					{s}
				</a>
			)}
		</div>
	);
});

const Activity = ({ t }) => {
	const {
		actioner,
		store: {
			geo,
			continent_code,
			language,
			country_code,
			region_code,
			cpos,
			index,
			news,
			newsLimit,
			activity,
			activityLimit,
			mapMarkers,
		},
		setStore,
	} = useContext(RootContext) || {};

	const usersCc = geo ? geo.country_code : false;
	const mType =
		country_code && region_code
			? "local"
			: country_code
			? "regional"
			: false;
	const rkey = region_code || "other";
	const markerKey =
		mType === "regional"
			? `${country_code}_${mType}`
			: `${country_code}_${rkey}`;
	const [nav, _nav] = useState("acts");
	const [ch, _ch] = useState(false);
	const [floaded, _floaded] = useState(false);
	const [f, _f] = useState(false);
	const [fetchingNews, _fetchingNews] = useState(false);
	const [fetchingMarkers, _fetchingMarkers] = useState(false);
	const { regions = false } = cpos || {};

	const kkey = useMemo(() => {
		return floaded &&
			country_code &&
			news[country_code] &&
			news[country_code].length === 0
			? "EARTH"
			: country_code;
	}, [floaded, country_code]);

	const { newsData, newsLimited } = useMemo(
		() => ({
			newsData: news[kkey] || [],
			newsLimited: newsLimit[kkey] || false,
		}),
		[kkey, fetchingNews]
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
			Object.keys(regions).map((n) => ({
				region_code: n,
				...regions[n],
			})),
		[regions]
	);

	const cases = useMemo(() => {
		const index =
			country_code && region_code
				? mapMarkers.findIndex(
						(i) =>
							"" + i.region === "" + region_code &&
							"" + i.locale === "" + country_code
				  )
				: false;

		return country_code && !region_code
			? mapMarkers
					.filter((i) => i.locale === country_code)
					.reduce(
						(ac, { infected, cured, mortal }) => {
							ac.infections += infected + cured + mortal;
							ac.infected += infected;
							ac.cured += cured;
							ac.mortal += mortal;
							return ac;
						},
						{ ...caseDef }
					)
			: country_code && region_code
			? mapMarkers[index] || { ...caseDef }
			: { ...caseDef };
	}, [country_code, region_code, mapMarkers]);

	useEffect(() => {
		if (region_code || mType === "regional") {
			fetchMarkers();
		}
	}, [country_code, region_code, mType]);

	useEffect(() => {
		if (f && cases && !cases.infected) {
			setStore({ region_code: "" });
		}
	}, [f]);

	useEffect(() => {
		if (country_code) {
			_floaded(false);
			fetchNews();
		}
	}, [country_code]);

	useEffect(() => {
		if (floaded && kkey === "EARTH" && newsData.length === 0) {
			fetchNews();
		}
	}, [floaded]);

	useEffect(() => {
		if (index >= 0) {
			navigation("local");
		}
	}, [index]);

	const navigation = useCallback((key) => {
		_nav(key);
	}, []);

	const setCountry = useCallback(({ target: { value } }) => {
		setStore({
			country_code: value,
			region_code: "",
		});
	}, []);

	const setCity = useCallback(({ target: { value } }) => {
		setStore({
			region_code: value,
		});
	}, []);

	const fetchMarkers = () => {
		if (country_code && fetchingMarkers === false) {
			_fetchingMarkers(true);

			const offset =
				activity[markerKey] && activity[markerKey].length
					? activity[markerKey][activity[markerKey].length - 1].date
					: 0;

			setTimeout(() => {
				actioner({
					reduce: "SET_ACTIVITY",
					method: "GET",
					action: "activity",
					params: `type=${mType}&country=${country_code}&city=${region_code}&limit=10&offset=${offset}`,
				}).then((r) => {
					_fetchingMarkers(false);
					_f(true);
				});
			}, 200);
		}
	};

	const fetchNews = () => {
		if (fetchingNews === false) {
			_fetchingNews(true);

			const offset =
				news[kkey] && news[kkey].length
					? news[kkey][news[kkey].length - 1].create_date
					: 0;

			setTimeout(() => {
				actioner({
					method: "GET",
					action: "news",
					params: `locale=${kkey}&limit=10&offset=${offset}`,
					reduce: "SET_NEWS",
				}).then(() => {
					_fetchingNews(false);
					_floaded(true);
				});
			}, 200);
		}
	};

	const GetInfo = useCallback(() => {
		return (
			<div className="ininfo">
				<li className="infobox">
					<div className="innr">
						<span className={`cnt cond all`}>
							{numComma(cases.infections)}
						</span>
						<span className={`ttl`}>{" " + t("allcases")}</span>
					</div>
				</li>

				{["infected", "cured", "mortal"].map((k, ki) => {
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

	const MarkerItem = useCallback(
		({
			a: {
				ID,
				condition: cond,
				type,
				content,
				number,
				details,
				date,
				region,
			} = {},
		}) => {
			const [cont, _cont] = useState(false);

			const len = content ? content.length : 0;

			const tm = continent_code
				? moment(date)
						.lang(language || "en")
						.tz(continent_code)
						.format("DD MMM (dddd), YYYY")
				: moment(date)
						.lang(language || "en")
						.format("DD MMM (dddd), YYYY");

			return ID ? (
				<div className={"author " + type}>
					<div className="infc">
						{cond !== "none" && (
							<span className={"cases cond " + cond}>
								<b className={"b " + cond}>
									{numComma(number)}
								</b>{" "}
								{t(condition[cond])}
							</span>
						)}

						{regions && regions[region] && (
							<div className="reg">
								<img src="/mp.png" alt="" />
								<CityName value={regions[region].name} />
							</div>
						)}

						<time dateTime={tm}>{tm}</time>
					</div>

					{len ? (
						<>
							<div
								className={
									"desc" +
									(len > 100 ? (cont ? " vs" : " hd") : "")
								}
								onClick={() => _cont(true)}
							>
								{content}
							</div>

							{len > 100 ? (
								<div
									className="moreLess"
									onClick={() => _cont((p) => !p)}
								>
									{t(cont ? "showLess" : "showMore")}
								</div>
							) : (
								""
							)}
						</>
					) : (
						""
					)}

					<div className={"atitle " + type}>
						{`#${t("sourceType")}: ${t(sources[type])}`}
					</div>

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
				</div>
			) : (
				t("clickmap")
			);
		},
		[regions]
	);

	return (
		<NoSsr>
			<div id="activityArea" className={"block activityArea " + nav}>
				<Chat visible={ch} toggle={() => _ch((p) => !p)} />

				<div className="hidden">
					<nav>
						<ol>
							{[
								{
									id: "chat",
									className: "pin",
									title: (
										<>
											<span className="chatlive" />
											{t("chat")}
										</>
									),
								},
								{ id: "acts", title: t("infections") },
								{ id: "news", title: t("news") },
							].map((m, mx) => {
								return (
									<li
										key={mx}
										className={
											"navi " +
											(m.className || "") +
											(m.id === nav ||
											(m.id == "chat" && ch)
												? " active"
												: "")
										}
										onClick={() => {
											if (m.id === "chat") {
												_ch((p) => !p);
											} else {
												navigation(m.id);
											}
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
									<h5>{t("Select Country")}</h5>
									<CountryList
										markers={mapMarkers}
										value={country_code}
										onChange={setCountry}
										usersCc={usersCc}
									/>
								</div>

								<div className="sep" />

								<div className="fitem tbf-c">
									<h5>{t("Select Region")}</h5>
									<CityList
										markers={mapMarkers}
										value={region_code}
										country_code={country_code}
										onChange={setCity}
										regions={builtRegions}
									/>
								</div>
							</div>

							<InfiniteScroll
								dataLength={infections ? infections.length : 0}
								next={fetchMarkers}
								hasMore={!activityLimited}
								loader={<Skeleton1 row={5} />}
								endMessage={<NoContent text={t("nodata")} />}
								scrollableTarget="sc-markers"
							>
								{country_code && region_code ? (
									<h4>{t("regionUpdate")}</h4>
								) : country_code ? (
									<h4>{t("countryUpdate")}</h4>
								) : (
									""
								)}

								<GetInfo />

								{infections && infections.length
									? infections.map((a, ax) => {
											return a.locale &&
												a.region &&
												a.region !== "other" ? (
												<MarkerItem
													nav={nav}
													key={ax}
													a={a}
													ax={ax}
												/>
											) : (
												""
											);
									  })
									: ""}
							</InfiniteScroll>
						</div>

						<div id="sc-news" className="bb b2">
							<h4>{t("newsUpdate")}</h4>

							<InfiniteScroll
								dataLength={newsData.length}
								next={fetchNews}
								hasMore={!newsLimited}
								loader={<Skeleton1 row={5} />}
								endMessage={<NoContent />}
								scrollableTarget="sc-news"
							>
								{newsData.map((a, ax) => (
									<News
										key={ax}
										data={a}
										ax={ax}
										t={t}
										continent_code={continent_code}
										language={language}
									/>
								))}
							</InfiniteScroll>
						</div>
					</div>
				</div>
			</div>
		</NoSsr>
	);
};

Activity.getInitialProps = async () => ({
	namespacesRequired: ["common", "countries", "cities"],
});

export default memo(withTranslation("common")(Activity), () => true);
