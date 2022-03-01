import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const BtnCard = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="card">
	
		  <div className="card-header">
			  <img src={data.value3} className="icon" style={{width:"5rem"}}/>
			  <span>{data.value1}</span>
		</div>
		<div className="card-body">
		  <blockquote className="blockquote mb-0">
			<p>Price <strong>{data.value2}</strong></p>
			<p>change <strong>{data.value4}</strong></p>
			<p>BTC price <strong>{data.value5}</strong></p>
			<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
		  </blockquote>
		</div>
	  </div>
		
	);
};

BtnCard.propTypes = {
	match: PropTypes.object
};
