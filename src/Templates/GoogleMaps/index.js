import React, {
	useCallback,
	useContext,
	useEffect,
	useReducer,
	memo,
	useState,
	useMemo
} from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import markerImg from "./m.png";
import styles from "./mapStyling.json";
import locations from "Library/iso-3166-2-object.m.json";
import { reducer } from "Library";
import RootContext from "Context";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const {
	MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const apiKey = "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk";

const defsize = 40;

const refs = {};

const setRefs = (r, k) => {
	refs[k] = r;
};

const MapCover = withScriptjs(
	withGoogleMap(props => {
		const {
			api,
			store: {
				country_code: cc,
				region_code: rc,
				geo = false,
				mk,
				index
			},
			setStore
		} = useContext(RootContext) || {};

		const [state, _state] = useReducer(reducer, {
			lat: 50.167003,
			lng: 31.072426,
			zoom: 4,
			activeMarker: null
		});

		const [zoom, _zoom] = useState(4);

		const { lat, lng } = state;

		const { country_code = false, region_code = false } = geo || {};

		const localData = useMemo(() => (cc ? locations[cc] : false), [cc]);

		const cMarkers = useMemo(() =>
			cc && mk[cc]
				? mk[cc].reduce((p, n) => {
						n.position =
							n.region && localData.regions[n.region]
								? [
										localData.regions[n.region].lat,
										localData.regions[n.region].lng
								  ]
								: [localData.lat, localData.lng];

						if (n.region) {
							if (!p[n.region]) p[n.region] = [];

							p[n.region].push(n);
						} else {
							if (!p["country"]) p["country"] = [];

							p.country.push(n);
						}
						return Object.assign({}, p);
				  }, {})
				: []
		);

		console.log("cMarkers", cc, cMarkers, localData, mk);

		useEffect(() => {
			if (cc) {
				if (localData) {
					let zoom = localData.zoom || 7;
					let lngs = { lat: localData.lat, lng: localData.lng };

					setStore({ cpos: localData });

					// console.log("COUNTRY", cc, localData);

					_state({
						...lngs
					});

					_zoom(zoom);
				}
			}
		}, [cc]);

		useEffect(() => {
			if (rc && localData) {
				if (localData) {
					if (rc && localData.regions[rc]) {
						// console.log("REGION", rc, cc, cpos);

						_zoom(p => p - 1);

						_state({
							lat: localData.regions[rc].lat,
							lng: localData.regions[rc].lng
						});

						setTimeout(() => {
							_zoom(localData.regions[rc].zoom || 9);
						}, 200);
					}
				}
			}
		}, [rc, localData]);

		// initialize position from geo
		useEffect(() => {
			if (geo && country_code !== undefined) {
				setStore({ region_code, country_code });
			}
		}, [geo]);

		useEffect(() => {
			if (country_code) {
				api({
					method: "GET",
					action: "markers",
					params: "country=" + country_code
				}).then(markers => {
					console.log("SDAD");
					mk[country_code] = markers;
					setStore({
						mk
					});
				});
			}
		}, [country_code]);

		useEffect(() => {
			if (refs.mapArea) {
				setStore({ mapRef: refs.mapArea });
			}
		}, [1]);

		useEffect(() => {
			if (index >= 0) {
				const {
					props: {
						position: { lat, lng }
					}
				} = refs[index];

				_zoom(10);

				_zoom(15);

				_state({
					lat,
					lng
				});
			}
		}, [index]);

		const markerSets = {
			icon: {
				url: markerImg,
				scaledSize: new google.maps.Size(defsize, defsize)
			}
		};

		const onMarkerClick = useCallback((pp, ccod, reg) => {
			_zoom(12);
			setStore({ country_code: reg, country_region: ccod });
		}, []);

		return (
			<GoogleMap
				ref={r => setRefs(r, "map")}
				defaultOptions={styles}
				zoom={zoom}
				onClick={e => {
					let latitude = e.latLng.lat();
					let longtitude = e.latLng.lng();
					console.log("locl", latitude, longtitude, e);
				}}
				center={{ lat, lng }}>
				<MarkerClusterer
					clusterClass="marks"
					styles={[
						{
							textColor: "white",
							url: markerImg,
							height: 120,
							width: 120
						},
						{
							textColor: "white",
							url: markerImg,
							height: 120,
							width: 120
						},
						{
							textColor: "white",
							url: markerImg,
							height: 120,
							width: 120
						}
					]}
					averageCenter
					enableRetinaIcons
					gridSize={120}>
					{Object.keys(cMarkers).map((m, mx) => {
						const position =
							cMarkers[m] &&
							cMarkers[m][0] &&
							cMarkers[m][0].position
								? {
										lat: cMarkers[m][0].position[0],
										lng: cMarkers[m][0].position[1]
								  }
								: {
										lat: localData.lat,
										lng: localData.lng
								  };

						return (
							<Marker
								ref={r => setRefs(r, mx)}
								labelClass="labelc"
								onClick={pp =>
									onMarkerClick(pp, m, cMarkers[m][0].locale)
								}
								key={mx}
								animation={google.maps.Animation.DROP}
								{...markerSets}
								label={{
									text: "" + cMarkers[m].length,
									color: "white"
								}}
								position={position}
							/>
						);
					})}
				</MarkerClusterer>
			</GoogleMap>
		);
	})
);

export default memo(props => {
	return (
		<MapCover
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places&language=${props.language}`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={
				<section ref={r => setRefs(r, "mapArea")} className="mapArea" />
			}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	);
});
