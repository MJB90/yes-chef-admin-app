import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeService from '../services/RecipeService';

class ListRecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            recipes: []
        }
        this.createRecipe = this.createRecipe.bind(this);
    }
    //componentdidmount is best place to call api
    componentDidMount(){
        
        RecipeService.getRecipes().then((res)=> {
            this.setState({recipes: res.data});
        });


    }
    
    createRecipe(){
        
        this.props.history.push('/createRecipe');
    }

    render() {
        return (
            <div>
                <h2 className ="text-center">Recipe List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.createRecipe}>Create New Recipe</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Course Type</th>
                                <th>Difficulty</th> 
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.recipes.map(
                                    recipe =>
                                    <tr key = {recipe.id}>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.courseType}</td>
                                        <td>{recipe.difficulty}</td>  
                                    </tr>


                                )   
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default ListRecipeComponent;