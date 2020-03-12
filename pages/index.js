import GoogleMaps from "Templates/GoogleMaps";
import Subscribe from "Templates/Subscribe";
import ActivityArea from "Templates/ActivityArea";
import Socials from "Templates/Socials";
import GoogleAnalytics from "Library/GoogleAnalytics";
import { MainBlock } from "Layouts";
import { memo } from "react";
import "global.scss";

const Home = memo(
	({
		context: {
			store: { settings: { cuser: { headers: { ucal } = {} } = {} } = {} }
		}
	}) => {
		return (
			<GoogleAnalytics>
				<main id="main">
					<GoogleMaps language={ucal || "en"} />

					<MainBlock>
						<ActivityArea />
						<Socials />
						<Subscribe />
					</MainBlock>
				</main>
			</GoogleAnalytics>
		);
	}
);

export default Home;
