import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";

export const Card = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		  
			<div className="card" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "16rem", margin: '0.7rem',padding: '10px', boxShadow: '5px 10px 18px #0d6efd'}}>
				<img src={data.value3} className="card-img-top" alt="..." style={{width: "100%", height: '12rem', objectFit: "cover"}}/>
					<div className="card-body">
						<h5 className="card-title">{data.value1}</h5>
						<p className="card-text">  {data.value2}</p>

						<Link to={{ pathname: "information/" + data.name, state: data }}>
                <button className="btn btn-outline-primary text-decoration-none d-flex justify-content-between m-1">
                  Read articule
                </button>
						</Link>
					</div>
			</div>

		
	);
};

Card.propTypes = {
	match: PropTypes.object
};
