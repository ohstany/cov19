import React, {
	useState,
	memo,
	useEffect,
	useContext,
	useCallback
} from "react";
import XLSX from "xlsx";
import templates from "./template";
import objectPath from "object-path";
import RootContext from "Context";
import { swapKeyValue, notification } from "Library";
import { condition, sources, via } from "Library/statuses";
import Drawer from "Templates/Drawer";
import Upload from "./Upload";
import "./style.scss";

const joinedString = {
	...condition,
	...sources,
	...via
};

export const AllowedUpload = ["xlsx", "xlsb", "xlsm", "xls"]
	.map(function(x) {
		return "." + x;
	})
	.join(",");

const exelImg = require("./exel.png");

export default memo(
	({
		type,
		onFinish = false,
		uploadLimit = 50000000,
		buttonText = "EXEL",
		cname,
		uploaded = false,
		country_code
	}) => {
		const { api } = useContext(RootContext);
		const [state, setState] = useState({
			data: [],
			converted: undefined
		});

		const [loading, _loading] = useState(false);

		const [showExel, _showExel] = useState(false);

		const [exels, _exels] = useState([]);

		const [uploadType, _uploadType] = useState(true);

		useEffect(() => {
			type &&
				api({
					method: "GET",
					action: "exel",
					params: "type=" + type
				}).then(res => {
					_exels(res);
				});

			_uploadType(
				window
					? window.localStorage.getItem("uploadType")
						? JSON.parse(window.localStorage.getItem("uploadType"))
						: uploadType
					: uploadType
			);
		}, []);

		const doUpload = useCallback(() => {
			if (state.converted) {
				_loading(true);

				if (type) {
					api({
						method: "POST",
						action: "exel",
						params:
							"type=" +
							type +
							"&filename=" +
							state.converted.name,
						data: {
							import: state.converted.templated
						}
					}).then(ret => {
						const {
							imported = false,
							action,
							exel_inserted,
							custom_message = ""
						} = ret || {};

						if (imported) {
							if (action === "insert" || action === "update") {
								if (action === "insert") {
									const ex = exels ? exels : [];
									ex.unshift(exel_inserted);
									_exels(ex);
								}
								setState({
									...state,
									file: undefined,
									data: [],
									converted: undefined
								});
							}

							onFinish && onFinish();

							notification(
								<>
									<h2>Exel Upload Success</h2>
									<p>{`Successfully Uploaded.${custom_message}`}</p>
								</>,
								30000
							);
						} else {
							notification(
								<>
									<h2>Exel Upload Fail</h2>
									<p>{custom_message || "Contact Admin."}</p>
								</>,
								30000
							);
						}
						_loading(false);
					});
				}
			}
		}, [state.converted]);

		const beforeUpload = useCallback(file => {
			var ext = /^.+\.([^.]+)$/.exec(file.name);
			ext = ext == null ? "" : ext[1];
			if (AllowedUpload.indexOf(ext) < 0) {
				notification("Allowed upload file type: " + AllowedUpload);
			} else if (file.size > uploadLimit) {
				notification(
					"File Upload Limit: " + uploadLimit / 1000000 + "MB"
				);
			} else {
				const reader = new FileReader();
				const rABS = !!reader.readAsBinaryString;

				reader.onload = e => {
					const bstr = e.target.result;
					const wb = XLSX.read(bstr, {
						type: rABS ? "binary" : "array",
						bookVBA: true
					});
					const wsname = wb.SheetNames[0];
					const ws = wb.Sheets[wsname];

					const data = XLSX.utils.sheet_to_json(ws);
					const keys = Object.keys(data[0]);
					const template = templates[type];
					const templated = [];

					data.map((exl_data, dx) => {
						if (!templated[dx]) templated[dx] = {};

						Object.keys(exl_data).map(exl_colname => {
							if (
								Object.keys(template).includes(exl_colname) &&
								exl_colname !== "№"
							) {
								const path = template[exl_colname].path;

								let value = template[exl_colname].select
									? template[exl_colname].select[
											exl_data[exl_colname]
									  ]
										? template[exl_colname].select[
												exl_data[exl_colname]
										  ]
										: Object.values(
												template[exl_colname].select
										  )[0]
									: exl_data[exl_colname];

								if (template[exl_colname].type === "array") {
									value = value.replace(/\s/g, "").split(",");
								} else if (
									["boolean", "booleanNumber"].indexOf(
										template[exl_colname].type
									) >= 0
								) {
									value = booleanChoicesToJson(
										template[exl_colname].type,
										value
									);
								}

								objectPath.set(
									templated[dx],
									path,
									value || ""
								);

								if (path === "latlng") {
									const pr = (
										"" + templated[dx][path]
									).replace(/\s/g, "");

									templated[dx][path] = pr
										? pr
												.split(",")
												.map(tg => parseFloat(tg))
										: "";
								}
							}
						});
					});

					templated.length > 0 &&
						setState({
							converted: {
								templated,
								data,
								name: file.name,
								size: file.size
							},
							keys
						});

					templated.length <= 0 &&
						notification(
							<>
								<h2>Upload Issue</h2>
								<p>{`Type Error.${
									swapKeyValue(template["Data Type"].select)[
										type
									]
								}`}</p>
							</>,
							3000
						);
				};

				if (rABS) {
					reader.readAsBinaryString(file);
				} else {
					reader.readAsArrayBuffer(file);
				}
			}
		}, []);

		return (
			<>
				<button
					style={{ margin: "0 10px" }}
					onClick={() => _showExel(true)}
				>
					{buttonText}
				</button>
				<div className="exeluploads">
					<Drawer
						width={"600px"}
						position="right"
						onClose={() => _showExel(false)}
						visible={showExel}
					>
						{type ? (
							<div style={{ lineHeight: "normal" }}>
								<div className="lg9">
									<Upload
										uploaded={uploaded}
										name="file"
										accept={AllowedUpload}
										className="exel-uploader"
										beforeUpload={beforeUpload}
									>
										<div>
											{state.converted ? (
												<img
													src={exelImg}
													style={{ width: "100%" }}
												/>
											) : (
												<></>
											)}

											{state.converted && (
												<>
													<div className="uplf">
														{state.converted.name}
														<button
															style={{
																width: "100%",
																margin: 0,
																marginTop: 4
															}}
															type="primary"
															disabled={loading}
															onClick={e => {
																e.stopPropagation();
																doUpload();
															}}
														>
															Register
														</button>
													</div>
												</>
											)}
										</div>
									</Upload>
								</div>
								<div className="lg15">
									<h2
										style={{
											fontSize: 20,
											paddingBottom: 10
										}}
									>
										Exel File Upload
									</h2>
									<ul>
										<li>
											Allowed Formats:{" "}
											<b>{AllowedUpload}</b>
										</li>
										<li>
											Size Limit:{" "}
											<b>{uploadLimit / 1000000}MB</b>
										</li>
										<li
											style={{
												fontWeight: "bold",
												color: "#e64234"
											}}
										>
											TEMPLATE:{" "}
											<b>
												<button
													onClick={() => {
														const json = [
															build_Cmodules(
																{
																	"№": 1
																},
																templates[type],
																true
															)
														];

														exportAsExcelFile({
															json,
															filename:
																"template.xlsx",
															db: templates[type]
														});
													}}
												>
													Download
												</button>
											</b>
										</li>
										<li
											style={{
												fontWeight: "bold",
												color: "#e64234"
											}}
										>
											EXPORT ({cname ? cname : "ALL"})
											<button
												onClick={() =>
													exportItemsToExel(
														api,
														type,
														"all",
														type + ".xlsx",
														country_code
													)
												}
											>
												Download
											</button>
										</li>
									</ul>
								</div>
								<div className="uploadedFiles">
									{exels instanceof Array &&
										exels.map((f, x) => (
											<div className="uplf" key={x}>
												<img src={exelImg} />
												<span className="filename">
													{f.title}
												</span>
												<span
													style={{
														fontSize: 11,
														color: "#acacac"
													}}
												>
													{f.create_date}
												</span>

												{f.meta_data && (
													<button
														type="primary"
														style={{
															float: "right",
															background:
																"#50a563",
															marginRight: 5,
															borderColor:
																"#348f49"
														}}
														onClick={() =>
															exportItemsToExel(
																api,
																type,
																f.meta_data,
																f.title,
																false
															)
														}
													>
														View Result
													</button>
												)}
											</div>
										))}
								</div>
							</div>
						) : (
							`Please, provide Data Type via props EX: type="course"`
						)}
					</Drawer>
				</div>
			</>
		);
	}
);

const exportItemsToExel = (api, type, ids, filename, country_code) => {
	api({
		method: "OPTIONS",
		action: "exel",
		data: {
			ids: typeof ids === "object" ? ids.join(",") : ids,
			type,
			country_code
		}
	}).then(res => {
		if (res) {
			const json = res.map((d, o) => {
				const cdata = d.metadata
					? Object.assign({}, d.metadata)
					: false;

				if (cdata) {
					delete d.metadata;
					delete d.meta_data;
				}

				return build_Cmodules(
					{
						"№": o + 1,
						...d,
						...(cdata || {})
					},
					templates[type]
				);
			});

			exportAsExcelFile({
				json,
				filename,
				db: templates[type]
			});
		} else {
			notification(
				<>
					<h2>Exel Export Fail</h2>
					<p>Check data type</p>
				</>,
				3000
			);
		}
	});
};

const booleanChoicesToExel = {
	boolean: {
		Y: "Y",
		y: "Y",
		N: "N",
		n: "N",
		TRUE: "Y",
		true: "Y",
		FALSE: "N",
		false: "N"
	},
	booleanNumber: {
		"1": "Y",
		Y: "Y",
		"0": "N",
		N: "N"
	}
};

const booleanChoicesToJson = (type, value) => {
	switch (type) {
		case "boolean":
			return ["Y", "y", "TRUE", "true"].indexOf(value) >= 0;
		case "booleanNumber":
			return ["1", "y", "Y", "TRUE", "true"].indexOf(value) >= 0
				? "1"
				: "0";
		default:
			return false;
	}
};

// when exportting to EXEL format
const build_Cmodules = (db, ttype, sample = false) => {
	const typeKeys = Object.keys(ttype);

	const reduced = typeKeys.reduce((prev, next) => {
		let value = false;

		const obj_g = objectPath.get(db, ttype[next].path);

		if (["status"].includes(ttype[next].path)) {
			// translate to korea from strings
			value = {
				[next]: sample
					? ttype[next].sample
					: joinedString[obj_g] || obj_g || ""
			};
		} else if (ttype[next].path === "latlng") {
			value = {
				[next]: Object.values(
					sample
						? ttype[next].sample
						: db[ttype[next].path]
						? db[ttype[next].path]
						: []
				).join(",")
			};
		} else if (ttype[next].skip) {
			value = {};
		} else if (next === "№") {
			value = {
				[next]: db[next]
			};
		} else if (["region", "number"].includes(ttype[next].path)) {
			value = {
				[next]: sample
					? ttype[next].sample + ""
					: db[ttype[next].path] + ""
			};
		} else {
			if (sample) {
				value =
					ttype[next].sample === undefined
						? {}
						: {
								[next]: ttype[next].sample
						  };
			} else {
				const columnType = ttype[next].type || "default";

				value =
					obj_g && columnType === "default"
						? {
								[next]: ttype[next].select
									? swapKeyValue(ttype[next].select)[obj_g]
									: obj_g
						  }
						: columnType === "array"
						? {
								[next]: (obj_g || []).join(",")
						  }
						: ["boolean", "booleanNumber"].indexOf(columnType) >= 0
						? {
								[next]:
									booleanChoicesToExel[columnType][obj_g] ||
									"N"
						  }
						: {};
			}
		}

		if (!value[next] && ttype[next].defaultValue !== undefined) {
			value[next] = ttype[next].defaultValue;
		}

		return Object.assign({}, prev, value);
	}, {});

	return reduced;
};

const exportAsExcelFile = ({ json, filename, db = false }) => {
	var worksheet = XLSX.utils.json_to_sheet(json);
	var workbook = { SheetNames: ["sheet"], Sheets: { sheet: worksheet } };
	Object.keys(workbook.Sheets.sheet).map((k, x) => {
		if (k !== "!ref" && workbook.Sheets.sheet[k].t !== "n") {
			workbook.Sheets.sheet[k].z = "@";
			if (
				db &&
				workbook.Sheets.sheet[k].v &&
				db[workbook.Sheets.sheet[k].v] &&
				(db[workbook.Sheets.sheet[k].v].select ||
					["booleanNumber", "boolean"].indexOf(
						db[workbook.Sheets.sheet[k].v].type
					) >= 0)
			) {
				workbook.Sheets.sheet[k].c = [];
				workbook.Sheets.sheet[k].c.hidden = true;

				workbook.Sheets.sheet[k].c.push({
					a: "Can Use Keywords",
					t: Object.keys(
						db[workbook.Sheets.sheet[k].v].type &&
							["boolean", "booleanNumber"].indexOf(
								db[workbook.Sheets.sheet[k].v].type
							) >= 0
							? {
									[next]:
										booleanChoicesToExel[
											db[workbook.Sheets.sheet[k].v].type
										] || "N"
							  }
							: db[workbook.Sheets.sheet[k].v].select
					).join(", ")
				});
			}
		}
	});
	XLSX.writeFile(workbook, filename);
};
