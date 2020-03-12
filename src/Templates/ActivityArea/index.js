import {
	useEffect,
	useState,
	useCallback,
	useContext,
	memo,
	useMemo
} from "react";
import Pin from "Assets/images/pin.svg";
import MakeMark from "Templates/MakeMark";
import { Skeleton1 } from "Templates/Skeleton";
import NoContent from "Templates/NoContent";
import RootContext from "Context";
import countries from "Library/countries-array.json";

const News = memo(
	({ data: { sc, scu, pubDate, title, enclosure, description } = {} }) => {
		const enc = enclosure["@attributes"].url;

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
					{enc && sh && (
						<div className="imgb">
							<img src={enc} alt="" />
						</div>
					)}

					<div
						className={"cont"}
						dangerouslySetInnerHTML={{
							__html: description
						}}></div>
				</div>

				<span className={"showh"} onClick={() => _sh(e => !e)}>
					{sh ? "-" : "+"}
				</span>

				{sc && (
					<div className="source">
						Источник: #{" "}
						<a href={scu} target="_blank">
							{sc}
						</a>
					</div>
				)}
				<time dateTime={pubDate}>{pubDate}</time>
			</div>
		);
	},
	() => true
);

const RenderSource = ({ s }) => {
	return (
		<div className="src">
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
			api,
			store: {
				country_code,
				region_code,
				geo,
				cpos,
				index,
				markers: { a: markers, loaded: mLoaded },
				news: { a: news, loaded: nLoaded },
				activity
			},
			setStore
		} = useContext(RootContext) || {};

		// console.log("cpos", country_code, region_code, cpos, geo);

		const active = index >= 0 ? markers[index] : false;

		const comments = activity[index] || false;

		const [nav, _nav] = useState("acts");

		const { regions = false } = cpos || {};

		const builtRegions = useMemo(
			() =>
				regions &&
				Object.keys(regions).map(n => ({
					region_code: n,
					...regions[n]
				})),
			[regions]
		);

		// console.log("builtRegions", builtRegions);

		const navigation = useCallback(key => {
			_nav(key);
		}, []);

		const getNews = () => {
			api({
				method: "GET",
				action: "news"
			}).then(news => {
				setStore({
					news: {
						a: news || [],
						loaded: true
					}
				});
			});
		};

		useEffect(() => {
			getNews();
		}, []);

		useEffect(() => {
			if (index >= 0) {
				navigation("local");
			}
		}, [index]);

		const SingleItem = useCallback(({ nav, a, ax, news = false }) => {
			return a ? (
				<div className="author">
					<h3
						className={
							"atitle" + (nav === "acts" ? " clickable" : "")
						}
						onClick={() => {
							if (nav === "acts") {
								setStore({ index: ax });
								navigation("local");
							}
						}}>
						{news ? a.title : `Пользователь #${a.id}`}
					</h3>

					<div className="desc">{a.content}</div>

					{a.source && a.source.length && (
						<div className="source">
							{a.source.map((s, sx) => (
								<RenderSource key={sx} s={s} />
							))}
						</div>
					)}

					{nav === "acts" && (
						<button
							onClick={() => {
								setStore({ index: ax });
								navigation("local");
							}}>
							Открыть
						</button>
					)}
				</div>
			) : (
				"Нажмите не метку на карте"
			);
		}, []);

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
							{ id: "acts", title: "Заражения" },
							{ id: "news", title: "Новости" }
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
					<div className="bb b1">
						<div className="filterNavi tbf">
							<div className="fitem tbf-c">
								<select
									value={country_code || ""}
									onChange={({ target: { value } }) =>
										setStore({ country_code: value })
									}>
									><option value="">Выберите страну</option>
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
									<option value="">Выберите город</option>
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

						{mLoaded ? (
							markers.length ? (
								markers.map((a, ax) => {
									return (
										<SingleItem
											nav={nav}
											key={ax}
											a={a}
											ax={ax}
										/>
									);
								})
							) : (
								<NoContent
									text={
										"В данном регионе нет случаев заражения"
									}
								/>
							)
						) : (
							<Skeleton1 row={5} />
						)}
					</div>

					<div className="bb b2">
						<SingleItem nav={nav} a={active} ax={0} />
						{active && (
							<div className="comments">
								<h3>Коментарии ({comments.length || 0})</h3>
								{comments
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
									: "Пока нет коментариев, напишите первым"}
							</div>
						)}
					</div>

					<div className="bb b3">
						{nLoaded ? (
							news.length ? (
								news.map((a, ax) => {
									return <News key={ax} data={a} ax={ax} />;
								})
							) : (
								<NoContent />
							)
						) : (
							<Skeleton1 row={5} />
						)}
					</div>
				</div>
			</div>
		);
	},
	() => true
);
