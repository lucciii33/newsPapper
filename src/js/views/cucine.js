import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";
import { CardCucine } from "./cardcucine"

export const Cucine = ({ data }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [recipe, setRecipe] = useState('')


    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" >
                <div className=""><h1>Find any recipe</h1></div>
                <div>
                    <input className="" type="text" placeholder="recipes here" value={recipe} onChange={(e) => setRecipe(e.target.value)}></input>
                    <button onClick={() => actions.getRecipeDatas(recipe)}>find!</button>
                </div>
            </div>
            <div className="d-flex flex-wrap">

                {store.recipes.map((recipe, index) => <CardCucine data={{
                    value1: recipe.recipe.image,
                    value2: recipe.recipe.calories,
                    value3: recipe.recipe.ingredientLines,
                    value4: recipe.recipe.mealType,
                    value5: recipe.recipe.label,
                    value6: recipe.recipe.url
                }}
                    key={index}
                />)}
            </div>

        </div>

    );
};

Cucine.propTypes = {
    match: PropTypes.object
};


