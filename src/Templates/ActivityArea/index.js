import { useEffect, useState, useCallback, useContext, memo } from "react";
import Pin from "Assets/images/pin.svg";
import { Skeleton1 } from "Templates/Skeleton";
import NoContent from "Templates/NoContent";
import RootContext from "Context";

const News = memo(
	({
		data: { sc, scu, guid, pubDate, title, enclosure, description } = {}
	}) => {
		const enc = enclosure["@attributes"].url;

		const [sh, _sh] = useState(false);

		return (
			<div className="author">
				{enc && (
					<div className="imgb">
						<img src={enc} alt="" />
					</div>
				)}

				<h3 className={"atitle clickable"}>
					<a href={guid} target="_blank">
						{title}
					</a>
				</h3>

				<div className={"desc" + (sh ? " act" : "")}>
					<div
						class={"cont"}
						dangerouslySetInnerHTML={{
							__html: description
						}}></div>
					<span
						className={"showh"}
						onClick={() => _sh(e => !e)}></span>
				</div>

				{sc && (
					<div className="source">
						Ресурс: #{" "}
						<a href={scu} target="_blank">
							{sc}
						</a>
					</div>
				)}
				<time datetime={pubDate}>{pubDate}</time>
			</div>
		);
	},
	() => true
);

export default memo(
	() => {
		const {
			api,
			store: {
				index,
				markers: { a: markers, loaded: mLoaded },
				news: { a: news, loaded: nLoaded },
				activity
			},
			setStore
		} = useContext(RootContext) || {};

		const active = index >= 0 ? markers[index] : false;

		const comments = activity[index] || false;

		const [nav, _nav] = useState("acts");

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

		const RenderSource = useCallback(({ s }) => {
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
		}, []);

		return (
			<div className={"block activityArea " + nav}>
				<nav>
					<ol>
						{[
							{
								id: "local",
								title: <Pin />
							},
							{ id: "acts", title: "Заражения" },
							{ id: "news", title: "Новости" }
						].map((m, mx) => {
							return (
								<li
									key={mx}
									className={
										"navi " + (m.id === nav ? "active" : "")
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
								<NoContent />
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
