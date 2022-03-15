import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardNft } from "./cardnft";

export const Nft = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container d-flex flex-wrap">

			{store.nft.map((article, index)=> <CardNft  data={{
                    value1: article.headline,
                    value2: article.description,
					value3: article.promoImage.url,
					value4: article.url,
					
                  }}
                  key={index}
				  />)}
	  </div>
		
	);
};

Nft.propTypes = {
	match: PropTypes.object
};
