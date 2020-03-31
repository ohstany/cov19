import {
	useEffect,
	useState,
	useCallback,
	useContext,
	memo,
	useMemo
} from "react";
import MakeMark from "Templates/MakeMark";
import { Skeleton1 } from "Templates/Skeleton";
import NoContent from "Templates/NoContent";
import RootContext from "Context";
import countries from "Library/countries-object.json";
import { sources } from "Library/statuses.js";
import { condition } from "Library/statuses";
import { numComma } from "Library";
import Chat from "./Chat";
import { withTranslation } from "i18n";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";

const CountryList = withTranslation("countries")(
	({ t, value, onChange = () => false, markers, usersCc = false }) => {
		const f = markers
			.reduce((p, n) => {
				if (usersCc && p.indexOf(usersCc) === -1) {
					p.unshift(usersCc);
				}

				if (p.indexOf(n.locale) === -1) {
					p.push(n.locale);
				}
				return p;
			}, [])
			.map(cc => {
				return {
					locale: cc,
					infections: markers
						.filter(i => i.locale === cc)
						.reduce((p, n) => (p += n.infected), 0)
				};
			})
			.sort((a, b) => {
				return b.infections - a.infections;
			});

		return (
			<select value={value || ""} onChange={onChange}>
				><option value="">{t("selectCountry")}</option>
				{f.map((c, ci) => {
					return (
						<option key={ci} value={c.locale}>
							{`${t(countries[c.locale].name)} (${c.infections})`}
						</option>
					);
				})}
			</select>
		);
	}
);

const CityList = withTranslation("cities")(
	({ t, value, regions, onChange = () => false, markers, country_code }) => {
		return (
			<select value={value} onChange={onChange}>
				<option value="">{t("selectCity")}</option>
				{(regions || [])
					.map((r, ri) => {
						r.inf = markers
							.filter(
								i =>
									i.locale === country_code &&
									"" + i.region === "" + r.region_code
							)
							.reduce((p, n) => (p += n.infections), 0);
						return r;
					})
					.sort((a, b) => {
						return b.inf - a.inf;
					})
					.map((r, ri) => {
						return (
							<option key={ri} value={r.region_code}>
								{`${t(r.name)} (${r.inf})`}
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
			mapMarkers
		},
		setStore
	} = useContext(RootContext) || {};

	const usersCc = geo ? geo.country_code : false;

	const [nav, _nav] = useState("acts");
	const [ch, _ch] = useState(false);
	const [fetchingNews, _fetchingNews] = useState(false);
	const [fetchingMarkers, _fetchingMarkers] = useState(false);
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
				? mapMarkers
						.filter(i => i.locale === country_code)
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
			const [cont, _cont] = useState(false);

			const len = details.content ? details.content.length : 0;

			return ID ? (
				<div className={"author " + type}>
					<div className="infc">
						{number >= 1 && (
							<span className="cases">
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

						<time dateTime={date}>
							{date
								? moment(date)
										.lang(language || "en")
										.fromNow()
								: ""}
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
									onClick={() => _cont(p => !p)}
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
						<img src={`/${type}.png`} alt="" />
						{`${t(sources[type])} #${ID}`}
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
			<Chat visible={ch} toggle={() => _ch(p => !p)} />

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
								)
							},
							{ id: "acts", title: t("infections") },
							{ id: "news", title: t("news") }
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
											_ch(p => !p);
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

					<div id="sc-news" className="bb b2">
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
		</div>
	);
};

Activity.getInitialProps = async () => ({
	namespacesRequired: ["common", "countries", "cities"]
});

export default memo(withTranslation("common")(Activity), () => true);
