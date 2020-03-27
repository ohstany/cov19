import { useContext } from "react";
import RootContext from "Context";
import LoginForm from "./LoginForm";
// import Loader from "Templates/Loader";

export default ({ children }) => {
	const {
		store: { loginStatus, fetched }
	} = useContext(RootContext);

	return loginStatus ? (
		children
	) : fetched && !loginStatus ? (
		<LoginForm />
	) : (
		""
		// <Loader />
	);
};
