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
		<div className="position-relative">
			<div style={{backgroundColor: "#121316"}}>

				<div className="title1 text-center">
				<h1>They are distroying me!</h1>
				<h2>click in the button and see!</h2>
				<p>Welcome to TeensNews</p>
				</div>
				<Spline scene="https://draft.spline.design/6rm7mVxpNJ3gtjRX/scene.spline" />

	  		<Link to="/newhome">
				<button className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x">see calories</button>
			</Link>
		</div>
		</div>
	)
} 
