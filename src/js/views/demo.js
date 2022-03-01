import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Tech = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
			{store.techNews.map((techArticule, index)=><Card  data={{
                    value1: techArticule.title ,
                    value2: techArticule.dateTime,
					value3: techArticule.img
                  }}
                  key={index}
				  />)}
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
