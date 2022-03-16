import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const BtnCard = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="">

		<div className="card ">
			<div className="card" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "16rem", margin: '0.7rem',padding: '10px', boxShadow: '5px 10px 18px #0d6efd'}}>>
			  <img src={data.value3} className="icon" className="card-img-top" alt="..."/>
			  <span>{data.value1}</span>
		<div className="card-body">
		  <blockquote className="blockquote mb-0">
			<p>Price <strong>{data.value2}</strong></p>
			<p>change <strong>{data.value4}</strong></p>
			<p>BTC price <strong>{data.value5}</strong></p>
			<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
		  </blockquote>
		</div>
		</div>
	  </div>
		</div>
		
	);
};

BtnCard.propTypes = {
	match: PropTypes.object
};
