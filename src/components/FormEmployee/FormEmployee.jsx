import React from "react";
import { useRef, useState } from "react";
import { Modal } from "@damevin/reactlightmodal";
import { Link } from "react-router-dom";
import "./formemployee.scss";

export default function FormEmployee() {
	const [isOpen, setOpen] = useState();

	const toggleModal = () => {
		setOpen(!isOpen);
	};

	const employeeForm = {
		dateOfBirth: useRef(),
		city: useRef(),
		department: useRef(),
		firstname: useRef(),
		lastname: useRef(),
		startDate: useRef(),
		state: useRef(),
		street: useRef(),
		zipcode: useRef(),
	};

	const handleEmployeeForm = (event) => {
		let employees = JSON.parse(localStorage.getItem("employees")) || [];
		let employee = {};

		event.preventDefault();

		for (const key in employeeForm) {
			if (Object.hasOwnProperty.call(employeeForm, key)) {
				const item = employeeForm[key].current.value;
				employee[key] = item;
			}
		}

		employees.push(employee);
		localStorage.setItem("employees", JSON.stringify(employees));
		toggleModal();
		event.target.reset();
		/** TO DO
		 * - Clear form
		 * - Display modal when succeeds
		 *  */
	};

	return (
		<>
			<form onSubmit={handleEmployeeForm} className="form">
				<div className="form__section">
					<label className="form__section__label">First Name</label>
					<input
						className="form__section__input"
						required
						type="text"
						ref={employeeForm.firstname}
					></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">Last Name</label>
					<input
						className="form__section__input"
						required
						type="text"
						ref={employeeForm.lastname}
					></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">Date of Birth</label>
					<input
						className="form__section__input"
						required
						type="date"
						ref={employeeForm.dateOfBirth}
					></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">Start Date</label>
					<input
						className="form__section__input"
						required
						type="date"
						ref={employeeForm.startDate}
					></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">Street</label>
					<input className="form__section__input" required type="text" ref={employeeForm.street}></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">City</label>
					<input className="form__section__input" required type="text" ref={employeeForm.city}></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">State</label>
					{/* To do map method with all avaible states */}
					<select name="cars" id="cars" form="carform" required ref={employeeForm.state}>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
				</div>
				<div className="form__section">
					<label className="form__section__label">Zip Code</label>
					<input
						className="form__section__input"
						required
						type="number"
						ref={employeeForm.zipcode}
					></input>
				</div>
				<div className="form__section">
					<label className="form__section__label">Department</label>
					{/* To do map method with all avaible departement */}
					<select name="cars" id="cars" form="carform" ref={employeeForm.department}>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
				</div>

				<button className="form__btn" type="submit">
					Save
				</button>
			</form>

			<Modal
				isOpen={isOpen}
				canClose={true}
				closeBtnContent={<>X</>}
				footerContent={
					<>
						<Link to="/">
							<button>Employees list</button>
						</Link>
						<button>Add another</button>
					</>
				}
				title="Great!"
				haveFooter={true}
				modalContent={<p>Your employee has been correctly added to your employees list!</p>}
				toggleModal={toggleModal}
			></Modal>
		</>
	);
}
