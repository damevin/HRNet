import React from "react";
import "./modal.scss";

export default function Modal({onClose}) {
	return (
		<div className="overlay" onClick={onClose}>
			<div className="modal">
				<div className="modal-content">
					<h2>Hello modal</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, eius.</p>
					<button className="close-modal" onClick={onClose}>close</button>
				</div>
			</div>
		</div>
	);
}
