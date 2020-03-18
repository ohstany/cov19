import { memo } from "react";
import GoogleMaps from "Templates/GoogleMaps";
import Subscribe from "Templates/Subscribe";
import ActivityArea from "Templates/ActivityArea";
import Socials from "Templates/Socials";
import NavMenu from "Templates/NavMenu";
import GoogleAnalytics from "Library/GoogleAnalytics";
import { MainBlock } from "Layouts";
import { withTranslation, i18n } from "i18n";
import "global.scss";

const Home = memo(
	({
		t,
		context: {
			store: { language }
		}
	}) => {
		return (
			<GoogleAnalytics>
				<main id="main">
					<GoogleMaps language={language || "en"} />

					<MainBlock>
						<ActivityArea />
						<Socials />
						<Subscribe />
						<NavMenu />
					</MainBlock>
				</main>
			</GoogleAnalytics>
		);
	}
);

export default withTranslation("common")(Home);
