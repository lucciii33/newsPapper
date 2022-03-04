import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardNft } from "./cardnft";

export const Nft = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>

			{store.nft.map((nftArt, index)=> <CardNft  data={{
                    value1: nftArt.collection,
                    value2: nftArt.price,
					value3: nftArt.nft_name,
					value4: nftArt.collection_url,
					value5: nftArt.date,
                    value6: nftArt.nft_url,
                  }}
                  key={index}
				  />)}
	  </div>
		
	);
};

Nft.propTypes = {
	match: PropTypes.object
};
