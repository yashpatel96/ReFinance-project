import React from "react";
import LogIn from "../../components/layouts/LogIn/LogIn";
import { useDocumentTitle } from "../../components/layouts/Title/Title";

const Login = () => {
	useDocumentTitle("- Login");
	return (
		<div>
			<LogIn />
		</div>
	);
};

export default Login;
