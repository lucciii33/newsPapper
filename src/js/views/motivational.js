import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { MotiCard } from "./moticard"
import { MotiCard2 } from "./moticard2"
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
      <div className="d-flex justify-content-end mb-1"><i className="icon fas fa-arrow-alt-circle-right" onClick={() => actions.quoteData()} ></i></div>
      </div>

      <div className="boxes" >
      <NumberCard data = {store.quoteNumber}/> 
      <div className="d-flex justify-content-end">
        <i className="icon fas fa-arrow-alt-circle-right" onClick={() => actions.quoteDataNumber()} ></i>
        </div>
      </div>

      <div data-aos='fade-left' className="boxes" >
      <div className="d-flex justify-content-end">
        <i className="icon fas fa-arrow-alt-circle-right" onClick={() => actions.quote2Data()} ></i>
        </div>
      {store.quote2.slice(0,1).map((quote, index) => <MotiCard2 data={{
                    value1: quote.text,
                    value2: quote.author,
                }}
                    key={index}
                />)}
      </div>

      <div  data-aos='fade-right' className="boxes" >
      <div className="d-flex justify-content-end">
        <i className="icon fas fa-arrow-alt-circle-right" onClick={() => actions.quote2Data()} ></i>
        </div>
      {store.quote2.slice(1,2).map((quote, index) => <MotiCard2 data={{
                    value1: quote.text,
                    value2: quote.author,
                }}
                    key={index}
                />)} 
      </div>

      <div data-aos='fade-left' className="boxes" >
      <div className="d-flex justify-content-end">
        <i className="icon fas fa-arrow-alt-circle-right" onClick={() => actions.quote2Data()} ></i>
        </div>
      <MotiCard data = {store.quote}/> 
      </div>

    </div>
  );
};











Motivational.propTypes = {
  match: PropTypes.object
};