import React from "react";
import LogIn from "../../components/layouts/LogIn/LogIn";
import SignUp from "../../components/layouts/SignUp/SignUp";
import { useDocumentTitle } from "../../components/layouts/Title/Title";

const Login = () => {
	useDocumentTitle("- Login");
	return (
		<div>
			<LogIn />
			<SignUp />
		</div>
	);
};

export default Login;
