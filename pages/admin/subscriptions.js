import { useContext } from "react";
import RootContext from "Context";
import AdminCover from "Layouts/AdminCover";

export default () => {
	const { actioner, setStore, store } = useContext(RootContext);

	return (
		<AdminCover>
			<h1>Subscriptions</h1>
			<div className="content"></div>
		</AdminCover>
	);
};
