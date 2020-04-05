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
import { numComma } from "Library";
import { withTranslation } from "i18n";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment-timezone";
import Chat from "./Chat";
import News from "./News";

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
			{title + ": "}
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

	const { continent_code = false } = geo || {};

	console.log("TIMEZONE", geo);

	// moment.tz.setDefault("America/New_York");
	// const create_date = "2020-04-05 21:40:10";
	// const dd = moment(create_date);

	// console.log(
	// 	"Continent:",
	// 	continent_code,
	// 	", Date: ",
	// 	create_date,
	// 	", Kiev: ",
	// 	dd.tz("Europe/Kiev").format("YYYY-MM-DD HH:mm:ss"),
	// 	", Seoul: ",
	// 	dd.tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss"),
	// 	", ",
	// 	`[${dd.tz("Europe/Kiev").fromNow()}, ${dd.tz("Asia/Seoul").fromNow()}]`,
	// 	", ",
	// 	`[${moment(
	// 		dd.tz("Europe/Kiev").format("YYYY-MM-DD HH:mm:ss")
	// 	).fromNow()}, ${dd.tz("Asia/Seoul").fromNow()}]`
	// );

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
	const [f, _f] = useState(false);
	const [fetchingNews, _fetchingNews] = useState(false);
	const [fetchingMarkers, _fetchingMarkers] = useState(false);
	const { regions = false } = cpos || {};

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
		if (continent_code) {
			moment.tz.setDefault(continent_code);
		}
	}, [continent_code]);

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
			fetchNews();
		}
	}, [country_code]);

	useEffect(() => {
		if (index >= 0) {
			navigation("local");
		}
	}, [index]);

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
					? activity[markerKey][activity[markerKey].length - 1].ID
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
				news[country_code] && news[country_code].length
					? news[country_code][news[country_code].length - 1]
							.create_date
					: 0;

			setTimeout(() => {
				actioner({
					method: "GET",
					action: "news",
					params: `locale=${country_code}&limit=10&offset=${offset}`,
					reduce: "SET_NEWS",
				}).then(() => {
					_fetchingNews(false);
				});
			}, 200);
		}
	};

	const MarkerItem = useCallback(
		({ a: { ID, condition: cond, type, number, details, date } = {} }) => {
			const [cont, _cont] = useState(false);

			const len = details.content ? details.content.length : 0;

			const tm = date
				? continent_code
					? moment(date).tz(continent_code)
					: moment(date)
				: "";

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

						<time dateTime={date}>
							{tm ? tm.lang(language || "en").fromNow() : ""}
						</time>
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
								{details.content}
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
						{`#${t(sources[type])}`}
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
		[]
	);

	return (
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
										(m.id === nav || (m.id == "chat" && ch)
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
								<CountryList
									markers={mapMarkers}
									value={country_code}
									onChange={setCountry}
									usersCc={usersCc}
								/>
							</div>

							<div className="sep" />

							<div className="fitem tbf-c">
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
										return (
											<MarkerItem
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
	);
};

Activity.getInitialProps = async () => ({
	namespacesRequired: ["common", "countries", "cities"],
});

export default memo(withTranslation("common")(Activity), () => true);
