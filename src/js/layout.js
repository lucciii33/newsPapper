import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Tech } from "./views/demo";
import injectContext from "./store/appContext";
import { Information } from "./views/information";
import { BtnCard } from "./views/btnCard";
import {CardNft} from "./views/NFT"
import { Cucine } from "./views/cucine";
import { CardCucine } from "./views/cardcucine";
import { Motivational } from "./views/motivational";
import { CaloriesCalculator } from "./views/caloriescalculator";
import { NewHome } from "./views/newhome";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { BtnMap } from "./views/btnmap";
import { Nft } from "./views/NFT";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Tech />
						</Route>
						<Route exact path="/btnmap" component={BtnMap} />
						<Route exact path="/newhome" component={NewHome} />
						<Route exact path="/NFT" component={Nft} />
						<Route exact path="/cucine" component={Cucine} />
						<Route exact path="/motivational" component={Motivational} />
						<Route exact path="/information/:name" component={Information}/>
						<Route exact path="/caloriescalculator/" component={CaloriesCalculator}/>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
