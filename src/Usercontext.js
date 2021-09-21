import React, { useState } from "react";

let Usercontext = React.createContext();

export default Usercontext;

export let Userprovider = ({ children }) => {
	const [main, setMain] = useState([]);
	return (
		<Usercontext.Provider value={{ main, setMain }}>
			{children}
		</Usercontext.Provider>
	);
};
