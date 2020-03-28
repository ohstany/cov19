import { memo } from "react";
import GoogleMaps from "Templates/GoogleMaps";
import ActivityArea from "Templates/ActivityArea";
import Socials from "Templates/Socials";
import Subscribe from "Templates/Subscribe";
import NavMenu from "Templates/NavMenu";
import GoogleAnalytics from "Templates/GoogleAnalytics";
import { MainBlock } from "Layouts";
import { withTranslation } from "i18n";
import { NextSeo } from "next-seo";
import "global.scss";

const Home = memo(
	({
		t,
		context: {
			store: { language }
		}
	}) => {
		return (
			<>
				<NextSeo
					title={t("siteTitle")}
					description={t("siteDescription")}
					openGraph={{
						title: t("siteTitle"),
						description: t("siteDescription")
					}}
				/>

				<GoogleAnalytics>
					<div id="wrapper">
						<main id="main" className="main">
							<GoogleMaps language={language || "en"} />

							<MainBlock>
								<ActivityArea />
								<Socials />
							</MainBlock>
						</main>
						<NavMenu />
						<Subscribe />
					</div>
				</GoogleAnalytics>
			</>
		);
	}
);

export default withTranslation("common")(Home);
