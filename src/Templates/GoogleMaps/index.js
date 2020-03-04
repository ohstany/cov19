import React, { useCallback, useEffect, useReducer } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import markerImg from "./m.png";
import styles from "./mapStyling.json";
import countries from "Library/countries.json";
import { reducer } from "Library";

const defsize = 25;

const MapContainer = ({ context, google }) => {
	const {
		protocol,
		store: { geo = false, markers = [], index },
		setStore
	} = context || {};

	const [state, _state] = useReducer(reducer, {
		cpos: false,
		latlng: [49.037868, 31.904297],
		zoom: 9,
		activeMarker: null
	});

	console.log("state", state);

	const { zoom, latlng } = state;

	useEffect(() => {
		if (geo && geo.countryCode) {
			const cpos = countries.filter(
				c => c.country_code === geo.countryCode
			);

			if (cpos.length) {
				_state(
					protocol === "https:"
						? {
								cpos,
								zoom: 7,
								latlng: [cpos.latitude, cpos.longitude]
						  }
						: {
								cpos: cpos[0],
								zoom: 7,
								latlng: [cpos[0].latlng[0], cpos[0].latlng[1]]
						  }
				);
			}
		}
	}, [geo]);

	const markerSets = {
		icon: {
			url: markerImg,
			scaledSize: new google.maps.Size(defsize, defsize)
		}
	};

	const onMarkerClick = (pp, activeMarker, index) => {
		setStore({ index: index });

		// activeMarker.animation = pp.google.maps.Animation.BOUNCE;
		// activeMarker.animating = true;
		// console.log("pp, activeMarker,", pp, activeMarker);

		_state({ zoom: 10 });

		_state({
			latlng: [pp.position.lat, pp.position.lng],
			zoom: 11,
			activeMarker
		});
	};

	const onMapClicked = props => {
		_state({
			activeMarker: null
		});
	};

	const displayMarkers = useCallback(() => {
		return markers.map((m, mx) => (
			<Marker
				labelClass="labelc"
				onClick={(pp, mr) => onMarkerClick(pp, mr, mx)}
				key={mx}
				animation={google.maps.Animation.DROP}
				{...markerSets}
				{...m}
			/>
		));
	}, [markers.length >= 0]);

	return (
		<Map
			{...styles}
			google={google}
			zoom={zoom}
			center={{ lat: latlng[0], lng: latlng[1] }}
			onClick={onMapClicked}>
			{markers.length && displayMarkers()}
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk"
})(MapContainer);
