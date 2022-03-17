import React from "react";
import PropTypes from "prop-types";

const styleTitle = {
	color: "#6A5ADF",
};
export const Jumbotron = (props) => {
	return (
		<div className="text-dark m-10 p-5 mb-4 bg-secondary bg-opacity-25 rounded-3 " >
			<div className="container-fluid py-5" col-xs-12>
				<h1 className="display-5 fw-bold text-primary">
					Breaking News!
				</h1>
				<p className="col-md-8 fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				<button className="btn btn-outline-primary" type="button">
					Click for more
				</button>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	
};