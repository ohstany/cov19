import React, { useState, useCallback } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import markerImg from "./m.png";

const MapContainer = ({ context, google }) => {
	const {
		store: { markers = [], index },
		setStore
	} = context || {};

	const [state, _state] = useState({
		activeMarker: null
	});

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

		_state({
			activeMarker
		});
	};

	const onMapClicked = props => {
		_state(e => ({
			activeMarker: null
		}));
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
			google={google}
			zoom={6.5}
			style={{
				width: "100%",
				height: "100%"
			}}
			styles={styles}
			initialCenter={{ lat: 49.037868, lng: 31.904297 }}
			onClick={onMapClicked}>
			{markers.length && displayMarkers()}
		</Map>
	);
};

const defsize = 25;

const styles = [
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#cccccc"
			},
			{
				lightness: 17
			}
		]
	},
	{
		featureType: "landscape",
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f5f5"
			},
			{
				lightness: 20
			}
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#ffffff"
			},
			{
				lightness: 17
			}
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#ffffff"
			},
			{
				lightness: 29
			},
			{
				weight: 0.2
			}
		]
	},
	{
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [
			{
				color: "#ffffff"
			},
			{
				lightness: 18
			}
		]
	},
	{
		featureType: "road.local",
		elementType: "geometry",
		stylers: [
			{
				color: "#ffffff"
			},
			{
				lightness: 16
			}
		]
	},
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f5f5"
			},
			{
				lightness: 21
			}
		]
	},
	{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
				color: "#dedede"
			},
			{
				lightness: 21
			}
		]
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				saturation: 36
			},
			{
				color: "#333333"
			},
			{
				lightness: 40
			}
		]
	},
	{
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "on"
			}
		]
	},
	{
		featureType: "transit",
		elementType: "geometry",
		stylers: [
			{
				color: "#a1a1a1"
			},
			{
				lightness: 19
			}
		]
	},
	{
		featureType: "administrative",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#a1a1a1"
			},
			{
				lightness: 20
			}
		]
	},
	{
		featureType: "administrative",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#bebebe"
			},
			{
				lightness: 17
			},
			{
				weight: 1.2
			}
		]
	}
];

export default GoogleApiWrapper({
	apiKey: "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk"
})(MapContainer);
