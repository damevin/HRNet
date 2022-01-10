import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Error from "./containers/Error/Error";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="*" element={<Error />}></Route>
		</Routes>
	);
};

export default Router;
