import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import BBTableRow from "./BBTableRow";

const BBList = () => {
const [projects, setProjects] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/projects/branch/bioengineering")
	.then(({ data }) => {
		setProjects(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return projects.map((res, i) => {
	return <BBTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Project Title</th>
            <th>Professor</th>
			<th>Email</th>
            <th>Overview</th>
            <th>Pre-requisite</th>
            <th>Students Required</th>
            <th>Durantion In Months</th>
			<th>Branch</th>
			<th>Vacancy</th>
            
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default BBList;