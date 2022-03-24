import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { MotiCard } from "./moticard"
import {NumberCard } from "./numbercard"
import Aos from "aos"
import "aos/dist/aos.css"
import "../../styles/home.css";''

export const Motivational = () => {

  const { store, actions } = useContext(Context);
  const params = useParams();
 useEffect(()=>{
   Aos.init({duration: 2000});
 },[])
  return (
    <div className="grids">
      <div className="boxes" >
      <MotiCard data = {store.quote}/> 
      <div className="d-flex justify-content-end"><i className="fas fa-check-circle" ></i></div>
      </div>

      <div className="boxes" >
      <NumberCard data = {store.quoteNumber}/> 
      <div className="d-flex justify-content-end"><i className="fas fa-check-circle" ></i></div>
      </div>

      <div data-aos='fade-left' className="boxes" >
      <MotiCard data = {store.quote}/> 
      </div>

      <div  data-aos='fade-right' className="boxes" >
      <MotiCard data = {store.quote}/> 
      </div>

      <div data-aos='fade-left' className="boxes" >
      <MotiCard data = {store.quote}/> 
      </div>

      <div data-aos='fade-right' className="boxes" >
      <MotiCard data = {store.quote}/> 
      </div>
    </div>
  );
};











Motivational.propTypes = {
  match: PropTypes.object
};