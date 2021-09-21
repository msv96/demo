import React, { useState } from "react";

let Cartcontext = React.createContext();

export default Cartcontext;

export let Cartprovider = ({ children }) => {
	const [cart, setCart] = useState([]);
	return (
		<Cartcontext.Provider value={{ cart, setCart }}>
			{children}
		</Cartcontext.Provider>
	);
};
