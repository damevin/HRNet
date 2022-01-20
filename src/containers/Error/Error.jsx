import "./error.scss";
import { Link } from "react-router-dom";
import ErrorImg from "./error.png";

export default function Error() {
	return (
		<div className="container">
			<img src={ErrorImg} className="error-img" alt="error"></img>
			<h1 className="title">Oups....</h1>
			<p className="details">
				An error occurs, please try again or go to{" "}
				<Link className="link" to="/">
					the homepage
				</Link>
			</p>
		</div>
	);
}
