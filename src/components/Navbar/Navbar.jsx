import "./navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "./usericon.svg";
import Logo from "./logo.png";
import LogoWebp from "./logo.webp";
import React from "react";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img className="navbar__logo" alt="" srcSet={(Logo, LogoWebp)}></img>
			</Link>
			<Link to="/create-employee">
				<button className="navbar__btn">
					<UserIcon className="navbar__btn__icon" />
					<span>New employee</span>
				</button>
			</Link>
		</nav>
	);
}
