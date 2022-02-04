import React, { Component } from 'react';

import RecipeService from '../services/RecipeService';

class CreateRecipeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            courseType: '',
            difficulty: ''
        }

        this.changeRecipeNameHandler = this.changeRecipeNameHandler.bind(this);
        this.changeCourseTypeHandler = this.changeCourseTypeHandler.bind(this);
        this.changeDifficultyHandler = this.changeDifficultyHandler.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    }
    changeRecipeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeCourseTypeHandler = (event) => {
        this.setState({courseType: event.target.value});
    }
    changeDifficultyHandler = (event) => {
        this.setState({difficulty: event.target.value});
    }

    saveRecipe = (r) =>{
        r.preventDefault();

        let recipe = {name: this.state.name, courseType: this.state.courseType, difficulty: this.state.difficulty};
        console.log('recipe =>' + JSON.stringify(recipe));

        RecipeService.createRecipe(recipe);

    }
    cancel(){
        //needs a fix
        this.props.history.push('/');
    }
    render() {
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
                                                value={this.state.name} onChange={this.changeRecipeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Course Type: </label>
                                            <input placeholder="Course Type" name="courseType" className="form-control"
                                                value={this.state.courseType} onChange={this.changeCourseTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Difficulty </label>
                                            <input placeholder="difficulty" name="difficulty" className="form-control"
                                                value={this.state.difficulty} onChange={this.changeDifficultyHandler}/>
                                        </div>

                                        <button className ="btn btn-success" onClick={this.saveRecipe}>Create</button>
                                        <button className ="btn btn-danger" onClick={this.cancel.bind(this)} style ={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default CreateRecipeComponent;