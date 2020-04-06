import { useContext, useEffect, useState, useCallback } from "react";
import { notification } from "Library";
import { condition as cond, via as vi } from "Library/statuses";
import RootContext from "Context";
import Table from "Templates/Table";

const initialState = {
	address: "",
	content: "",
	lat: "",
	lng: "",
	locale: "",
	region: "",
	amount: undefined,
	source: "",
	source2: "",
	type: "witness",
	status: "hidden",
};

const defV = {
	k: "",
	v: "",
	s: false,
	d: false,
};

const show = 20;

export default () => {
	const {
		setStore,
		actioner,
		store: { geo, members },
	} = useContext(RootContext);

	const [refr, _refr] = useState(false);

	const { a = {}, paging = 0, page = 1 } = members || {};

	useEffect(() => {
		getPaging();
	}, []);

	useEffect(() => {
		refreshs();
	}, [page]);

	const resetPages = () => {
		if (a[1] && a[1][0]) {
			_refr(true);
			actioner({
				reduce: "RESET_MEMBERS_ADMIN",
				action: "members",
				method: "OPTIONS",
				params: `type=reset&offset=${a[1][0].ID}&limit=${show}`,
			}).then(() => {
				setTimeout(() => {
					_refr(false);
				}, 500);
			});
		} else {
			return false;
		}
	};

	const refreshs = () => {
		if (a[page]) {
			return false;
		}

		_refr(true);

		actioner({
			reduce: "SET_MEMBERS_ADMIN",
			action: "members",
			method: "POST",
			params: `page=${page}&limit=${show}`,
		}).then(() => {
			setTimeout(() => {
				_refr(false);
			}, 500);
		});
	};

	const getPaging = () => {
		_refr(true);
		actioner({
			reduce: "SET_MEMBERS_PAGING",
			action: "members",
			method: "OPTIONS",
			params: "type=paging",
		}).then(() => {
			_refr(false);
		});
	};

	const pageChange = (page) => {
		members.page = page;
		setStore({
			members,
		});
	};

	const modifyMarker = useCallback(
		(ID, modify) => {
			return actioner({
				reduce: "MODIFY_MEMBERS",
				method: "UPDATE",
				action: "members",
				data: {
					page,
					action: "modify",
					modify,
					ID,
				},
			});
		},
		[members]
	);

	const fields = [
		{
			title: "ID",
			path: "ID",
			className: "id",
			render: (d) => <>#{d}</>,
		},
		{
			title: "Online",
			path: "online",
			className: "id",
			render: (d) => {
				return <span className={"uactive " + (!d ? "" : "act")}></span>;
			},
		},
		{
			title: "Role",
			path: "user_roles",
			render: (d) => (
				<b style={{ textTransform: "uppercase" }} className="b">
					{d}
				</b>
			),
		},
		{
			title: "Avatar",
			path: "avatar",
			className: "id",
			render: (d) => (
				<div className="c-avatar">
					<img src={d || "/avatar.png"} />
				</div>
			),
		},
		{
			title: "Name",
			path: "user_name",
			render: (d, { user_login, user_email }) => {
				return (
					<>
						{`${d} / ${user_login}`}
						<br />
						{user_email}
					</>
				);
			},
		},
		{
			title: "Provider",
			path: "provider",
			render: (d) => (
				<b style={{ textTransform: "uppercase" }} className="b">
					{d}
				</b>
			),
		},
		{
			title: "Registered",
			path: "user_registered",
			render: (date) => {
				return <span>{date}</span>;
			},
		},
		{
			title: "Locale",
			path: "user_meta.geo",
			render: (g) => {
				return (
					<span>
						{g && g.country_code
							? g.country_name + ` (${g.country_code})`
							: "~"}
					</span>
				);
			},
		},
		{
			title: "Region",
			path: "user_meta.geo",
			render: (g) => {
				return (
					<span>
						{g && g.region_code
							? g.region_name + ` (${g.region_code})`
							: "~"}
					</span>
				);
			},
		},
		{
			title: "Active",
			path: "blocked",
			className: "id",
			render: (d) => {
				return (
					<span className={"uactive " + (d ? "non" : "act")}></span>
				);
			},
		},
	];

	return (
		<>
			<h1>Members</h1>

			<div className="a-actions">
				<button
					style={{
						width: 110,
						marginTop: -10,
					}}
					disabled={refr}
					onClick={() => {
						if (!refr) {
							resetPages();
						}
					}}
				>
					{refr ? "Refreshing..." : "Refresh"}
				</button>
			</div>

			<div className="content">
				<Table
					className="amarkers"
					data={a}
					fields={fields}
					pagination={{
						show,
						paging,
						page,
					}}
					loading={refr}
					onPage={pageChange}
					showRow={(
						{ ID, blocked, user_meta = {}, current_geo = {} },
						visible
					) => {
						return visible ? (
							<div className="innerc">
								<div className="blc">
									<h5># GEO on Membership</h5>
									IP:<b>{` ${user_meta.geo.ip || "~"}`}</b>
									<br />
									Country:
									<b>{` ${
										user_meta.geo.country_name || "~"
									}`}</b>
									<br />
									City:
									<b>{` ${user_meta.geo.city || "~"}`}</b>
									<br />
									Timezone:
									<b>{` ${
										user_meta.geo.time_zone ||
										user_meta.geo.timezone ||
										user_meta.geo.continent_code ||
										"~"
									}`}</b>
									<br />
									{`lat: ${
										user_meta.geo.latitude || "~"
									}, lng: ${user_meta.geo.longitude || "~"}`}
								</div>

								<div className="blc">
									<h5># Current GEO</h5>
									IP:<b>{` ${current_geo.ip || "~"}`}</b>
									<br />
									Country:
									<b>{` ${
										current_geo.country_name || "~"
									}`}</b>
									<br />
									City:
									<b>{` ${current_geo.city || "~"}`}</b>
									<br />
									Timezone:
									<b>{` ${
										current_geo.time_zone ||
										current_geo.timezone ||
										current_geo.continent_code ||
										"~"
									}`}</b>
									<br />
									{`lat: ${
										current_geo.latitude || "~"
									}, lng: ${current_geo.longitude || "~"}`}
								</div>

								<div className="blc">
									<h5># Other</h5>
									Agent:
									<b>{` ${
										user_meta.data.user_agent || "~"
									}`}</b>
									<br />
									Language:
									<b>{` ${user_meta.data.ucal || "~"}`}</b>
									<br />
									<button
										className="mkdel"
										onClick={() =>
											modifyMarker(ID, {
												blocked: blocked ? 0 : 1,
											})
										}
									>
										{blocked ? "Release" : "Block"}
									</button>
								</div>
							</div>
						) : (
							""
						);
					}}
				/>
			</div>
		</>
	);
};
