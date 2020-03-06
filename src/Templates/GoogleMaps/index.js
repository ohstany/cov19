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
import countries from "Library/countries.json";
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
			store: { geo = false, markers = [], index },
			setStore
		} = useContext(RootContext) || {};

		// console.log("index", index);

		const [state, _state] = useReducer(reducer, {
			cpos: false,
			latlng: [50.167003, 31.072426],
			zoom: 4,
			activeMarker: null
		});

		const { zoom, latlng } = state;

		useEffect(() => {
			if (geo && (geo.countryCode || geo.country_code)) {
				const cpos = countries.filter(
					c =>
						c.country_code === (geo.countryCode || geo.country_code)
				);

				// console.log("got", geo);

				if (cpos.length) {
					_state({
						cpos: geo.country_code ? cpos : cpos[0],
						zoom: 7,
						latlng: [cpos[0].latlng[0], cpos[0].latlng[1]]
					});
				}
			}
		}, [geo]);

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
					latlng: [lat, lng],
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
				center={{ lat: latlng[0], lng: latlng[1] }}>
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
