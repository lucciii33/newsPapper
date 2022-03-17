import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";

export const MotiCard = ({ data }) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (

		<div className="">
			
				<h5 className="">{data.value1}</h5>
				<p className="">  {data.value2}</p>


		</div>


	);
};

MotiCard.propTypes = {
	match: PropTypes.object
};
