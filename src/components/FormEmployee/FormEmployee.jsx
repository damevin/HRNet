import "./formemployee.scss";
import { Link } from "react-router-dom";
import { Modal } from "reactlightmodal-by-damevin";
import { useRef, useState } from "react";
import React from "react";
import statesData from "../../data/states.js";

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
					<select name="state" className="form__section__input" required ref={employeeForm.state}>
						{statesData.map((state, index) => {
							return (
								<option key={index} value={state.abbreviation}>
									{state.name}
								</option>
							);
						})}
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
					<select
						name="department"
						className="form__section__input"
						required
						ref={employeeForm.department}
					>
						<option value="Sales">Sales</option>
						<option value="Marketing">Marketing</option>
						<option value="Engineering">Engineering</option>
						<option value="Human resources">Human Resources</option>
						<option value="Legal">Legal</option>
					</select>
				</div>
				<footer className="form__footer">
					<button className="form__footer__btn" type="submit">
						Save
					</button>
					<Link to="/">
						<button className="form__footer__btn--negative">Cancel</button>
					</Link>
				</footer>
			</form>

			<Modal
				isOpen={isOpen}
				canClose={true}
				closeBtnContent={<>X</>}
				footerContent={
					<>
						<Link to="/">
							<button className="btn__primary">Employees list</button>
						</Link>
						<button className="btn__secondary">Add another</button>
					</>
				}
				title="Great!"
				haveFooter={true}
				modalContent={<span className="modal__content">Your employee has been correctly added to your employees list!</span>}
				toggleModal={toggleModal}
			></Modal>
		</>
	);
}
