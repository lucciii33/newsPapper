import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BtnCard } from "./btnCard";

export const BtnMap = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="position-relative">
				<Link to="/NFT">
					<button className="position-absolute top-0 start-50 translate-middle mb-4 mt-4">Top NFT sales!</button>
				</Link>
			</div>
			<br></br>
			<br></br>
			{store.btcNesw.map((cryptoArticule, index)=><BtnCard  data={{
                    value1: cryptoArticule.name ,
                    value2: cryptoArticule.price,
					value3: cryptoArticule.iconUrl,
					value4: cryptoArticule.change,
					value5: cryptoArticule.btcPrice,
                  }}
                  key={index}
				  />)}
	  </div>
		
	);
};

BtnMap.propTypes = {
	match: PropTypes.object
};
