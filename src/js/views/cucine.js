import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";

export const Cucine = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [recipe,setRecipe]=useState('')
   

    return (

        <div className="d-flex justify-content-center align-items-center" >
            <div className=""><h1>Find any recipe</h1></div>
            <div>
            <input className=""type="text" placeholder="recipes here" value={recipe} onChange={(e)=>setRecipe(e.target.value)}></input>
            <button onClick={()=>actions.getRecipeDatas(recipe)}>find!</button>
            </div>
        </div>


    );
};

Cucine.propTypes = {
    match: PropTypes.object
};


