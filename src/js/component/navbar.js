import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-o">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 m-3 mb-3" >TensNews</span>
			</Link>
			
			<div className="ml-auto">
			<div className="d-flex text-decoration-none" ></div>
				<Link to="/demo">
					<span className=" m-2 ">Tech news</span>
				</Link>
				<Link to="/NFT">
					<span className=" m-2 ">Financial news</span>
				</Link>
				<Link to="cucine">
					<span className=" m-2 ">all about recipes</span>
				</Link>
				<Link to="/btnmap">
					<span className=" m-2 ">Crypto</span>
				</Link>
				<Link to="/motivational">
					<span className=" m-2 ">knowledge</span>
				</Link>
			</div>
		</nav>
	);
};
