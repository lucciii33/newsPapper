import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";


export const CaloriesCalculator = ({ data }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [formValues, setFormValues ] = useState({
        age: "",
        height: "",
        weight: "",
        male: "",
        female: ""
    });


    return (
        <div className="container">

            <div>
                <label>age
                    <input value ={formValues.age} onChange={(e)=> setFormValues({...formValues,age:e.target.value}) }></input>
                </label>
                <p>between 15-80</p>
            </div>
            <div>
                <h2>Gender</h2>
                <label for="male">male
                    <input type='radio' 
                    id="male"
                     name="gender"
                    value={formValues == "male"?"male":""} 
                    onChange={(e)=> setFormValues({...formValues,male:e.target.value}) }>
                    </input>
                </label>

                <label for="female">female
                    <input id="female" name="gender" 
                    type='radio'
                    value={formValues.female}
                    onChange={(e)=> setFormValues({...formValues,female:e.target.value}) }>

                    </input>
                </label>
            </div>
            <div>
                <label>
                    Height <input type='text'value ={formValues.height} onChange={(e)=> setFormValues({...formValues,height:e.target.value}) }></input>
                </label>
            </div>
            <div>
                <label>
                    Weight <input type='text'value ={formValues.weight} onChange={(e)=> setFormValues({...formValues,weight:e.target.value}) }></input>
                </label>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="dropdown-item" href="#">Basal Metabolic Rate (BMR)</li>
                    <li className="dropdown-item" href="#">Sedentary: littel or not exercises</li>
                    <li className="dropdown-item" href="#">light: exercises 1-3times/week</li>
                    <li className="dropdown-item" href="#">moderate: exercises 4-5times/week</li>
                    <li className="dropdown-item" href="#">active: daily exercises or intense exercises 3-4times/week</li>
                    <li className="dropdown-item" href="#">very active: intense exercises 6-7times/week</li>
                    <li className="dropdown-item" href="#">extra active: very intense exercises daily or physical job</li>
                </ul>
            </div>
            <div>
                <button onClick={()=> actions.calculatorCalories(formValues,)}>Calculate</button>
                <button>Clear</button>
            </div>
        </div>

    );
};

CaloriesCalculator.propTypes = {
    match: PropTypes.object
};

