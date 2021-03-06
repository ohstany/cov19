import { useContext } from "react";
import Access from "Templates/Login";
import RootContext from "Context";
import Header from "Templates/Admin/Header";
import Head from "next/head";
import NoSsr from "Templates/NoSsr";
import "global.scss";

export default ({ children }) => {
	const { logout } = useContext(RootContext);

	return (
		<NoSsr>
			<Head>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossorigin="anonymous"
				/>
			</Head>

			<Access>
				<div className="awrapper">
					<Header logout={logout} />

					<div className="amain">
						<div className="hhead"></div>
						<div className="bbody">{children}</div>
					</div>
				</div>
			</Access>
		</NoSsr>
	);
};
