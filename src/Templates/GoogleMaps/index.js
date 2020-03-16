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
import * as locations from "Library/iso-3166-2-object.js";
import { reducer } from "Library";
import RootContext from "Context";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

// const {
// 	MarkerClusterer
// } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const apiKey = "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk";

const refs = {};

const setRefs = (r, k) => {
	refs[k] = r;
};

const markerSizes = size => {
	if (size >= 10) {
		return 250;
	}
	return size * 10;
};

const MapCover = withScriptjs(
	withGoogleMap(props => {
		const {
			actioner,
			store: { cpos, country_code, region_code, mapMarkers, index },
			setStore
		} = useContext(RootContext) || {};

		const [state, _state] = useReducer(reducer, {
			lat: 50.167003,
			lng: 31.072426,
			zoom: 4,
			activeMarker: null
		});

		const [zoom, _zoom] = useState(4);

		const [mks, _mks] = useState(40);

		const { lat, lng } = state;

		const cMarkers = useMemo(
			() => (country_code ? mapMarkers[country_code] || [] : []),
			[country_code, mapMarkers[country_code]]
		);

		useEffect(() => {
			if (country_code) {
				const cpos = country_code ? locations[country_code] : false;

				if (cpos) {
					let zoom = cpos.zoom || 7;
					let lngs = { lat: cpos.lat, lng: cpos.lng };

					setStore({ cpos });

					_state({
						...lngs
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
								lng: cpos.regions[region_code].lng
						  }
						: {
								lat: cpos.lat,
								lng: cpos.lng
						  }
				);

				setTimeout(() => {
					_zoom((rc && rc.zoom) || 9);
				}, 200);
			}
		}, [region_code, cpos]);

		useEffect(() => {
			actioner({
				reduce: "SET_MAP_MARKERS",
				method: "GET",
				action: "markers",
				params: "country=" + country_code
			});
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
				scaledSize: new google.maps.Size(mks, mks)
			}
		};

		const onMarkerClick = useCallback((pp, country_code, region_code) => {
			_zoom(p => p + 1);
			_zoom(12);
			setStore({ country_code, region_code });
			_mks(markerSizes(refs.map.getZoom()));
		}, []);

		useEffect(() => {
			if (refs.map) {
				setTimeout(() => {
					const s = refs.map.getZoom();
					_mks(markerSizes(s));
				}, 500);
			}
		}, [refs.map]);

		return (
			<GoogleMap
				ref={r => setRefs(r, "map")}
				defaultOptions={styles}
				zoom={zoom}
				onClick={e => {
					// let latitude = e.latLng.lat();
					// let longtitude = e.latLng.lng();
					// console.log("locl", latitude, longtitude, e);
				}}
				onZoomChanged={() => {
					const s = refs.map.getZoom();
					const z = markerSizes(s);
					// console.log("SSS", s, z);
					_mks(z);
				}}
				center={{ lat, lng }}>
				{/* <MarkerClusterer
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
					gridSize={400}> */}
				{cMarkers.map(({ region, locale, infections }, mx) => {
					const cpos = locations[locale];
					const position =
						region && cpos.regions[region]
							? {
									lat: cpos.regions[region].lat,
									lng: cpos.regions[region].lng
							  }
							: {
									lat: cpos.lat,
									lng: cpos.lng
							  };

					return (
						<Marker
							ref={r => setRefs(r, mx)}
							labelClass="labelc"
							onClick={pp => onMarkerClick(pp, locale, region)}
							key={mx}
							animation={google.maps.Animation.DROP}
							{...markerSets}
							label={{
								text: "" + infections,
								color: "white"
							}}
							position={position}
						/>
					);
				})}
				{/* </MarkerClusterer> */}
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
