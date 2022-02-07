
import React, { useState, useEffect, useCallback } from 'react';
import RecipeContainer from './RecipeContainer';

function ListRecipeComponent () {
       
    const [recipes, setRecipes] = useState( [] );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const fetchAllRecipesHandler = useCallback (async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8090/api/v1/recipes');
            if (!response.ok){
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            //to fetch sub-document, for example nutrition-calories -> data.nutrition.map ((nutritionData) => { return fat: recipeData.fat,...})

            const transformedRecipes = data.map((recipeData) => {
                return {
                    id: recipeData.id,
                    name: recipeData.name,
                    description: recipeData.description,
                    imageUrl: recipeData.imageUrl,
                    cuisineType: recipeData.cuisineType,
                    courseType: recipeData.courseType,
                    technique: recipeData.technique,
                    prepTime: recipeData.prepTime,
                    noOfServings: recipeData.noOfServings,
                    calories: recipeData.calories,
                    ingredients: recipeData.ingredients,
                    prepSteps: recipeData.prepSteps,
                    nutrition: recipeData.nutrition,
                    userReviews: recipeData.userReviews,
                    difficulty: recipeData.difficulty     
                };
            });

            setRecipes(transformedRecipes);
        } catch (error){
            setError(error.message);
        }
        setIsLoading(false);
        
    },[]);

    useEffect(() =>{
        fetchAllRecipesHandler();
    },[fetchAllRecipesHandler]);

    let content = <p>Found no recipes</p>;

    if (recipes.length > 0 ){
        content = <RecipeContainer recipes = {recipes} />;
    }

    if (error){
        content = <p>{error}</p>
    }

    if (isLoading){
        content = <p>Loading...</p>
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchAllRecipesHandler}> Fetch Recipes </button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );

}
export default ListRecipeComponent;