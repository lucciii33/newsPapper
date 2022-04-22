import React , { useEffect, useState, useContext }  from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotron";
import { Context } from "../store/appContext";
import { Card } from "./card"
import Spline from '@splinetool/react-spline';

import { Link, useParams } from "react-router-dom";


export const Home = () =>{
	const { store, actions } = useContext(Context);
	//const [news, setNews] = useState([]);
	return (
		<div className="">
			<div style={{backgroundColor: "#121316"}}>

				<div className="title1 text-center">
				<h1>Hi I am the earth!</h1>
				<h2>if you click me you will see what is happening</h2>
				<p>By day the banished sun circles the earth like a grieving mother with a lamp.</p>
				</div>

	  		<Link to="/newhome">
			  <Spline scene="https://draft.spline.design/6rm7mVxpNJ3gtjRX/scene.spline" />
			</Link>
				
		</div>
		</div>
	)
} 
