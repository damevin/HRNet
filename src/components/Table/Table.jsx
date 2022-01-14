import React from "react";
import "./table.scss";
import DataTable from "react-data-table-component";
const columns = [
	{
		name: "First Name",
		selector: (row) => row.firstname,
		sortable: true,
	},
	{
		name: "Last Name",
		selector: (row) => row.lastname,
		sortable: true,
	},
	{
		name: "Start Date",
		selector: (row) => row.startDate,
		sortable: true,
	},
	{
		name: "Department",
		selector: (row) => row.department,
		sortable: true,
	},
	{
		name: "Date of Birth",
		selector: (row) => row.dateOfBirth,
		sortable: true,
	},
	{
		name: "Street",
		selector: (row) => row.street,
		sortable: true,
	},
	{
		name: "City",
		selector: (row) => row.city,
		sortable: true,
	},
	{
		name: "State",
		selector: (row) => row.state,
		sortable: true,
	},
	{
		name: "Zipcode",
		selector: (row) => row.zipcode,
		sortable: true,
	},
];

export default function Table({ data }) {

	const localData = JSON.parse(localStorage.getItem("employees"));
	let dataArr = [];
	localData ? dataArr = [...data, ...localData] : dataArr = [...data]

	return (
		<DataTable
			columns={columns}
			data={dataArr}
			highlightOnHover
			pagination
			striped
			paginationPerPage={10}
		></DataTable>
	);
}
