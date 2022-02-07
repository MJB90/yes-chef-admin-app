import React, { useState,Component } from 'react';

import RecipeService from '../services/RecipeService';

function CreateRecipeComponent (props) {
 
    const [name, setName] = useState('');
    const [courseType, setCourseType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    
   
    const changeRecipeNameHandler = (event) => {
        setName(event.target.value);
    }
    const changeCourseTypeHandler = (event) => {
        setCourseType(event.target.value);
    }
    const changeDifficultyHandler = (event) => {
        setDifficulty(event.target.value);
    }

    const saveRecipe = (r) =>{
        r.preventDefault(); //prevents another HTTP request after form is submitted
        const recipe ={
            name : name,
            courseType : courseType,
            difficulty : difficulty
        }

        //props.setRecipes([recipe, ...props.recipes])  
        console.log(recipe);
        RecipeService.createRecipe(recipe);

    }

    //option 

    return (
            <div>
                <div className="container">
                        <div className = "row">
                            <div className = "card cik-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Create New Recipe Form</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Recipe Name: </label>
                                            <input placeholder="Recipe Name" name="name" className="form-control"
                                                value={name} onChange={changeRecipeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Course Type: </label>
                                            <input placeholder="Course Type" name="courseType" className="form-control"
                                                value={courseType} onChange={changeCourseTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Difficulty </label>
                                            <input placeholder="difficulty" name="difficulty" className="form-control"
                                                value={difficulty} onChange={changeDifficultyHandler}/>
                                        </div>
                                        <button className ="btn btn-success" onClick={saveRecipe}>Create</button>                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }


export default CreateRecipeComponent;