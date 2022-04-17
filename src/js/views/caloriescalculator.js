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
        gender: "",
        activity: ""
        
        
    });
    const[answer, setAnswer]=useState('')

// Mujeres

// [655 + (9.6 x Peso kg) ] + [ (1.8 x Altura cm) – (4.7 x Edad)] x Factor actividad

// Hombres

// [66 + (13.7 x Peso kg) ] + [ (5 x Altura cm) – (6.8 x Edad)] x Factor actividad

 let calculator =(object)=>{
    if(object.gender == 655){

        let female = object.gender
        let weight = (9.6*object.weight)+female
        let heigth = (1.8*object.height*2.54)
        let age = 4.7*object.age
        let activity = object.activity
        let calories = weight +(heigth - age)*activity
        setAnswer(calories)
    } else if(object.gender == 66.5){
        let male = object.gender
        let weight = (13.75*object.weight)+male
        let heigth = (5.003*object.height*2.54)
        let age = 4.7*object.age
        let activity = object.activity
        let calories = weight +(heigth - age)*activity
        setAnswer(calories)
    }else{
        setAnswer('gender not found')
    }
     
 }

//  function checkRecipe(recipe) {
//     return recipe < answer;
//   }
        
       

    return (
        <div className="">
            <div className="container1">

            
            <div className=" m-2">gender:

                <label for="male" className="m-2">male
                    <input type='radio' 
                    id="male"
                     name="gender"
                    checked={formValues.gender == 655} 

                    onChange={(e)=> setFormValues({...formValues,gender:655}) }>
                    </input>
                </label>

                <label for="female">female
                    <input id="female" name="gender" 
                    type='radio'
                    checked={formValues.gender == 655}

                    onChange={(e)=> setFormValues({...formValues,gender:655}) }>

                    </input>
                </label>
                
            </div>

            <div className="">
                <label>age
                    <input value ={formValues.age} onChange={(e)=> setFormValues({...formValues,age:e.target.value}) } placeholder="age"></input>
                </label>
                <p>between 15-80</p>
            </div>
            <div className="p-2 m-2">
                <label>
                    Height <input type='text'value ={formValues.height} onChange={(e)=> setFormValues({...formValues,height:e.target.value}) } placeholder="inches"></input>
                </label>
            </div>
            <div className="p-2 m-2">
                <label>
                    Weight <input type='text'value ={formValues.weight} onChange={(e)=> setFormValues({...formValues,weight:e.target.value}) } placeholder="Kilograms"></input>
                </label>
            </div>
            <div className="dropdown m-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="dropdown-item" href="#" onClick={()=>setFormValues({...formValues, activity:1.2})}>Sedentary: littel or not exercises</li>
                    <li className="dropdown-item" href="#" onClick={()=>setFormValues({...formValues, activity:1.375})}>light: exercises 1-3times/week</li>
                    <li className="dropdown-item" href="#" onClick={()=>setFormValues({...formValues, activity:1.55})}>moderate: exercises 4-5times/week</li>
                    <li className="dropdown-item" href="#" onClick={()=>setFormValues({...formValues, activity:1.725})}>active: daily exercises or intense exercises 3-4times/week</li>
                    <li className="dropdown-item" href="#" onClick={()=>setFormValues({...formValues, activity:1.9})}>very active: intense exercises 6-7times/week</li>
                </ul>
            </div>
            <div>
                <button className="m-2" onClick={()=> calculator(formValues)}>Calculate</button>
                <button>Clear</button>
                {answer!=""&&<span> calories per day: {answer}</span>}
            </div>

            </div>
            {/* <div className="d-flex justify-content-center">
                <p>find tou diet here</p>
                <button onClick={() => actions.getRecipeDatas()}>click me</button>
                {store.recipes.filter((recipe)=>recipe.calories > answer) => <CardCucine data={{
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
             */}
        </div>

    );
};

CaloriesCalculator.propTypes = {
    match: PropTypes.object
};

