import React, {
	useCallback,
	useContext,
	useEffect,
	useReducer,
	memo
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

const defsize = 20;

const refs = {};

const setRefs = (r, k) => {
	refs[k] = r;
};

const MapCover = withScriptjs(
	withGoogleMap(props => {
		const {
			api,
			store,
			store: {
				geo = false,
				markers: { a: markers, loaded },
				index
			},
			setStore
		} = useContext(RootContext) || {};

		// console.log("store", store);

		const [state, _state] = useReducer(reducer, {
			cpos: false,
			latlng: [50.167003, 31.072426],
			zoom: 4,
			activeMarker: null
		});

		const { zoom, lat, lng } = state;

		useEffect(() => {
			if (geo && (geo.countryCode || geo.country_code)) {
				const c_code = geo.countryCode || geo.country_code;
				const r_code = geo.regionCode || geo.region_code;
				const cpos = locations[c_code];

				if (cpos) {
					let zoom = 7;
					let lngs = { lat: cpos.lat, lng: cpos.lng };

					if (r_code && cpos.regions[r_code]) {
						zoom = 9;
						lngs = {
							lat: cpos.regions[r_code].lat,
							lng: cpos.regions[r_code].lng
						};
					}

					_state({
						cpos,
						zoom,
						...lngs
					});
				}
			}
		}, [geo]);

		useEffect(() => {
			if (!loaded) {
				api({
					method: "GET",
					action: "markers"
				}).then(markers => {
					setStore({
						markers: {
							a: markers || [],
							loaded: true
						}
					});
				});
			}
		}, []);

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

				_state({ zoom: 10 });
				_state({
					lat,
					lng,
					zoom: 15
				});
			}
		}, [index]);

		const markerSets = {
			icon: {
				url: markerImg,
				scaledSize: new google.maps.Size(defsize, defsize)
			}
		};

		const onMarkerClick = useCallback((pp, index) => {
			setStore({ index });
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
							height: 50,
							width: 50
						},
						{
							textColor: "white",
							url: markerImg,
							height: 50,
							width: 50
						},
						{
							textColor: "white",
							url: markerImg,
							height: 50,
							width: 50
						}
					]}
					averageCenter
					enableRetinaIcons
					gridSize={80}>
					{markers.map((m, mx) => (
						<Marker
							ref={r => setRefs(r, mx)}
							labelClass="labelc"
							onClick={(pp, mr) => onMarkerClick(pp, mx)}
							key={mx}
							animation={google.maps.Animation.DROP}
							{...markerSets}
							position={m.position}
							// {...m}
						/>
					))}
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
