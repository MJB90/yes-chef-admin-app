import React, { Component } from 'react';

import RecipeService from '../services/RecipeService';

class CreateRecipeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            recipeName: '',
            recipeUrl: '',
            ratings: 0
        }

        this.changeRecipeNameHandler = this.changeRecipeNameHandler.bind(this);
        this.changeRecipeUrlHandler = this.changeRecipeUrlHandler.bind(this);
        this.changeRatingsHandler = this.changeRatingsHandler.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    }
    changeRecipeNameHandler = (event) => {
        this.setState({recipeName: event.target.value});
    }
    changeRecipeUrlHandler = (event) => {
        this.setState({recipeUrl: event.target.value});
    }
    changeRatingsHandler = (event) => {
        this.setState({ratings: event.target.value});
    }

    saveRecipe = (r) =>{
        r.preventDefault();

        let recipe = {recipeName: this.state.recipeName, recipeUrl: this.state.recipeUrl, ratings: this.state.ratings};
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
                                            <input placeholder="Recipe Name" name="recipeName" className="form-control"
                                                value={this.state.recipeName} onChange={this.changeRecipeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Recipe Url: </label>
                                            <input placeholder="Recipe Url" name="recipeUrl" className="form-control"
                                                value={this.state.recipeUrl} onChange={this.changeRecipeUrlHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Ratings: </label>
                                            <input placeholder="Ratings" name="ratings" className="form-control"
                                                value={this.state.ratings} onChange={this.changeRatingsHandler}/>
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