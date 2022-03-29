import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";
import Spinner from 'react-bootstrap/Spinner'

export const MarvellCard= (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// let quote = []
	// for (let key in store.quote) {
	//   let newArray = []
	//   newArray.push(key)
	//   newArray.push(store.quote[key])
	//   quote.push(newArray)
	//   }
	if(props.data.Quote === undefined || props.data.Speaker === undefined)return 'loading...'
	return (

		<div className="">
			
			<h5 className="m-2 p-2"><strong className="text-white">Quote: </strong> {props.data?.Quote}</h5>
			<h5 className="m-2 p-2">author: {props.data?.Speaker}</h5>
			
			

		</div>


	);
};

MarvellCard.propTypes = {
	data: PropTypes.object,
	
};
