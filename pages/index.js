import GoogleMaps from "Templates/GoogleMaps";
import Subscribe from "Templates/Subscribe";
import MakeMark from "Templates/MakeMark";
import ActivityArea from "Templates/ActivityArea";
import Socials from "Templates/Socials";
import GoogleAnalytics from "Library/GoogleAnalytics";
import { MainBlock } from "Layouts";
import { useState, memo } from "react";
import "global.scss";

const Home = memo(
	({
		context: {
			store: { settings: { cuser: { headers: { ucal } = {} } = {} } = {} }
		}
	}) => {
		// console.log("props", ucal);

		return (
			<GoogleAnalytics>
				<main>
					<GoogleMaps language={ucal || "en"} />

					<MainBlock>
						<Socials />

						<MakeMark />

						<ActivityArea />

						<Subscribe />
					</MainBlock>
				</main>
			</GoogleAnalytics>
		);
	}
);

export default Home;
