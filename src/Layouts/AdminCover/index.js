import { useContext } from "react";
import Access from "Library/Login";
import RootContext from "Context";
import Header from "Layouts/Header";
import Head from "next/head";
import "global.scss";

export default ({ children }) => {
	const { actioner, setStore, store } = useContext(RootContext);

	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossorigin="anonymous"
				/>
			</Head>

			<Access actioner={actioner} store={store} set={setStore}>
				<div className="awrapper">
					<Header />

					<div className="amain">
						<div className="hhead"></div>
						<div className="bbody">{children}</div>
					</div>
				</div>
			</Access>
		</>
	);
};
