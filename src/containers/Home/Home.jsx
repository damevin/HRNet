import "./home.scss";
import { useState } from "react";
import data from "../../data/mockedEmployees.json";
import React, { lazy, Suspense } from "react";

const TableComponent = lazy(() => import("../../components/Table/Table"));

const renderLoader = () => <p>Loading...</p>;

export default function Home() {
	const [foundEmployees, setFoundEmployees] = useState("");
	const localData = JSON.parse(localStorage.getItem("employees"));
	let dataArr = [];
	localData ? (dataArr = [...data, ...localData]) : (dataArr = [...data]);

	const handleSearch = (event) => {
		const query = event.target.value;
		if (query.length >= 3) {
			const results = dataArr.filter((employee) => {
				return (
					employee.lastname.toLowerCase().startsWith(query.toLowerCase()) ||
					employee.firstname.toLowerCase().startsWith(query.toLowerCase()) ||
					employee.department.toLowerCase().startsWith(query.toLowerCase())
				);
			});
			setFoundEmployees(results);
		} else {
			setFoundEmployees(dataArr);
		}
	};
	return (
		<Suspense fallback={renderLoader()}>
			<main className="container">
				<header className="container__header">
					<h1 className="container__title">Dashboard</h1>
					<input
						type="search"
						placeholder="Search..."
						className="container__input"
						onChange={handleSearch}
					/>
				</header>
				<p>{data.id}</p>
				<TableComponent data={foundEmployees || dataArr} />
			</main>
		</Suspense>
	);
}
