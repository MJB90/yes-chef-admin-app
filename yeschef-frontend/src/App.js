import logo from './logo.svg';
import './App.css';import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListRecipeComponent from './components/ListRecipeComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import IngredientForm from './components/IngredientForm';
import PreparationStepsForm from './components/PreparationStepsForm';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path ="/ingredientForm" element={<IngredientForm/>}/>
              <Route path = "/" element={<ListRecipeComponent />}/> 
              <Route path = "/recipes" element={<ListRecipeComponent />}/>
              <Route path = "/createRecipe" element={<CreateRecipeComponent />}/>
              <Route path = "/preparationStepsForm" element={<PreparationStepsForm/>}/>
              <Route path = "/adminDashboard" element={<AdminDashboard/>}/>
            
            </Routes>
          </div>
        <FooterComponent/>
    </div>
  );
}

export default App;

// .com/ -> all recipe list
// .com/createRecipe ->Create recipe form
