import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./houses.css";

const HouseTable = () => {
	const [houseData, setHouseData] = useState([]);
	const [houseTypeFilter, setHouseTypeFilter] = useState("");
	const [minPriceFilter, setMinPriceFilter] = useState(""); // Added min price filter
	const [maxPriceFilter, setMaxPriceFilter] = useState("");
	const [locationFilter, setLocationFilter] = useState("");

	useEffect(() => {
		const fetchHouseData = async () => {
			try {
				const response = await axios.get("http://localhost:3500/house");
				setHouseData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchHouseData();
	}, []);

	const filteredData = houseData.filter((data) => {
		const passesHouseTypeFilter =
			!houseTypeFilter || data.size === houseTypeFilter;
		const passesMinPriceFilter =
			!minPriceFilter ||
			parseInt(data.price, 10) >= parseInt(minPriceFilter, 10); // Added min price filter check
		const passesMaxPriceFilter =
			!maxPriceFilter ||
			parseInt(data.price, 10) <= parseInt(maxPriceFilter, 10);
		const passesLocationFilter =
			!locationFilter || data.location === locationFilter;
		return (
			passesHouseTypeFilter &&
			passesMinPriceFilter &&
			passesMaxPriceFilter &&
			passesLocationFilter
		);
	});

	return (
		<div className="house-table-container">
			<div className="filter-container">
				<div className="search house-type">
					<label className="search-label">
						House Type :
						<select
							className="housetype-select"
							value={houseTypeFilter}
							onChange={(e) => setHouseTypeFilter(e.target.value)}
						>
							<option value="">All</option>
							<option value="bedsitter">Bedsitter</option>
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</label>
				</div>
				<div className="price-search">
					<div className="search min-price">
						<label className="search-label">
							Min Price :
							<input
								className="search-input"
								type="number"
								value={minPriceFilter}
								onChange={(e) => setMinPriceFilter(e.target.value)}
							/>
						</label>
					</div>
					<div className="search max-price">
						<label className="search-label">
							Max Price :
							<input
								className="search-input"
								type="number"
								value={maxPriceFilter}
								onChange={(e) => setMaxPriceFilter(e.target.value)}
							/>
						</label>
					</div>
				</div>
				<div className="search">
					<label className="search-label">
						Location :
						<select
							className="location-select"
							value={locationFilter}
							onChange={(e) => setLocationFilter(e.target.value)}
						>
							<option value="">All</option>
							<option value="Frehold">Frehold</option>
							<option value="Freearea">Freearea</option>
							<option value="Pangani">Pangani</option>
							<option value="Naka">Naka</option>
							<option value="Topten">Pangani</option>
							<option value="racecource">racecource</option>
							{/* Add other locations as options */}
						</select>
					</label>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr className="tableHead-row">
						<th className="tableHeadNames">House Type</th>
						<th className="tableHeadNames">Rent</th>
						<th className="tableHeadNames">Location</th>
						<th className="tableHeadNames">Details</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((data, index) => (
						<tr key={index} className="table-row">
							<td className="tableData">{data.houseType}</td>
							<td className="tableData">{data.price}</td>
							<td className="tableData">{data.location}</td>
							<td className="tableData">
								{" "}
								{/* <Link to={`/house-details/${data.id}`}>View house</Link> */}
								<Link to="/house-details">View house</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default HouseTable;
