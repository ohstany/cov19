import { useContext, useEffect, useState, useCallback } from "react";
import { notification } from "Library";
import { condition as cond, via as vi } from "Library/statuses";
import RootContext from "Context";
import Popup from "Templates/Popup";
import { numComma } from "Library";
import countries_a from "Library/countries-array.json";
import countries_o from "Library/countries-object.json";
// import iso from "Library/iso-3166-2-object.json";
import * as iso from "Library/iso-3166-2-object.js";
import ExelToJson from "Templates/exelToJson";
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

const CountrySelect = ({ id, onBlur, controlled = true, value, onUpdate }) => {
	return (
		<select
			{...(id ? { id } : {})}
			{...(onBlur ? { onBlur } : {})}
			value={value}
			onChange={({ target: { value } }) => onUpdate(value)}
		>
			{controlled ? (
				<>
					<option value="all">All</option>
					<option value="other">Not Set</option>
				</>
			) : (
				<option value="">Select Country</option>
			)}

			{countries_a.map((c, ci) => {
				return (
					<option key={ci} value={c.country_code}>
						{c.name}
					</option>
				);
			})}
		</select>
	);
};

const RegionSelect = ({ locale, value, onUpdate }) => {
	const r =
		locale && iso[locale] && iso[locale].regions && iso[locale].regions;

	const regions =
		locale && iso[locale]
			? Object.keys(r).reduce((p, n) => {
					return [...p, { text: r[n].name, value: n }];
			  }, [])
			: [];

	return (
		<select
			value={value}
			onChange={({ target: { value } }) => onUpdate(value)}
		>
			<option value="">Select Region</option>
			{locale &&
				regions.map((c, ci) => {
					return (
						<option key={ci} value={c.value}>
							{c.text}
						</option>
					);
				})}
		</select>
	);
};

export default () => {
	const {
		setStore,
		actioner,
		store: { geo, markers },
	} = useContext(RootContext);

	const [byc, _byc] = useState("all");
	const [refr, _refr] = useState(false);
	const [popup, _popup] = useState(false);
	const [uploaded, _uploaded] = useState(false);
	const [state, _state] = useState(initialState);

	const { a, paging = 0, page = 1 } = markers[byc];

	useEffect(() => {
		getPaging();
	}, []);

	useEffect(() => {
		refreshs();
	}, [page]);

	const updateState = useCallback((e) => {
		const {
			target: { value },
		} = e;
		const name = e.target.getAttribute("name");

		_state((e) => {
			return {
				...e,
				[name]: value,
			};
		});
	}, []);

	const resetPages = () => {
		if (a[1] && a[1][0]) {
			_refr(true);
			actioner({
				reduce: "RESET_MARKERS_ADMIN",
				action: "markers",
				method: "OPTIONS",
				params: `type=reset&locale=${byc}&offset=${a[1][0].ID}&limit=${show}`,
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
			reduce: "SET_MARKERS_ADMIN",
			action: "markers",
			method: "POST",
			params: `locale=${byc}&page=${page}&limit=${show}`,
		}).then(() => {
			setTimeout(() => {
				_refr(false);
			}, 500);
		});
	};

	const getPaging = () => {
		_refr(true);
		actioner({
			reduce: "SET_MARKERS_PAGING",
			action: "markers",
			method: "OPTIONS",
			params: "type=paging&locale=" + byc,
		}).then(() => {
			_refr(false);
		});
	};

	const pageChange = (page) => {
		markers[byc].page = page;
		setStore({
			markers,
		});
	};

	const modifyMarker = useCallback(
		(ID, modify) => {
			return actioner({
				reduce: "MODIFY_MARKER",
				method: "UPDATE",
				action: "markers",
				data: {
					page,
					action: "modify",
					locale: byc,
					modify,
					ID,
				},
			});
		},
		[markers]
	);

	const deleteMarker = useCallback(
		(ID, locale) => {
			actioner({
				reduce: "DELETE_MARKER",
				method: "DELETE",
				action: "markers",
				data: {
					page,
					locale: byc,
					ID,
				},
			});
		},
		[markers]
	);

	const submitForm = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (["locale"].some((i) => !state[i])) {
			alert("Please, fill out all required fields.");
		} else {
			actioner({
				reduce: "ADD_MARKER",
				method: "POST",
				action: "report",
				data: {
					state,
					locale: byc,
					location: {
						geo,
					},
				},
			}).then(() => {
				notification("Marker Added");
			});
		}
	};

	const ffg = useCallback(
		(address, ID, action) => {
			if (!address) {
				alert("Must Input Address");
				return false;
			}

			return fetch(
				"https://maps.googleapis.com/maps/api/geocode/json?address=" +
					encodeURIComponent(address) +
					"&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk&language=en"
			)
				.then((res) => res.json())
				.then(({ results: [data] }) => {
					const { address_components, geometry, formatted_address } =
						data || {};

					if (!data) {
						alert("Must Input Adress");
						return;
					}

					const { locale, city } = address_components.reduce(
						(p, n) => {
							const kk =
								n.types[0] === "administrative_area_level_1"
									? "city"
									: n.types[0] === "country"
									? "locale"
									: false;
							return Object.assign(
								{},
								p,
								kk ? { [kk]: n.short_name } : {}
							);
						},
						{}
					);

					// iso regions
					if (locale) {
						const regions = iso[locale].regions;

						const ks = Object.keys(regions);

						const region =
							ks.find(
								(i) =>
									city && regions[i].name.indexOf(city) >= 0
							) || "";

						const address = {
							region,
							locale,
							latlng: [
								geometry.location.lat,
								geometry.location.lng,
							],
							meta_data: {
								address_components,
								formatted_address,
								viewport: geometry.viewport,
							},
						};

						return actioner({
							reduce: "UPDATE_LOCATION",
							method: "UPDATE",
							action: "markers",
							data: {
								page,
								locale: byc,
								action,
								address,
								ID,
							},
						});
					} else {
						alert("Could not find country code");
					}
				});
		},
		[markers]
	);

	const fields = [
		{
			title: "ID",
			path: "ID",
			className: "id",
			render: (d) => <>#{d}</>,
		},
		{
			title: "Email",
			path: "email",
			render: (d) => d,
		},
		{
			title: "Submited",
			path: "date",
			render: (date, { ID, locale }) => {
				const [u, _u] = useState(defV);
				const id = `c${ID}-date`;

				return (
					<span
						onDoubleClick={() => {
							_u((p) => ({ ...p, v: date, s: true }));
							focusOnItem(id);
						}}
					>
						{u.s ? (
							<input
								id={id}
								value={u.v}
								disabled={u.d}
								onBlur={() =>
									updateMarker({ date: u.v }, ID, _u)
								}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										updateMarker({ date: u.v }, ID, _u);
									}
								}}
								onChange={({ target: value }) =>
									_u((p) => ({ ...p, v: value.value }))
								}
							/>
						) : (
							date
						)}
					</span>
				);
			},
		},
		{
			title: "Locale",
			path: "locale",
			render: (ll, { ID, locale }) => {
				const isodata = locale ? iso[locale] : false;
				const [u, _u] = useState(defV);
				const id = `c${ID}-locale`;

				return (
					<span
						onDoubleClick={() => {
							_u((p) => ({ ...p, v: ll, s: true }));
							focusOnItem(id);
						}}
					>
						{u.s ? (
							<CountrySelect
								id={id}
								onBlur={(e) => {
									updateMarker(
										{
											locale: u.v,
											region: "",
										},
										ID,
										_u
									);
								}}
								controlled={false}
								value={u.v}
								onUpdate={(value) => {
									updateMarker(
										{
											locale: value,
											region: "",
										},
										ID,
										_u
									);
								}}
							/>
						) : ll ? (
							(isodata && isodata.name) || ""
						) : (
							"~"
						)}
					</span>
				);
			},
		},
		{
			title: "Region",
			path: "region",
			render: (r, rr) => {
				const { ID, locale, region } = rr;
				const [u, _u] = useState(defV);
				const id = `c${ID}-region`;
				const isodata = locale ? iso[locale] : false;

				return (
					<span
						onDoubleClick={() => {
							_u((p) => ({ ...p, v: region, s: true }));
							focusOnItem(id);
						}}
					>
						{u.s ? (
							<RegionSelect
								id={id}
								onBlur={(e) => {
									updateMarker(
										{
											region: u.v,
										},
										ID,
										_u
									);
								}}
								controlled={false}
								locale={locale}
								value={u.v}
								onUpdate={(value) => {
									updateMarker(
										{
											region: value,
										},
										ID,
										_u
									);
								}}
							/>
						) : region && locale && isodata.regions[region] ? (
							isodata.regions[region].name
						) : (
							"~"
						)}
					</span>
				);
			},
		},
		{
			title: "LatLng",
			path: "latlng",
			render: (latlng) =>
				latlng && latlng.length ? latlng[0] + ", " + latlng[1] : "~",
		},
		{
			className: "id",
			title: "Number",
			path: "number",
			render: (number, { ID, locale }) => {
				const [u, _u] = useState(defV);
				const id = `c${ID}-number`;

				return (
					<span
						className={"b"}
						onDoubleClick={() => {
							_u((p) => ({ ...p, v: number, s: true }));
							focusOnItem(id);
						}}
					>
						{u.s ? (
							<input
								id={id}
								value={u.v}
								disabled={u.d}
								onBlur={() =>
									updateMarker({ number: u.v }, ID, _u)
								}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										updateMarker({ number: u.v }, ID, _u);
									}
								}}
								onChange={({ target: value }) =>
									_u((p) => ({ ...p, v: value.value }))
								}
							/>
						) : (
							numComma(number)
						)}
					</span>
				);
			},
		},
		{
			title: "By",
			path: "via",
			render: (via) => <span className={"b " + via}>{vi[via]}</span>,
		},
		{
			title: "Get GEO",
			path: "address",
			render: (address, { ID, locale }) => {
				const [block, _block] = useState(false);

				return (
					<button
						className={"lget" + (locale ? " got" : "")}
						disabled={block}
						onClick={() => {
							_block(true);
							if (block === false) {
								ffg(address, ID, "location").then((rr) => {
									_block(false);
									notification("Address Fetched");
								});
							}
						}}
					>
						GET
					</button>
				);
			},
		},
		{
			title: "Condition",
			path: "condition",
			render: (condition, { ID, type, locale }) => {
				return (
					<span className={"b " + condition}>
						<select
							value={condition}
							onChange={({ target: { value } }) => {
								if (value !== type) {
									modifyMarker(ID, { condition: value });
								}
							}}
						>
							{Object.keys(cond).map((i, ix) => (
								<option key={ix} value={i}>
									{cond[i]}
								</option>
							))}
						</select>
					</span>
				);
			},
		},
		{
			title: "Type",
			path: "type",
			render: (type, { ID, locale }) => {
				return (
					<span className={"b " + type}>
						<select
							value={type}
							onChange={({ target: { value } }) => {
								if (value !== type) {
									modifyMarker(ID, { type: value });
								}
							}}
						>
							<option value="witness">Witness</option>
							<option value="source">Source</option>
							<option value="osource">Of.Source</option>
						</select>
					</span>
				);
			},
		},
		{
			className: "status",
			title: "Status",
			path: "status",
			render: (status, { ID, locale }) => {
				return (
					<span className={"b " + status}>
						<select
							value={status}
							onChange={({ target: { value } }) => {
								if (value !== status) {
									modifyMarker(ID, { status: value });
								}
							}}
						>
							<option value="hidden">Hidden</option>
							<option value="published">Publish</option>
						</select>
					</span>
				);
			},
		},
	];

	const updateMarker = useCallback((update, ID, _u) => {
		_u((p) => ({ ...p, d: true }));

		if (Object.keys(update)[0] === "") {
			_u(defV);
			return false;
		}

		modifyMarker(ID, { ...update }).then(() => {
			_u(defV);
		});
	});

	const focusOnItem = useCallback((i) => {
		setTimeout(() => {
			if (document.getElementById(i)) {
				document.getElementById(i).focus();
			}
		}, 200);
		return false;
	}, []);

	return (
		<>
			<h1>Markers</h1>

			<div className="a-actions">
				<button
					style={{
						width: 100,
						background: "#056dc6",
						marginRight: 20,
					}}
					onClick={() => _popup((e) => !e)}
				>
					+ Add new
				</button>

				<button
					style={{
						width: 110,
						float: "right",
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

				<CountrySelect value={byc} onUpdate={_byc} />

				<ExelToJson
					type={"markers"}
					uploaded={uploaded}
					country_code={byc}
					cname={byc !== "all" ? countries_o[byc].name : false}
					onFinish={() => {
						_uploaded(true);
						setTimeout(() => {
							_uploaded(false);
						}, 200);
					}}
				/>
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
					methods={{
						modifyMarker,
						deleteMarker,
						ffg,
					}}
					showRow={(g, visible) => {
						const [ru, _ru] = useState(defV);

						const {
							ID,
							details: { content, source, source2 } = {},
							meta_data: { geo = {} } = {},
							address,
							locale,
							region,
						} = g;

						const isodata2 = locale ? iso[locale] : false;

						const isodata3 =
							geo && geo.country_code
								? iso[geo.country_code]
								: false;

						return visible ? (
							<div className="innerc">
								<div className="blc">
									<h5># Content</h5>

									<div
										className="editablef"
										onDoubleClick={() => {
											_ru((p) => ({
												...p,
												k: "content",
												v: content,
												s: true,
											}));
											focusOnItem(`c${ID}-content`);
										}}
									>
										{ru.k === "content" && ru.s ? (
											<textarea
												id={`c${ID}-content`}
												value={ru.v}
												disabled={ru.d}
												onBlur={() =>
													updateMarker(
														{
															details: {
																[ru.k]: ru.v,
															},
														},
														ID,
														_ru
													)
												}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														updateMarker(
															{
																details: {
																	[ru.k]:
																		ru.v,
																},
															},
															ID,
															_ru
														);
													}
												}}
												onChange={({ target: value }) =>
													_ru((p) => ({
														...p,
														v: value.value,
													}))
												}
											/>
										) : (
											<div
												dangerouslySetInnerHTML={{
													__html: content || "",
												}}
											/>
										)}
									</div>
									<br />
									<b>#1 Source</b>
									<div
										className="editablef"
										onDoubleClick={() => {
											_ru((p) => ({
												...p,
												k: "source",
												v: source,
												s: true,
											}));
											focusOnItem(`c${ID}-source`);
										}}
									>
										{ru.k === "source" && ru.s ? (
											<input
												id={`c${ID}-source`}
												value={ru.v}
												disabled={ru.d}
												onBlur={() =>
													updateMarker(
														{
															details: {
																[ru.k]: ru.v,
															},
														},
														ID,
														_ru
													)
												}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														updateMarker(
															{
																details: {
																	[ru.k]:
																		ru.v,
																},
															},
															ID,
															_ru
														);
													}
												}}
												onChange={({ target: value }) =>
													_ru((p) => ({
														...p,
														v: value.value,
													}))
												}
											/>
										) : source ? (
											<a href={source} target="_blank">
												{source}
											</a>
										) : (
											"~"
										)}
									</div>
									<br />
									<b>#2 Source</b>
									<div
										className="editablef"
										onDoubleClick={() => {
											_ru((p) => ({
												...p,
												k: "source2",
												v: source2,
												s: true,
											}));
											focusOnItem(`c${ID}-source2`);
										}}
									>
										{ru.k === "source2" && ru.s ? (
											<input
												id={`c${ID}-source2`}
												value={ru.v}
												disabled={ru.d}
												onBlur={() =>
													updateMarker(
														{
															details: {
																[ru.k]: ru.v,
															},
														},
														ID,
														_ru
													)
												}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														updateMarker(
															{
																details: {
																	[ru.k]:
																		ru.v,
																},
															},
															ID,
															_ru
														);
													}
												}}
												onChange={({ target: value }) =>
													_ru((p) => ({
														...p,
														v: value.value,
													}))
												}
											/>
										) : source2 ? (
											<a href={source2} target="_blank">
												{source2}
											</a>
										) : (
											"~"
										)}
									</div>
								</div>

								<div className="blc">
									<h5># Address:</h5>
									<div
										className="editablef"
										onDoubleClick={() => {
											_ru((p) => ({
												...p,
												k: "address",
												v: address,
												s: true,
											}));
											focusOnItem(`c${ID}-address`);
										}}
									>
										{ru.k === "address" && ru.s ? (
											<textarea
												id={`c${ID}-address`}
												value={ru.v}
												disabled={ru.d}
												onBlur={() =>
													updateMarker(
														{ [ru.k]: ru.v },
														ID,
														_ru
													)
												}
												onKeyDown={(e) => {
													if (e.key === "Enter") {
														updateMarker(
															{
																[ru.k]: ru.v,
															},
															ID,
															_ru
														);
													}
												}}
												onChange={({ target: value }) =>
													_ru((p) => ({
														...p,
														v: value.value,
													}))
												}
											/>
										) : (
											address
										)}
									</div>
								</div>

								<div className="blc">
									<h5># Location</h5>
									<b>Selected</b>
									<br />

									{locale &&
										isodata2 &&
										isodata2.name &&
										`${isodata2.name} (${locale})`}

									{region &&
										locale &&
										isodata2.regions[region] &&
										` / ${isodata2.regions[region].name} (${region})`}

									<br />
									<b>Default</b>
									<br />
									{geo.country_code &&
										`${isodata3.name} (${geo.country_code})`}

									{geo.region_code &&
										geo.country_code &&
										` / ${
											isodata3.regions[geo.region_code]
												.name
										} (${geo.region_code})`}
								</div>

								<div className="blc">
									<h5># Other</h5>
									{`ip: ${geo.ip || "~"}`}
									<br />
									{`lat: ${geo.lat || "~"}, lng: ${
										geo.lng || "~"
									}`}
									<button
										className="mkdel"
										onClick={() => deleteMarker(ID, locale)}
									>
										Delete
									</button>
								</div>
							</div>
						) : (
							""
						);
					}}
				/>
			</div>
			<Popup visible={popup} onClose={() => _popup((e) => !e)}>
				<h2>Input Fields Below</h2>
				<form>
					<div className="selinp">
						<CountrySelect
							controlled={false}
							value={state.locale}
							onUpdate={(value) =>
								_state((e) => ({
									...e,
									locale: value,
									region: "",
								}))
							}
						/>
						<input
							type="text"
							name="locale"
							placeholder="Country Code EX: UK"
							required={true}
							onChange={({ target: { value } }) =>
								_state((p) => ({
									...p,
									locale: value ? value.toUpperCase() : "",
								}))
							}
							value={state.locale}
						/>
						<label />
					</div>

					<div className="selinp">
						<RegionSelect
							key={state.locale}
							locale={state.locale}
							value={state.region}
							onUpdate={(value) =>
								_state((e) => ({ ...e, region: value }))
							}
						/>
						<input
							type="text"
							name="region"
							placeholder="Country region EX: 12"
							onChange={({ target: { value } }) =>
								_state((p) => ({
									...p,
									region: value ? value.toUpperCase() : "",
								}))
							}
							value={state.region}
						/>
						<label />
					</div>

					<input
						type="text"
						name="address"
						placeholder="Street, road, city of infection"
						onChange={updateState}
						value={state.address}
					/>
					<label />

					<input
						type="text"
						name="lat"
						placeholder="Latitude EX: -127.332111"
						onChange={updateState}
						value={state.lat}
					/>
					<label />

					<input
						type="text"
						name="lng"
						placeholder="Longtitude EX: +127.332111"
						onChange={updateState}
						value={state.lng}
					/>
					<label />

					<input
						type="number"
						name="amount"
						placeholder="Number of infected"
						onChange={updateState}
						required={true}
						value={state.amount}
					/>
					<label />

					<input
						name="source"
						type="text"
						placeholder="Link to the source #1 (Youtube, website..)"
						onChange={updateState}
						value={state.source}
					/>
					<label />

					<input
						name="source2"
						type="text"
						placeholder="Link to the source #1 (Youtube, website..)"
						onChange={updateState}
						value={state.source2}
					/>
					<label />

					<textarea
						name="content"
						placeholder="Write about case"
						onChange={updateState}
						value={state.content}
					/>

					<label style={{ marginRight: 10 }}>Status</label>
					<select
						value={state.status}
						onChange={({ target: { value: status } }) =>
							_state((e) => ({ ...e, status }))
						}
					>
						<option value="hidden">Hidden</option>
						<option value="published">Published</option>
					</select>
					<br />
					<label style={{ marginRight: 10 }}>Type</label>

					<select
						value={state.type}
						onChange={({ target: { value: type } }) =>
							_state((e) => ({ ...e, type }))
						}
					>
						<option value="witness">Witness</option>
						<option value="source">Source</option>
						<option value="osource">Of.Source</option>
					</select>
					<br />
					<br />

					<button onClick={submitForm} type="submit">
						Submit
					</button>
				</form>
			</Popup>
		</>
	);
};
