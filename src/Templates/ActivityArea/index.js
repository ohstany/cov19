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

let newsRef = null;

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
					<div className="source">
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
			api,
			store: {
				country_code,
				region_code,
				geo,
				cpos,
				index,
				markers: { a: markers, loaded: mLoaded },
				news,
				newsLimit,
				activity
			},
			setStore
		} = useContext(RootContext) || {};

		const newsData =
			country_code && news[country_code] ? news[country_code] : false;

		const limited =
			country_code && newsLimit[country_code]
				? newsLimit[country_code]
				: false;

		const active = index >= 0 ? markers[index] : false;

		const comments = activity[index] || false;

		const [nav, _nav] = useState("acts");

		const [fetching, _fetching] = useState(false);

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

		useEffect(() => {
			if (!fetching && !limited) {
				newsRef.addEventListener("scroll", handleScroll);
				return () =>
					newsRef.removeEventListener("scroll", handleScroll);
			}
		}, [fetching]);

		useEffect(() => {
			if (!fetching) return;
			fetchNews();
		}, [fetching]);

		const handleScroll = () => {
			const { clientHeight, scrollHeight, scrollTop } = newsRef;
			if (
				clientHeight + scrollTop !== scrollHeight ||
				fetching ||
				limited
			)
				return;
			_fetching(true);
		};

		function fetchNews() {
			const offset =
				news[country_code] && news[country_code].length
					? news[country_code][news[country_code].length - 1].ID
					: 0;

			setTimeout(() => {
				actioner({
					method: "GET",
					action: "news",
					params: `locale=${country_code}&limit=10&offset=${offset}`,
					reduce: "SET_NEWS"
				}).then(() => {
					_fetching(false);
				});
			}, 200);
		}

		const navigation = useCallback(key => {
			_nav(key);
		}, []);

		useEffect(() => {
			if (country_code !== undefined) {
				_fetching(true);
			}
		}, [country_code]);

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
						{news ? a.title : `User #${a.id}`}
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
				"Click on marker on the map"
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

				<div className="filterNavi tbf">
					<div className="fitem tbf-c">
						<select
							value={country_code || ""}
							onChange={({ target: { value } }) =>
								setStore({ country_code: value })
							}>
							><option value="">Select country</option>
							{countries.map((c, ci) => {
								return (
									<option key={ci} value={c.country_code}>
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
										<option key={ri} value={r.region_code}>
											{r.name}
										</option>
									);
								})}
						</select>
					</div>
				</div>

				<div className={"activity"}>
					<div className="bb b1">
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
									text={"No cases of infection at this city."}
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
								<h3>Comments ({comments.length || 0})</h3>
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
									: "There are no comments"}
							</div>
						)}
					</div>

					<div id="okoko" ref={r => (newsRef = r)} className="bb b3">
						{newsData && newsData.length
							? newsData.map((a, ax) => {
									return <News key={ax} data={a} ax={ax} />;
							  })
							: ""}

						{fetching ? (
							<Skeleton1 row={5} />
						) : newsData.length === 0 || limited ? (
							<NoContent />
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	},
	() => true
);
