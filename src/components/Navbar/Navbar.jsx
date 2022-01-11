import React from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "./usericon.svg";
import "./navbar.scss";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img className="navbar__logo" src={Logo} alt="" />
			</Link>
			<Link to="/createEmployee">
				<button className="navbar__btn">
					<UserIcon className="navbar__btn__icon" />
					<span>New employee</span>
				</button>
			</Link>
		</nav>
	);
}
