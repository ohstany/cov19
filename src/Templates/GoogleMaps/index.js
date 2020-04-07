import React, {
	useCallback,
	useContext,
	useEffect,
	useReducer,
	memo,
	useState,
} from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import markerImg from "./m2.png";
import styles from "./mapStyling.json";
import { reducer, numComma, CountryName, CityName } from "Library";
import RootContext from "Context";
import {
	withScriptjs,
	withGoogleMap,
	InfoWindow,
	GoogleMap,
	Marker,
} from "react-google-maps";
import { condition } from "Library/statuses.js";
import { withTranslation } from "i18n";

let locations = null;

if (!locations) {
	import("Library/iso-3166-2-object.js").then((i) => (locations = i));
}

// const {
// 	MarkerClusterer
// } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const apiKey = "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk";

const refs = {};

const setRefs = (r, k) => {
	refs[k] = r;
};

const markerSizes = (size) => {
	const s = size * 10;
	return s - (size >= 3 ? 20 : 0);
};

const MapCover = withTranslation("common")(
	withScriptjs(
		withGoogleMap(({ t }) => {
			const {
				actioner,
				store: { cpos, country_code, region_code, mapMarkers, index },
				setStore,
			} = useContext(RootContext) || {};

			const [state, _state] = useReducer(reducer, {
				lat: 50.167003,
				lng: 31.072426,
				zoom: 4,
				activeMarker: null,
			});

			const [zoom, _zoom] = useState(4);

			const [mks, _mks] = useState(40);

			const [open, _open] = useState({});

			const { lat, lng } = state;

			const markerSets = {
				icon: {
					url: markerImg,
					scaledSize: new google.maps.Size(mks, mks),
				},
			};

			useEffect(() => {
				if (country_code) {
					const cpos = country_code ? locations[country_code] : false;

					if (cpos) {
						let zoom = cpos.zoom || 7;
						let lngs = { lat: cpos.lat, lng: cpos.lng };

						setStore({ cpos });

						_state({
							...lngs,
						});

						_zoom(zoom);
					}
				}
			}, [country_code]);

			useEffect(() => {
				if (cpos) {
					const rc = region_code && cpos.regions[region_code];

					_state(
						rc
							? {
									lat: cpos.regions[region_code].lat,
									lng: cpos.regions[region_code].lng,
							  }
							: {
									lat: cpos.lat,
									lng: cpos.lng,
							  }
					);

					_zoom((p) => p - 1);

					setTimeout(() => {
						_zoom((rc && rc.zoom) || 9);
					}, 100);
				}
			}, [region_code, cpos]);

			useEffect(() => {
				actioner({
					reduce: "SET_MAP_MARKERS",
					method: "GET",
					action: "markers",
				});
			}, []);

			useEffect(() => {
				if (refs.mapArea) {
					setStore({ mapRef: refs.mapArea });
				}
			}, [1]);

			const onMarkerClick = useCallback(
				(pp, country_code, region_code) => {
					setStore({ country_code, region_code });
					_mks(markerSizes(refs.map.getZoom()));
				},
				[]
			);

			useEffect(() => {
				if (refs.map) {
					setTimeout(() => {
						if (!refs.map) {
							return;
						}
						const s = refs.map.getZoom();
						_mks(markerSizes(s));
					}, 500);
				}
			}, [refs.map]);

			return (
				<GoogleMap
					ref={(r) => setRefs(r, "map")}
					defaultOptions={styles}
					zoom={zoom}
					onClick={(e) => {
						// let latitude = e.latLng.lat();
						// let longtitude = e.latLng.lng();
						// console.log("locl", latitude, longtitude, e);
					}}
					onZoomChanged={() => {
						if (!refs.map) {
							return;
						}
						const s = refs.map.getZoom();
						const z = markerSizes(s);
						if (s <= 5) {
							_open({});
						}
						_mks(z);
					}}
					center={{ lat, lng }}
				>
					{mapMarkers.map((value, mx) => {
						const { region, locale, infections } = value;

						const cpos = locations[locale];
						const position =
							region && cpos.regions[region]
								? {
										lat: cpos.regions[region].lat,
										lng: cpos.regions[region].lng,
								  }
								: {
										lat: cpos.lat,
										lng: cpos.lng,
								  };

						return (
							<Marker
								ref={(r) => setRefs(r, mx)}
								labelClass="labelc"
								onClick={(pp) => {
									_open((p) => {
										p[mx] = true;
										return p;
									});
									onMarkerClick(pp, locale, region);
								}}
								key={mx}
								animation={google.maps.Animation.DROP}
								{...markerSets}
								position={position}
							>
								{open[mx] && (
									<InfoWindow>
										<div className="infw">
											<span
												className="close"
												onClick={() => {
													_open((p) => {
														p[mx] = !p[mx];
														return { ...p };
													});
												}}
											>
												<img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" />
											</span>
											<div className="stat all">
												<div className="cc">
													<CountryName
														value={cpos.name}
													/>
													<CityName
														value={
															cpos.regions &&
															cpos.regions[region]
																? cpos.regions[
																		region
																  ].name
																: false
														}
													/>
												</div>
												<div className="hd">
													{t("allcases") + ": "}
													<b>
														{numComma(infections)}
													</b>
												</div>
												<ul className="bd">
													{[
														"infected",
														"cured",
														"mortal",
													].map((k, ki) => {
														return k !== "none" ? (
															<li key={ki}>
																<span
																	className={`cond ${k}`}
																>
																	<b
																		className={`b circ ${k}`}
																	></b>
																	{" " +
																		t(
																			condition[
																				k
																			]
																		)}
																</span>
																{numComma(
																	value[k]
																)}
															</li>
														) : (
															""
														);
													})}
												</ul>
											</div>
										</div>
									</InfoWindow>
								)}
							</Marker>
						);
					})}
				</GoogleMap>
			);
		})
	)
);

export default memo((props) => {
	return (
		<MapCover
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places&language=${props.language}`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={
				<section
					ref={(r) => setRefs(r, "mapArea")}
					className="mapArea"
				/>
			}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	);
});
