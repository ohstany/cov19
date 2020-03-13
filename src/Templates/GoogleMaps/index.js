import React, {
	useCallback,
	useContext,
	useEffect,
	useReducer,
	memo,
	useState
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
			store: {
				country_code: cc,
				region_code: rc,
				cpos,
				geo = false,
				markers: { a: markers, loaded },
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

		useEffect(() => {
			if (cc) {
				const cpos = locations[cc];

				if (cpos) {
					let zoom = cpos.zoom || 7;
					let lngs = { lat: cpos.lat, lng: cpos.lng };

					setStore({ cpos });

					console.log("COUNTRY", cc, cpos);

					_state({
						...lngs
					});

					_zoom(zoom);
				}
			}
		}, [cc]);

		useEffect(() => {
			if (rc && cpos) {
				if (cpos) {
					if (rc && cpos.regions[rc]) {
						console.log("REGION", rc, cc, cpos);

						_zoom(p => p - 1);

						_state({
							lat: cpos.regions[rc].lat,
							lng: cpos.regions[rc].lng
						});

						setTimeout(() => {
							_zoom(cpos.regions[rc].zoom || 9);
						}, 200);
					}
				}
			}
		}, [rc, cpos]);

		// initialize position from geo
		useEffect(() => {
			if (geo && country_code !== undefined) {
				setStore({ region_code, country_code });
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
