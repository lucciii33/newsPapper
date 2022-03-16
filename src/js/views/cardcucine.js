import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";


export const CardCucine = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		  
			<div className="card" style={{ minWidth: "18rem", maxWidth: "22rem", minHeight: "16rem", margin: '0.7rem',padding: '10px', boxShadow: '5px 10px 18px #6A5ADF'}}>
				<img src={data.value1} className="card-img-top" alt="..." style={{width: "100%", height: '18rem', objectFit: "cover"}}/>
					<div className="card-body">
						<h5 className="card-title">{data.value5}</h5>
						<p className="card-text">  {data.value3}</p>
						<p className="card-text">  {data.value4}</p>
						<p className="card-text">  {data.value2}</p>
						<Link to='/'>
                <button className="btn btn-primary d-flex justify-content-between m-1">
                  Read articule
                </button>
						</Link>
					</div>
			</div>

		
	);
};

CardCucine.propTypes = {
	match: PropTypes.object
};
