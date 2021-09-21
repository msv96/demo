import React, { useContext } from "react";
import { useHistory } from "react-router";
import Usercontext from "./Usercontext";
import Cartcontext from "./Cartcontext";

const Menu = () => {
	const history = useHistory();
	const { main } = useContext(Usercontext);
	const { cart, setCart } = useContext(Cartcontext);

	return (
		<>
			<button type="submit">Cart {cart.length}</button>
			<br />
			<input
				type="submit"
				value="Home"
				onClick={() => history.push("/")}
			/>
			<br />
			<input
				type="submit"
				value="list main"
				onClick={() => console.log(main)}
			/>
			<br />
			{main.map((e, i) => {
				return (
					<button
						key={e.id}
						type="submit"
						onClick={() => setCart([...cart, e])}
					>
						add item {e.name}
					</button>
				);
			})}
			<br />
			<input
				type="submit"
				value="list cart items"
				onClick={() => {
					console.log(cart);
				}}
			/>
			{cart.map((e, i) => {
				return <h2 key={i * e.id}>{e.name}</h2>;
			})}
		</>
	);
};

export default Menu;
