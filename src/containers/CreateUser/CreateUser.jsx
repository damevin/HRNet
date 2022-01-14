import React from "react";
import FormEmployee from "../../components/FormEmployee/FormEmployee";
import "./createuser.scss";

export default function CreateUser() {
	return (
		<div className="wrapper">
			<h1 className="container__title">Create new employee</h1>
			<FormEmployee />
		</div>
	);
}
