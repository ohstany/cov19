import { useContext, useEffect, useState, memo, useCallback } from "react";
import { notification } from "Library";
import RootContext from "Context";
import AdminCover from "Layouts/AdminCover";
import Popup from "Library/Popup";
import countries_a from "Library/countries-array.json";
import iso from "Library/iso-3166-2-object.json";

const Content = memo(
	({
		modifyMarker,
		deleteMarker,
		ffg,
		m: {
			ID,
			email,
			date,
			status,
			locale,
			region,
			number,
			latlng,
			address,
			type,
			details: { content, source, source2 } = {},
			meta_data: { country_code, region_code, geo } = {}
		}
	}) => {
		const [s, _s] = useState(false);
		const [block, _block] = useState(false);

		const isodata = locale ? iso[locale] : false;

		const isodata2 = country_code ? iso[country_code] : false;

		const isodata3 = geo.country_code ? iso[geo.country_code] : false;

		return (
			<div className="amko">
				<ul className="amk tbf amk-b">
					<li className="cl">
						<span onClick={() => _s(p => !p)}>{s ? "-" : "+"}</span>
					</li>
					<li className="id">#{ID}</li>
					<li>{email}</li>
					<li>{date}</li>
					<li>{locale ? isodata.name : "~"}</li>
					<li>
						{region && locale && isodata.regions[region]
							? isodata.regions[region].name
							: "~"}
					</li>
					<li>
						{latlng && latlng.length
							? latlng[0] + ", " + latlng[1]
							: "~"}
					</li>
					<li className="id">
						<span className={"b"}>{number}</span>
					</li>
					<li>
						<button
							className={"lget" + (locale ? " got" : "")}
							onClick={() => {
								_block(true);
								if (block === false) {
									ffg(address, ID, "location").then(rr => {
										_block(false);
										notification("Address Fetched");
									});
								}
							}}>
							GET
						</button>
					</li>
					<li>
						<span className={"b " + type}>
							<select
								value={type}
								onChange={({ target: { value } }) => {
									if (value !== type) {
										modifyMarker(
											ID,
											{ type: value },
											locale
										);
									}
								}}>
								<option value="witness">Witness</option>
								<option value="source">Source</option>
							</select>
						</span>
					</li>
					<li className="status">
						<span className={"b " + status}>
							<select
								value={status}
								onChange={({ target: { value } }) => {
									if (value !== status) {
										modifyMarker(
											ID,
											{ status: value },
											locale
										);
									}
								}}>
								<option value="hidden">Hidden</option>
								<option value="published">Publish</option>
							</select>
						</span>
					</li>
				</ul>

				<div className="shownc">
					{s && (
						<div className="innerc">
							<div className="blc">
								<h5># Content</h5>
								<p
									dangerouslySetInnerHTML={{
										__html: content || ""
									}}
								/>
								<br />
								<b>#1 Source</b>
								{source ? (
									<>
										<br />
										<a href={source} target="_blank">
											{source}
										</a>
									</>
								) : (
									"~"
								)}
								<br />
								<b>#2 Source</b>
								{source2 ? (
									<>
										<br />
										<a href={source2} target="_blank">
											{source2}
										</a>
									</>
								) : (
									"~"
								)}
							</div>

							<div className="blc">
								<h5># Address:</h5>
								<p>{address}</p>
							</div>

							<div className="blc">
								<h5># Location</h5>
								<b>Selected</b>
								<br />
								{country_code &&
									`${isodata2.name} (${country_code})`}
								{region_code &&
									country_code &&
									` / ${isodata2.regions[region_code].name} (${region_code})`}

								<br />
								<b>Default</b>
								<br />
								{geo.country_code &&
									`${isodata3.name} (${geo.country_code})`}

								{geo.region_code &&
									geo.country_code &&
									` / ${
										isodata3.regions[geo.region_code].name
									} (${geo.region_code})`}
							</div>

							<div className="blc">
								<h5># Other</h5>
								{`ip: ${geo.ip || "~"}`}
								<br />
								{`lat: ${geo.lat || "~"}, lng: ${geo.lng ||
									"~"}`}
								<button
									className="mkdel"
									onClick={() => deleteMarker(ID, locale)}>
									Delete
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	},
	(p, n) => p === n
);

const initialState = {
	address: "",
	content: "",
	lat: "",
	lng: "",
	locale: "",
	region: "",
	amount: 0,
	source: "",
	source2: "",
	type: "witness",
	status: "hidden"
};

const CountrySelect = ({ controlled = true, value, onUpdate }) => {
	return (
		<select
			value={value}
			onChange={({ target: { value } }) => onUpdate(value)}>
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
			onChange={({ target: { value } }) => onUpdate(value)}>
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
		actioner,
		store: { geo, markers }
	} = useContext(RootContext);

	const [byc, _byc] = useState("all");
	const [refr, _refr] = useState(false);
	const [popup, _popup] = useState(false);
	const [state, _state] = useState(initialState);

	console.log("state", state);

	const marks =
		markers && markers[byc]
			? markers[byc]
			: byc === "all"
			? Object.keys(markers).reduce((p, n) => [...p, ...markers[n]], [])
			: [];

	const updateState = useCallback(e => {
		const {
			target: { value }
		} = e;
		const name = e.target.getAttribute("name");

		_state(e => {
			return {
				...e,
				[name]: value
			};
		});
	}, []);

	const refreshs = () => {
		_refr(true);
		actioner({
			reduce: "SET_MARKERS_ADMIN",
			action: "markers",
			method: "POST"
		}).then(() => {
			_refr(false);
		});
	};

	useEffect(() => {
		refreshs();
	}, []);

	const modifyMarker = useCallback(
		(ID, modify, locale) => {
			actioner({
				reduce: "MODIFY_MARKER",
				method: "UPDATE",
				action: "markers",
				data: {
					action: "modify",
					locale,
					modify,
					ID
				}
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
					locale,
					ID
				}
			});
		},
		[markers]
	);

	const submitForm = e => {
		e.preventDefault();
		e.stopPropagation();

		if (["locale", "region"].some(i => !state[i])) {
			alert("Please, fill out all required fields.");
		} else {
			actioner({
				reduce: "ADD_MARKER",
				method: "POST",
				action: "report",
				data: {
					state,
					location: {
						geo
					}
				}
			}).then(() => {
				notification("Marker Added");
			});
		}
	};

	const ffg = useCallback(
		(address, ID, action) => {
			return fetch(
				"https://maps.googleapis.com/maps/api/geocode/json?address=" +
					encodeURIComponent(address) +
					"&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk&language=en"
			)
				.then(res => res.json())
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
								i => city && regions[i].name.indexOf(city) >= 0
							) || "";

						const address = {
							region,
							locale,
							latlng: [
								geometry.location.lat,
								geometry.location.lng
							],
							meta_data: {
								address_components,
								formatted_address,
								viewport: geometry.viewport
							}
						};

						console.log("reres", address);

						return actioner({
							reduce: "UPDATE_LOCATION",
							method: "UPDATE",
							action: "markers",
							data: {
								action,
								address,
								ID
							}
						});
					} else {
						alert("Could not find country code");
					}
				});
		},
		[markers]
	);

	return (
		<AdminCover>
			<h1>Markers</h1>

			<button
				style={{
					width: 100,
					background: "#056dc6",
					marginRight: 20
				}}
				onClick={() => _popup(e => !e)}>
				+ Add new
			</button>

			<button
				style={{
					width: 110,
					float: "right",
					marginTop: -10
				}}
				disabled={refr}
				onClick={() => {
					if (!refr) {
						refreshs();
					}
				}}>
				{refr ? "Refreshing..." : "Refresh"}
			</button>

			<CountrySelect value={byc} onUpdate={_byc} />

			<div className="content">
				<div className="amarkers">
					<ul className="amk tbf amk-h">
						<li className="cl"></li>
						<li className="id">ID</li>
						<li>Email</li>
						<li>Submited</li>
						<li>Locale</li>
						<li>Region</li>
						<li>LatLng</li>
						<li className="id">Number</li>
						<li>Get GEO</li>
						<li>Type</li>
						<li className="status">Status</li>
					</ul>
					{marks.length
						? marks.map((m, mx) => {
								return (
									<Content
										m={m}
										key={mx}
										ffg={ffg}
										modifyMarker={modifyMarker}
										deleteMarker={deleteMarker}
									/>
								);
						  })
						: "No markers"}
				</div>
			</div>
			<Popup visible={popup} onClose={() => _popup(e => !e)}>
				<h2>Input Fields Below</h2>
				<form>
					<div className="selinp">
						<CountrySelect
							controlled={false}
							value={state.locale}
							onUpdate={value =>
								_state(e => ({
									...e,
									locale: value,
									region: ""
								}))
							}
						/>
						<input
							type="text"
							name="locale"
							placeholder="Country Code EX: UK"
							required={true}
							onChange={({ target: { value } }) =>
								_state(p => ({
									...p,
									locale: value ? value.toUpperCase() : ""
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
							onUpdate={value =>
								_state(e => ({ ...e, region: value }))
							}
						/>
						<input
							type="text"
							name="region"
							placeholder="Country region EX: 12"
							required={true}
							onChange={({ target: { value } }) =>
								_state(p => ({
									...p,
									region: value ? value.toUpperCase() : ""
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
						required={true}
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
						onChange={({ target: { value } }) =>
							_state(e => ({ ...e, status: value }))
						}>
						<option value="hidden">Hidden</option>
						<option value="published">Published</option>
					</select>
					<br />
					<br />

					<button onClick={submitForm} type="submit">
						Submit
					</button>
				</form>
			</Popup>
		</AdminCover>
	);
};
