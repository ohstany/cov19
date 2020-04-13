import { useContext, useEffect, useState, useCallback, memo } from "react";
import RootContext from "Context";
import { setObjectPath, objectValue, delObjectPath } from "Library";
import { LoaderSmall } from "Templates/Loader";
import "./style.scss";

const Country = memo(
	({ data, save, createField, checkRss }) => {
		const path = data.code;

		const [ch, _ch] = useState(false);

		const regions = Object.keys(data.regions);

		return (
			<div className="cn-block">
				<h5>
					{data.name} [{data.code}]
				</h5>
				<div className="editv">
					<b>Latitude</b>
					<input
						path={`${path}.lat`}
						defaultValue={data.lat || ""}
						op="int"
						onBlur={save}
					/>
				</div>
				<div className="editv">
					<b>Longtitude</b>
					<input
						path={`${path}.lng`}
						defaultValue={data.lng || ""}
						op="int"
						onBlur={save}
					/>
				</div>
				<div className="editv">
					<b>Capital</b>
					<input
						path={`${path}.capital`}
						defaultValue={data.capital || ""}
						onBlur={save}
					/>
				</div>
				<div className="editv">
					<b>TimeZone</b>
					<input
						path={`${path}.tz`}
						defaultValue={data.tz || ""}
						onBlur={save}
					/>
				</div>

				<div className="editv">
					<b>Use Parser</b>
					<Switch
						op="ch"
						path={`${path}.use`}
						value={data.use || false}
						onChange={(e) => save(e, false, { use: true })}
					/>
					<br />

					<b>Parser</b>
					{(data.parser || []).map((p, px) => {
						return (
							<div key={px} className="sblock">
								<div>
									<span>#{px + 1}</span>
									<span
										className="cdel"
										onClick={() =>
											createField(
												`${path}.parser.${px}`,
												"",
												"delete"
											)
										}
									>
										Delete
									</span>
								</div>

								<input
									path={`${path}.parser.${px}`}
									placeholder="Url"
									defaultValue={p || ""}
									onBlur={(e) => save(e, `${path}.parser`)}
								/>
							</div>
						);
					})}

					<div
						className="additem"
						onClick={() => createField(`${path}.parser`, "")}
					>
						<span>+</span>
					</div>
				</div>

				<div className="editv">
					<b>RSS</b>
					{(data.rss || []).map((p, px) => {
						return (
							<div key={px} className="sblock">
								<div>
									<span
										className={
											"uactive " +
											(p.check ? "act" : "non")
										}
									></span>
									<span>#{px + 1}</span>
									<button
										className={
											"check" + (p.check ? " ok" : "")
										}
										disabled={ch}
										onClick={() => {
                                 console.log("SSS", p, data);
											if (
												p.value &&
												data.parser &&
												data.parser[0]
											) {
												_ch(true);
												checkRss(
													`${path}.rss`,
													px,
													data.parser[0]
												).then(() => _ch(false));
											}
										}}
									>
										{p.check ? "Again" : "Check"}
									</button>
									{ch && (
										<LoaderSmall
											width="40px"
											height="40px"
										/>
									)}
									<span
										className="cdel"
										onClick={() =>
											createField(
												`${path}.rss.${px}`,
												"",
												"delete"
											)
										}
									>
										Delete
									</span>
								</div>
								<input
									className="ikk"
									path={`${path}.rss.${px}.key`}
									placeholder="Source"
									defaultValue={p.key || ""}
									onBlur={(e) => save(e, `${path}.rss`)}
								/>
								<input
									className="ivv"
									path={`${path}.rss.${px}.value`}
									placeholder="Url"
									defaultValue={p.value || ""}
									onBlur={(e) => save(e, `${path}.rss`)}
								/>
							</div>
						);
					})}

					<div
						className="additem"
						onClick={() =>
							createField(`${path}.rss`, {
								key: "",
								value: "",
								check: false,
							})
						}
					>
						<span>+</span>
					</div>
				</div>

				<div className="regions">
					<h4>Regions ({regions.length})</h4>
					{data.regions
						? regions.map((r, rx) => {
								const spath = `.regions.${r}`;

								return (
									<div key={rx} className="rg">
										<h5>
											{data.regions[r].name} ({r})
										</h5>
										<div className="editv">
											<b>Latitude</b>
											<input
												path={`${path + spath}.lat`}
												defaultValue={
													data.regions[r].lat || ""
												}
												op="int"
												onBlur={save}
											/>
										</div>
										<div className="editv">
											<b>Longtitude</b>
											<input
												path={`${path + spath}.lng`}
												defaultValue={
													data.regions[r].lng || ""
												}
												op="int"
												onBlur={save}
											/>
										</div>
										<div className="editv">
											<b>Parser</b>
											<input
												path={`${path + spath}.parser`}
												defaultValue={
													data.regions[r].parser || ""
												}
												onBlur={save}
											/>
										</div>
									</div>
								);
						  })
						: ""}
				</div>
			</div>
		);
	},
	(p, n) => p === n
);

const Switch = ({ path = "", op = "", value, onChange }) => (
	<label className="switch">
		<input
			path={path}
			type="checkbox"
			op={op}
			checked={value}
			onChange={onChange}
		/>
		<span className="slider round"></span>
	</label>
);

export default () => {
	const {
		api,
		setStore,
		actioner,
		store: {
			userdata: { ID },
			countries,
		},
	} = useContext(RootContext);

	const { a } = countries;
	// console.log("countries", store);

	const [fil, _fil] = useState("");
	const [usef, _usef] = useState(false);
	const [filtered, _filtered] = useState([]);

	useEffect(() => {
		refreshs();
	}, []);

	useEffect(() => {
		if (usef) {
			doFilter(a);
			_usef(false);
		}
	}, [usef]);

	const refreshs = () => {
		if (!countries.a.length) {
			actioner({
				reduce: "SET_COUNTRIES",
				action: "countries",
				method: "POST",
			}).then(({ countries: { a } }) => {
				if (a) {
					doFilter(a);
				}
			});
		}
	};

	const doFilter = (f) => {
		_filtered(
			Object.keys(f).filter((i) => {
				return ((usef === true &&
					(fil.indexOf(i) >= 0 || f[i].name.search(fil) >= 0)) ||
					usef === false) &&
					[
						"EARTH",
						"ASI",
						"AFR",
						"ANT",
						"AUS",
						"EUR",
						"NAM",
						"SAM",
					].indexOf(i) === -1
					? true
					: false;
			})
		);
	};

	const checkRss = (sr, ix, parser) => {
		const src = `${sr}.${ix}`;
		const sc = objectValue(countries.a, src);

		return api({
			method: "OPTIONS",
			action: "countries",
			params: `action=rssconfirm&rss=${sc.value}&parser=${parser}`,
		}).then((up) => {
			// console.log("rssconfirm", up);
			const modify = {};
			setObjectPath(countries.a, `${src}.check`, up.status);
			setStore({
				countries,
			});

			const update = objectValue(countries.a, sr);

			setObjectPath(modify, sr, update);

         console.log("checked", up, sr, update, modify);
         
			if (up) {
				api({
					method: "UPDATE",
					action: "countries",
					data: {
						locale: Object.keys(modify)[0],
						action: "modify",
						modify,
					},
				}).then((up) => console.log("UPDATED", up));
			}
		});
	};

	const saveCountry = useCallback(
		(e, newPath = false, obj = false) => {
			const id = e.target.getAttribute("path");
			const op = e.target.getAttribute("op");
			const value =
				op && op === "ch"
					? e.target.checked
					: op && op === "int" && e.target.value !== ""
					? parseFloat(e.target.value)
					: e.target.value;
			const modify = {};

			setObjectPath(countries.a, `${id}`, value);

			setStore({
				countries,
			});

			const upValue = newPath ? objectValue(countries.a, newPath) : value;
			setObjectPath(modify, `${newPath || id}`, upValue);
			const locale = Object.keys(modify)[0];
			modify[locale].regions = Object.assign({}, modify[locale].regions);

			if (obj && obj.use) {
				api({
					method: "OPTIONS",
					action: "countries",
					data: {
						locale,
						action: "enable",
						value,
					},
				}).then((r) => console.log("RRR", r));
			}

			return api({
				method: "UPDATE",
				action: "countries",
				data: {
					locale,
					action: "modify",
					modify,
				},
			}).then((up) => console.log("SDAD", up));
		},
		[countries]
	);

	const createField = (path, value, action = "create") => {
		if (!path) return;

		if (!objectValue(countries.a, path)) {
			setObjectPath(countries.a, path, []);
		}

		const index = objectValue(countries.a, path).length;

		if (action === "create") {
			setObjectPath(countries.a, `${path}.${index}`, value);
		} else if (action === "delete") {
			delObjectPath(countries.a, `${path}`);

			const ps = path.split(".");
			const locale = ps[0];
			ps.splice(0, 1);

			if (!isNaN(ps[1])) {
				ps[1] = `[${ps[1]}]`;
			}

			api({
				method: "OPTIONS",
				action: "countries",
				data: {
					locale,
					action: "deletepath",
					path: ps.join(""),
				},
			}).then((up) => {
				console.log("deleted", up);
			});
		}

		setStore({
			countries,
		});
	};

	return (
		<>
			<h1>Countries Settings</h1>

			<div className="a-actions">
				<div className="filter">
					<input
						value={fil}
						placeholder="Country Search EX: Argentina, AR"
						onChange={({ target: { value } }) => _fil(value)}
					/>

					<button disabled={usef} onClick={() => fil && _usef(true)}>
						Filter
					</button>

					<button
						onClick={() => {
							_usef(false);
							_fil("");
							doFilter(a);
						}}
					>
						Clear
					</button>

					{ID && ID === 1 && (
						<>
							<button
								onClick={() => {
									api({
										method: "OPTIONS",
										action: "countries",
										params: `action=parser`,
									}).then((ddd) => {
										console.log("ddd", ddd);
									});
								}}
							>
								TEST CODE
							</button>

							<button
								onClick={() => {
									api({
										method: "OPTIONS",
										action: "countries",
										params: `action=backup`,
									}).then((backup) => {
										console.log("backup", backup);
									});
								}}
							>
								BACKUP SCRIPT
							</button>
						</>
					)}
				</div>
			</div>

			<div className={"cn-cnt content"}>
				{filtered.length ? (
					filtered.map((i, ix) => {
						return (
							<Country
								key={i}
								data={a[i]}
								save={saveCountry}
								createField={createField}
								checkRss={checkRss}
							/>
						);
					})
				) : (
					<LoaderSmall width="40px" height="40px" />
				)}
			</div>
		</>
	);
};
