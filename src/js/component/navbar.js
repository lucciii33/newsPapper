import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">TensNews</span>
			</Link>
			
			<div className="ml-auto">
			<div></div>
				<Link to="/demo">
					<button className="btn btn-primary m-2">Tech news</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary m-2">all about weed</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary m-2">Crypto</button>
				</Link>
			</div>
		</nav>
	);
};
