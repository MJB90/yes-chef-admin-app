import React, { Component } from 'react';

class ListRecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state ={
            recipes: []
        }
    }

    render() {
        return (
            <div>
                <h2 className ="text-center">Recipe List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Recipe Description</th> 
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.recipes.map(
                                    recipe =>
                                    <tr key = {recipe.id}>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.description}</td>  
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