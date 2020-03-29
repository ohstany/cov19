import {
	memo,
	useMemo,
	useCallback,
	useEffect,
	useState,
	useContext
} from "react";
import RootContext from "Context";
import { Skeleton1 } from "Templates/Skeleton";
import Popup from "Templates/Popup";
import NoContent from "Templates/NoContent";
import Access from "Templates/Login/LoginForm";
import { numComma } from "Library";
import { withTranslation } from "i18n";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faThumbsUp,
	faThumbsDown,
	faChevronLeft
} from "@fortawesome/fontawesome-free-solid";

const UserName = ({ prefix = "User", value }) =>
	prefix + (1000 + parseInt(value));

const LikesCounter = ({ value }) => {
	if (!value) return "";
	const n = numComma(value).split(",");
	return (
		<span className="lc">
			{n.length === 3
				? `${parseInt(n[0])}M ${parseInt(n[1])}K ${parseInt(n[2])}`
				: n.length === 2
				? `${parseInt(n[0])}K ${parseInt(n[1])}`
				: parseInt(n[0])}
		</span>
	);
};

var timer = null;
var timer2 = null;
var count = 0;
var count2 = 0;
const checkAfter = 10;

export default memo(
	withTranslation("common")(({ t, visible, toggle }) => {
		const {
			actioner,
			store: {
				language,
				loginStatus,
				userdata: {
					avatar: mya,
					geo,
					user_roles: [role = "none"] = []
				} = {},
				country_code,
				chats,
				chatReplies,
				chatLimit
			}
		} = useContext(RootContext);

		const [comment, _comment] = useState("");
		const [showReply, _showReply] = useState({ show: false, over: false });
		const [fetchingMessages, _fetchingMessages] = useState(false);
		const [fetchingReplies, _fetchingReplies] = useState(false);
		const [pushingComment, _pushingComment] = useState(false);
		const [autoFetchAuthors, _autoFetchAuthors] = useState(false);
		const [autoFetchReplies, _autoFetchReplies] = useState(false);
		const [popup, _popup] = useState(false);
		const [updater, _updater] = useState(false);

		useEffect(() => {
			if (showReply.ID) {
				const index = chats[country_code].data.findIndex(
					i => i.ID === showReply.ID
				);

				if (index >= 0) {
					_showReply(p => ({
						...p,
						...chats[country_code].data[index]
					}));
				}
			}
		}, [updater]);

		const countryChat = useMemo(
			() =>
				country_code && chats[country_code]
					? chats[country_code].data || []
					: [],
			[country_code, chats[country_code], fetchingMessages]
		);

		const chatCount = useMemo(() =>
			country_code && chats[country_code]
				? chats[country_code].count || 0
				: 0
		);

		const replyItem = useMemo(
			() => (showReply.ID ? chatReplies[showReply.ID] || [] : []),
			[showReply.ID, chatReplies[showReply.ID]]
		);

		const chatsLimited = useMemo(
			() =>
				country_code && chats[country_code]
					? chats[country_code].limit
					: false,
			[country_code, fetchingMessages]
		);

		const repliesLimited = useMemo(
			() =>
				country_code && (showReply.ID || showReply.ID >= 0)
					? chatLimit[showReply.ID]
					: false,
			[country_code, fetchingReplies]
		);

		const setLikes = (ID, status, type) => {
			actioner({
				reduce: "SET_LIKE",
				action: "likes",
				method: "POST",
				params: `item=${ID}&status=${status}&c=${country_code}&type=${type}`
			}).then(() => {
				_updater(p => p + 1);
			});
		};

		useEffect(() => {
			if (autoFetchAuthors) {
				fetchChatMessages(10);
			}
		}, [autoFetchAuthors]);

		useEffect(() => {
			if (autoFetchReplies) {
				fetchReplies("new");
			}
		}, [autoFetchReplies]);

		useEffect(() => {
			if (showReply.show) {
				stopTimer();

				if (timer2 === null) {
					count2 = 0;
					timer2 = setInterval(() => {
						count2 = count2 + 1;
						if (count2 === checkAfter) {
							_autoFetchReplies(p => {
								return p === true ? false : true;
							});
							count2 = 0;
						}
					}, 1000);
				}
			} else {
				startAuthors();
			}

			return () => stopTimer2();
		}, [showReply.show]);

		useEffect(() => {
			if (visible && country_code) {
				if (!chats[country_code]) {
					setTimeout(() => {
						actioner({
							reduce: "SET_CHAT_COUNT",
							action: "comments",
							method: "GET",
							params: `country=${country_code}&type=count`
						});
					}, 200);
				}

				startAuthors();
			}

			return () => stopTimer();
		}, [visible, country_code]);

		useEffect(() => {
			if (visible && country_code && countryChat.length === 0) {
				fetchChatMessages(25);
			}
		}, [visible, country_code]);

		const startAuthors = useCallback(() => {
			if (timer === null) {
				timer = setInterval(() => {
					count = count + 1;
					if (count === checkAfter) {
						_autoFetchAuthors(p => {
							return p === true ? false : true;
						});
						count = 0;
					}
				}, 1000);
			}
		}, []);

		const stopTimer = useCallback(() => {
			clearInterval(timer);
			timer = null;
		}, []);

		const stopTimer2 = useCallback(() => {
			clearInterval(timer2);
			timer2 = null;
		}, []);

		const fetchChatMessages = (limit, g = "new") => {
			if (country_code && fetchingMessages === false) {
				_fetchingMessages(true);

				const offset =
					countryChat && countryChat.length
						? countryChat[g === "new" ? 0 : countryChat.length - 1]
								.ID
						: 0;

				setTimeout(() => {
					actioner({
						reduce: "FETCH_CHAT",
						action: "comments",
						method: "GET",
						params: `country=${country_code}&type=author&offset=${offset}&limit=${limit}&get=${g}`
					}).then(() => {
						_fetchingMessages(false);
						_autoFetchAuthors(false);
					});
				}, 200);
			}
		};

		const fetchReplies = (g = "new", c) => {
			if (country_code && fetchingReplies === false) {
				c &&
					_showReply(p => {
						if (p.show === false) {
							document
								.getElementById("cm-replies")
								.scrollTo(0, 0);
						}

						return {
							...c,
							replyTo: c.ID,
							replyName: c.name,
							show: true
						};
					});

				const { ID = false } = c || showReply;

				if (ID !== false) {
					_fetchingReplies(true);
					const replyItem = chatReplies[ID];

					const offset =
						replyItem && replyItem.length
							? replyItem[g === "new" ? 0 : replyItem.length - 1]
									.ID
							: 0;

					actioner({
						reduce: "FETCH_REPLY",
						action: "comments",
						method: "GET",
						params: `country=${country_code}&parent=${ID}&type=replier&offset=${offset}&limit=10&get=${g}`
					}).then(() => {
						_fetchingReplies(false);
						_autoFetchReplies(false);
					});
				}
			}
		};

		const pushComment = useCallback(
			(parent, replyto, content) => {
				if (country_code && fetchingMessages === false && content) {
					_pushingComment(true);
					actioner({
						reduce: "PUSH_COMMENT",
						action: "comments",
						method: "POST",
						t,
						data: {
							parent,
							replyto,
							content,
							country: country_code
						}
					}).then(() => {
						_comment("");
						_pushingComment(false);
						parent && _updater(p => p + 1);
					});
				}
			},
			[country_code, fetchingMessages]
		);

		const repliesWindow = useCallback(
			(replyTo = false, replyName = false, focus = false, timer = 0) => {
				_showReply(p => ({
					...p,
					replyTo: replyTo !== false ? replyTo : p.ID,
					replyName: replyName !== false ? replyName : p.name
				}));

				if (focus) {
					const t = document.getElementById("c-reply");
					if (timer) {
						setTimeout(() => {
							t && t.focus();
						}, timer);
					} else {
						t.focus();
					}
				}
			},
			[]
		);

		const DoLogin = useCallback(() => {
			return (
				<div className="c-login">
					<span className="do" onClick={() => _popup(p => !p)}>
						{t("Login")}
					</span>{" "}
					{t("toLeaveComment")}
				</div>
			);
		}, []);

		const closePopup = useCallback(() => {
			_popup(p => false);
		}, []);

		const Actions = useCallback(
			({ type, item, action, showCount = true }) => {
				const { like, dislike, ID, count } = item || {};
				return (
					<div className="actions">
						<div
							className="likes l"
							onClick={() => setLikes(ID, 1, type)}
						>
							<FontAwesomeIcon icon={faThumbsUp} />
							<LikesCounter value={like} />
						</div>

						<div
							className="likes d"
							onClick={() => setLikes(ID, 0, type)}
						>
							<FontAwesomeIcon icon={faThumbsDown} />
							<LikesCounter value={dislike} />
						</div>

						<span className="openreply" onClick={action}>
							{t("Reply")}
						</span>

						{showCount && count ? (
							<span
								className="repcount"
								onClick={() => fetchReplies("new", item)}
							>
								{count} {t("Replies")}
							</span>
						) : (
							""
						)}
					</div>
				);
			}
		);

		const Comment = useCallback(
			({ c }) => {
				const [cont, _cont] = useState(false);

				const len = c.content.length;

				return (
					<div className="comment">
						<div className="c-avatar">
							<img src={c.avatar || "/avatar.png"} />
						</div>
						<div className="c-content">
							<div className="c-meta">
								<span className="c-name">
									<UserName value={c.name} />
								</span>
								<span className="c-when">
									{c.date
										? moment(c.date)
												.lang(language || "en")
												.fromNow()
										: ""}
								</span>
							</div>

							<div
								className={
									"c-message" +
									(len && len > 100
										? cont
											? " vs"
											: " hd"
										: "")
								}
								onDoubleClick={() => {
									fetchReplies("new", c);
								}}
							>
								{c.content}
							</div>

							{len && len > 100 ? (
								<div
									className="moreLess"
									onClick={() => _cont(p => !p)}
								>
									{t(cont ? "showLess" : "showMore")}
								</div>
							) : (
								""
							)}

							<Actions
								item={c}
								type="author"
								action={() => {
									fetchReplies("new", c);
									repliesWindow(false, false, true, 500);
								}}
							/>
						</div>
					</div>
				);
			},
			[country_code]
		);

		const Reply = useCallback(
			({ c }) => {
				const [cont, _cont] = useState(false);

				const len = c.content.length;

				return (
					<div className="comment">
						<div className="c-avatar">
							<img src={c.avatar || "/avatar.png"} />
						</div>
						<div className="c-content">
							<div className="c-meta">
								<span className="c-name">
									<UserName value={c.name} />
								</span>
								<span className="c-when">{c.date}</span>
							</div>

							<div
								className={
									"c-message" +
									(len && len > 100
										? cont
											? " vs"
											: " hd"
										: "")
								}
								onDoubleClick={() => {
									repliesWindow(c.ID, c.name, true, 0);
								}}
							>
								{c.content}
							</div>

							{len && len > 100 ? (
								<div
									className="moreLess"
									onClick={() => _cont(p => !p)}
								>
									{t(cont ? "showLess" : "showMore")}
								</div>
							) : (
								""
							)}
						</div>
					</div>
				);
			},
			[country_code]
		);

		return (
			<div
				className={[
					"chatArea",
					loginStatus ? "online" : "offline",
					visible ? "visible" : "hidden"
				].join(" ")}
			>
				<Popup visible={popup} onClose={closePopup}>
					<Access
						onAuth={() => {
							closePopup();
						}}
					/>
				</Popup>

				<div className="comments">
					<div className="filters">
						{t("Comments") + ": "}
						<span className="chatCount">{chatCount || 0}</span>
						<img
							onClick={() => toggle()}
							src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
						/>
					</div>
					<div id="cm-author" className="cm-inner">
						<InfiniteScroll
							dataLength={countryChat.length}
							next={() => fetchChatMessages(10, "old")}
							hasMore={!chatsLimited}
							loader={country_code ? <Skeleton1 row={5} /> : ""}
							endMessage={
								countryChat.length == 0 ? (
									<NoContent text={t("chatBeFirst")} />
								) : (
									""
								)
							}
							scrollableTarget="cm-author"
						>
							<div className="comment add">
								{loginStatus ? (
									(geo &&
										geo.country_code === country_code) ||
									role === "developer" ? (
										<>
											<div className="c-avatar">
												<img
													src={mya || "/avatar.png"}
												/>
											</div>
											<div className="c-content">
												<input
													id="c-make"
													placeholder={t(
														"writeComment"
													)}
													value={comment}
													onChange={({
														target: value
													}) => {
														if (
															value.value.length <
															500
														) {
															_comment(
																value.value
															);
														}
													}}
													onKeyDown={e => {
														if (e.key === "Enter") {
															if (
																!pushingComment
															) {
																pushComment(
																	false,
																	false,
																	comment
																);
															}
														}
													}}
												/>
												{comment && (
													<img
														src="/send2.png"
														alt=""
														onClick={() => {
															if (
																!pushingComment
															) {
																pushComment(
																	false,
																	false,
																	comment
																);
															}
														}}
													/>
												)}
											</div>
										</>
									) : (
										""
									)
								) : (
									<DoLogin />
								)}
							</div>

							{countryChat && countryChat.length
								? countryChat.map((c, cx) => (
										<Comment c={c} key={cx} />
								  ))
								: ""}
						</InfiniteScroll>
					</div>
				</div>

				<div className={"replies" + (showReply.show ? " visible" : "")}>
					<div className="comments">
						<div className="filters">
							{t("Replies") + ": "}
							<span className="chatCount">
								{replyItem.length || 0}
							</span>
							<div
								className="goback"
								onClick={() => {
									_showReply(p => ({
										...p,
										show: false
									}));
								}}
							>
								<FontAwesomeIcon icon={faChevronLeft} />
								{t("Go Back")}
							</div>
						</div>

						<div className="comment add">
							{loginStatus ? (
								(geo && geo.country_code === country_code) ||
								role === "developer" ? (
									<>
										<div className="c-avatar">
											<img src={mya || "/avatar.png"} />
										</div>
										<div className="c-content">
											{showReply.replyTo &&
												showReply.ID !==
													showReply.replyTo && (
													<div className="repto">
														{t("replyingTo")}
														<span className="rto">
															<span className="toname">
																<UserName
																	value={
																		showReply.replyName
																	}
																/>
															</span>
														</span>
													</div>
												)}

											<div
												style={{ position: "relative" }}
											>
												<input
													id="c-reply"
													placeholder={t(
														"writeComment"
													)}
													value={comment}
													onFocus={() =>
														_showReply(p => ({
															...p,
															over: true
														}))
													}
													onBlur={() =>
														_showReply(p => ({
															...p,
															over: false
														}))
													}
													onChange={({
														target: value
													}) => {
														if (
															value.value.length <
															500
														) {
															_comment(
																value.value
															);
														}
													}}
													onKeyDown={e => {
														if (e.key === "Enter") {
															if (
																!pushingComment
															) {
																pushComment(
																	showReply.ID,
																	showReply.replyTo &&
																		showReply.replyTo !==
																			showReply.ID
																		? showReply.replyTo
																		: false,
																	comment
																);
															}
														}
													}}
												/>
												{comment && (
													<img
														src="/send2.png"
														alt=""
														onClick={() => {
															if (
																!pushingComment
															) {
																pushComment(
																	showReply.ID,
																	showReply.replyTo &&
																		showReply.replyTo !==
																			showReply.ID
																		? showReply.replyTo
																		: false,
																	comment
																);
															}
														}}
													/>
												)}
											</div>
										</div>
									</>
								) : (
									""
								)
							) : (
								<DoLogin />
							)}
						</div>

						<div id="cm-replies" className="cm-inner">
							{showReply.ID ? (
								<>
									{showReply.over && (
										<div className="replyBg" />
									)}

									<InfiniteScroll
										dataLength={replyItem.length}
										next={() => {
											fetchReplies("old");
										}}
										hasMore={!repliesLimited}
										loader={
											country_code ? (
												<Skeleton1 row={5} />
											) : (
												""
											)
										}
										endMessage={
											replyItem.length == 0 ? (
												<NoContent
													text={t("chatBeFirst")}
												/>
											) : (
												""
											)
										}
										scrollableTarget="cm-replies"
									>
										<div className="comment owner">
											<div className="c-avatar">
												<img
													src={
														showReply.avatar ||
														"/avatar.png"
													}
												/>
											</div>
											<div className="c-content">
												<div className="c-meta">
													<span className="c-author">
														{t("Author")}
													</span>
													<span className="c-name">
														<UserName
															value={
																showReply.name
															}
														/>
													</span>
													<span className="c-when">
														{showReply.date}
													</span>
												</div>
												<div
													className="c-message"
													onDoubleClick={() =>
														repliesWindow(
															false,
															false,
															true
														)
													}
												>
													{showReply.content}
												</div>

												<Actions
													type="author"
													item={showReply}
													showCount={false}
													action={() => {
														repliesWindow(
															false,
															false,
															true
														);
													}}
												/>
											</div>
										</div>

										{replyItem
											? replyItem.map((c, cx) => (
													<Reply c={c} key={cx} />
											  ))
											: ""}
									</InfiniteScroll>
								</>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}),
	(p, n) => p === n
);
