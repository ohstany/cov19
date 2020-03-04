import { useEffect, useState, useCallback } from "react";
import xmlToJson from "Library/xmlToJson";
import Pin from "./pin.svg";
import { Skeleton1 } from "Templates/Skeleton";

const proxyUrl = "http://cors-anywhere.herokuapp.com/";

const News = ({ data }) => {
	return (
		<div className="author">
			{data.img && (
				<div className="imgb">
					<img src={data.img} />
				</div>
			)}

			<h3 className={"atitle clickable"}>
				<a href={data.link} target="_blank">
					{data.title}
				</a>
			</h3>

			<div className="desc">{data.description}</div>

			<div className="source">Ресурс: #</div>
		</div>
	);
};

export default ({ context }) => {
	const {
		store: { index, markers, news = false, activity },
		setStore
	} = context || {};

	const active = index >= 0 ? markers[index] : false;

	const comments = activity[index] || false;

	const [nav, _nav] = useState("acts");

	const navigation = useCallback(key => {
		_nav(key);
	}, []);

	const getNews = () => {
		console.log("newsstrted");
		fetch(proxyUrl + "https://gazeta.ua/rss")
			.then(blop => {
				return blop.text();
			})
			.then(res => {
				const news = xmlToJson
					.parseString(res)
					.rss[0].channel[0].item.map(i => {
						return {
							title: i.title[0]._text,
							link: i.guid[0]._text,
							pubDate: i.pubDate[0]._text,
							description:
								i.description[0]._text
									.replace(/(<([^>]+)>)/gi, "")
									.substring(0, 180) + "...",
							img: i.enclosure && i.enclosure[0]._attr.url._value
						};
					});

				console.log("news", news);
				setStore({ news });
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
					className={"atitle" + (nav === "acts" ? " clickable" : "")}
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
						{ id: "acts", title: "Активность" },
						{ id: "news", title: "Новости" }
					].map((m, mx) => {
						return (
							<li
								key={mx}
								className={
									"navi " + (m.id === nav ? "active" : "")
								}
								onClick={() => {
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
					{markers.length ? (
						markers.map((a, ax) => {
							return (
								<SingleItem nav={nav} key={ax} a={a} ax={ax} />
							);
						})
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
											<div className="cm author" key={cx}>
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
					{news.length ? (
						news.map((a, ax) => {
							return <News key={ax} data={a} ax={ax} />;
						})
					) : (
						<Skeleton1 row={5} />
					)}
				</div>
			</div>
		</div>
	);
};
