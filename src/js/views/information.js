import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = props => {
	const { store, actions } = useContext(Context);
	var data = useLocation().state;
	return (
		<div className="jumbotron">
			<div className="card mb-3" style={{maxWidth: "540px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={data.value3} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{data.value1}</h5>
							<p className="card-text">{data.value2}</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Information.propTypes = {
	match: PropTypes.object
};
