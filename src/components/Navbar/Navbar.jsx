import React from "react";
import { useState } from "react";
import Logo from "./logo.png";
import { ReactComponent as UserIcon } from "./usericon.svg";
import "./navbar.scss";

export default function Navbar({onOpen}) {

	return (
		<nav className="navbar">
			<img className="navbar__logo" src={Logo} alt="" />
			<button className="navbar__btn" onClick={onOpen}>
				<UserIcon className="navbar__btn__icon" />
				<span>New employee</span>
			</button>
		</nav>
	);
}
