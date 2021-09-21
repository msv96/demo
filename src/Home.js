import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Usercontext from "./Usercontext";

const Home = () => {
	const [data, setData] = useState("");
	const history = useHistory();
	const { setMain } = useContext(Usercontext);

	useEffect(() => {
		let fetch = async () => {
			try {
				let datas = await axios.get(
					"https://60f460de3cb0870017a8a216.mockapi.io/users"
				);
				setMain([...datas.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, [setMain]);


	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="name">Full Name</label>
				<br />
				<input
					type="text"
					name="fullname"
					id="name"
					onChange={(e) => {
						setData(e.target.value);
					}}
				/>
				<br />
				<input
					type="submit"
					value="Submit"
					onClick={() => {
						console.log(data);
					}}
				/>
			</form>
			<input
				type="submit"
				value="Menu"
				onClick={() => {
					history.push("/menu");
				}}
			/>
		</div>
	);
};

export default Home;
