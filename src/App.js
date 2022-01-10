import Router from "./router";
import Navbar from "./components/Navbar/Navbar.jsx";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="App">
			<Navbar onOpen={toggleModal} />
			<Router />
			{modal && <Modal onClose={toggleModal}/>}
		</div>
	);
}

export default App;
