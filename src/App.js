import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cartprovider } from "./Cartcontext";
import Home from "./Home";
import Menu from "./Menu";
import { Userprovider } from "./Usercontext";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Userprovider>
						<Cartprovider>
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="/menu" exact>
								<Menu />
							</Route>
						</Cartprovider>
					</Userprovider>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
