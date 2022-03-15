import React , { useEffect, useState, useContext }  from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron";
import { Context } from "../store/appContext";
import { Card } from "./card"


export const Home = () =>{
	const { store, actions } = useContext(Context);
	//const [news, setNews] = useState([]);
	return (
		<div className="">
			<div className="container">

			<Jumbotron/>
			</div>
			<div className="container">
				<div className="d-flex flex-row p-3 m-3" style={{ width: "100%", overflow: "auto" }}>
			{store.news.map((articule, index)=><Card  data={{
                    value1: articule.title ,
                    value2: articule.description,
					value3: articule.image.url,
					value4: articule.url
                  }}
                  key={index}
				  />)}
				</div>
			</div>
		</div>
	)
} 
