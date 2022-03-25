import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";

export const NumberCard = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// let quote = []
	// for (let key in store.quote) {
	//   let newArray = []
	//   newArray.push(key)
	//   newArray.push(store.quote[key])
	//   quote.push(newArray)
	//   }
	return (

		<div className="">
			
				<h5 className="m-2 p-2">author: {props.data.text}</h5>
				<h5 className="m-2 p-2">author: {props.data.number}</h5>


		</div>


	);
};

NumberCard.propTypes = {
	data: PropTypes.object,
	
};
