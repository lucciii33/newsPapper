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
   {/*

Mujeres

[655 + (9.6 x Peso kg) ] + [ (1.8 x Altura cm) – (4.7 x Edad)] x Factor actividad

Hombres

[66 + (13.7 x Peso kg) ] + [ (5 x Altura cm) – (6.8 x Edad)] x Factor actividad

   result1 = ""
   result2 = ""
   result3 = ""
    let male = 665
    let peso = ()=>{
        9.6+formValues.weight
        result1 = male + peso
        return result1
    } 
    let altura = ()=>{
        1.8*formValues.height
        result2 = result1 + altura
        return result2
    }
    let edad = ()=>{
        4.7+formValues.age
        result3 = result2 - edad
        return result3
    } 
    ///////////////////////////////

    let menFormula = ()=>{

        
        }*/}
       

    return (
        <div className="container1">
            <div className="m-2">gender:

                <label for="male" className="m-2">male
                    <input type='radio' 
                    id="male"
                     name="gender"
                    value={formValues == "male" ? "male" : ""} 
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

            <div className="">
                <label>age
                    <input value ={formValues.age} onChange={(e)=> setFormValues({...formValues,age:e.target.value}) }></input>
                </label>
                <p>between 15-80</p>
            </div>
            <div className="p-2 m-2">
                <label>
                    Height <input type='text'value ={formValues.height} onChange={(e)=> setFormValues({...formValues,height:e.target.value}) }></input>
                </label>
            </div>
            <div className="p-2 m-2">
                <label>
                    Weight <input type='text'value ={formValues.weight} onChange={(e)=> setFormValues({...formValues,weight:e.target.value}) }></input>
                </label>
            </div>
            <div className="dropdown m-2">
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
                <button className="m-2" onClick={()=> actions.calculatorCalories(formValues,)}>Calculate</button>
                <button>Clear</button>
            </div>
        </div>

    );
};

CaloriesCalculator.propTypes = {
    match: PropTypes.object
};

