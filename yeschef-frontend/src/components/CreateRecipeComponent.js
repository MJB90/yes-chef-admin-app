import React, { useState, Component } from 'react';

import RecipeService from '../services/RecipeService';
import IngredientForm from './IngredientForm';
import PreparationStepsForm from './PreparationStepsForm';
import {defaultInputFields} from '../utils/ingredirentInputField'

function CreateRecipeComponent(props) {
    const [inputFields, setInputFields] = useState([
        defaultInputFields(),
    ])

    const [name, setName] = useState('');
    const [courseType, setCourseType] = useState('');
    const [description, setDescription] = useState('');


    const changeRecipeNameHandler = (event) => {
        setName(event.target.value);
    }
    const changeCourseTypeHandler = (event) => {
        setCourseType(event.target.value);
    }
    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const saveRecipe = (r) => {
        r.preventDefault(); //prevents another HTTP request after form is submitted
        const recipe = {
            name,
            courseType,
            description,
            inputFields
        }

        //props.setRecipes([recipe, ...props.recipes])  
        console.log(recipe);

        //RecipeService.createRecipe(recipe);

    }
    const saveIngredientListHandler = (listOfIngredients) => {
        const ingredientList = {
            ...listOfIngredients
        };
        console.log(ingredientList);
    }




    // const passIngredientList = (ingredients) =>{
    //     ingredients.preventDefault();
    //     const ingredientList = {

    //     }
    // }

    //option 

    return (
        <div>
            <div className="container">
                <div className="row">

                    <h3 className="text-center">Create New Recipe Form</h3>
                    <div className="card-body">
                        <form onSubmit={saveRecipe}>
                            <div className="form-group">
                                <label>Recipe Name: </label>
                                <input placeholder="Recipe Name" name="name" className="form-control"
                                    value={name} onChange={changeRecipeNameHandler} />
                            </div>
                            <div className="form-group">
                                <label>Course Type: </label>
                                <input placeholder="Course Type" name="courseType" className="form-control"
                                    value={courseType} onChange={changeCourseTypeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Description </label>
                                <input placeholder="description" name="description" className="form-control"
                                    value={description} onChange={changeDescriptionHandler} />
                            </div>
                            <IngredientForm inputFields={inputFields} setInputFields={setInputFields} />
                            <PreparationStepsForm />
                            <button className="btn btn-success" type="submit" onClick={saveRecipe}>Save</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default CreateRecipeComponent;