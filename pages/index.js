import { useState } from "react";
import GoogleMaps from "Templates/GoogleMaps";
import Subscribe from "Templates/Subscribe";
import MakeMark from "Templates/MakeMark";
import ActivityArea from "Templates/ActivityArea";
import Socials from "Templates/Socials";
import "global.scss";

export const reducer = (state, a) => {
	// auto state update via KEYS
	a &&
		Object.keys(a).map(k => {
			state[k] = a[k];
			return false;
		});
	return { ...state };
};

const siteMeta = {
	title: "Коронавирус в Украине",
	description: "",
	icon: "coronavirus2.png",
	url:
		(typeof window !== "undefined" && window.location.href) ||
		"https://cov19.online/"
};

const Home = props => {
	console.log("props", props);

	const [setLocation, _setLocation] = useState(false);

	// const getLocationViaLat = () => {
	// 	const { lat = false, lng = false } =
	// 		(localStorage.getItem("position") &&
	// 			JSON.parse(localStorage.getItem("position"))) ||
	// 		{};

	// 	const lReq = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk`;
	// 	if (lat && lng) {
	// 		fetch(lReq)
	// 			.then(blob => blob.json())
	// 			.then(res => {
	// 				if (res && res.results && res.results[0]) {
	// 					localStorage.setItem(
	// 						"positionDatail",
	// 						JSON.stringify(res.results[0])
	// 					);
	// 				}

	// 				console.log("rrrr", res, res.results[0]);
	// 			});
	// 	} else {
	// 		console.log("not set");
	// 	}
	// };

	// useEffect(() => {
	// 	if (navigator.geolocation) {
	// 		const { lat = false, lng = false } =
	// 			(localStorage.getItem("position") &&
	// 				JSON.parse(localStorage.getItem("position"))) ||
	// 			{};

	// 		if (lat && lng) {
	// 			_setLocation(true);
	// 			// getLocationViaLat();
	// 		} else {
	// 			navigator.geolocation.getCurrentPosition(position => {
	// 				localStorage.setItem(
	// 					"position",
	// 					JSON.stringify({
	// 						lat: position.coords.latitude,
	// 						lng: position.coords.longitude
	// 					})
	// 				);

	// 				if (position.coords.latitudeg >= 0) {
	// 					_setLocation(true);
	// 				}
	// 			});
	// 		}
	// 	}
	// }, []);

	return (
		<main>
			<section className="mapArea">
				<GoogleMaps {...props} />
			</section>

			<section className="mainBlock">
				<Socials {...props} {...siteMeta} />

				<MakeMark {...props} />

				<ActivityArea {...props} />

				<Subscribe {...props} />
			</section>
		</main>
	);
};

export default Home;
