import axios from 'axios';

const RECIPE_API_BASE_URL = 'http://localhost:8090/api/v1/recipes';

class RecipeService{

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL);
    }

    createRecipe(recipe){
        return axios.post("http://localhost:8090/api/v1/createRecipe",recipe);
    }
}

export default new RecipeService()