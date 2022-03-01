import React , { useEffect, useState, useContext }  from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "./card"


export const Home = () =>{
	const { store, actions } = useContext(Context);
	//const [news, setNews] = useState([]);
	return (
		<div className="container">
			<div className="scroll">
				<div className="d-flex p-3 m-4">
			{store.news.map((articule, index)=><Card  data={{
                    value1: articule.title ,
                    value2: articule.description,
					value3: articule.image.url
                  }}
                  key={index}
				  />)}
				</div>
			</div>
		</div>
	)
} 
