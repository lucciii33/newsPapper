import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="card" style={{width:"20rem"}}>
				<img src={data.value3} className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{data.value1}</h5>
						<p className="card-text">  {data.value2}</p>

						<Link to={{ pathname: "information/" + data.name, state: data }}>
                <button className="btn btn-primary d-flex justify-content-between m-1">
                  Read articule
                </button>
						</Link>
					</div>
			</div>

		</div>
	);
};

Card.propTypes = {
	match: PropTypes.object
};
