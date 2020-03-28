import { useContext, useEffect } from "react";
import RootContext from "Context";
import LoginForm from "./LoginForm";

export default ({ children }) => {
	const {
		store: {
			loginStatus,
			fetched,
			userdata: { user_roles: [role = "none"] = [] } = {}
		}
	} = useContext(RootContext);

	useEffect(() => {
		if (role && role !== "developer" && role !== "none") {
			window.location.href = "/";
		}
	}, [role]);

	return loginStatus ? (
		role === "developer" ? (
			children
		) : (
			""
		)
	) : fetched && !loginStatus ? (
		<LoginForm />
	) : (
		""
	);
};
