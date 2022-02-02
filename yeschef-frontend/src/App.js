import logo from './logo.svg';
import './App.css';import {BrowserRouter,Routes,Route} from "react-router-dom";
import ListRecipeComponent from './components/ListRecipeComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              
              <Route path = "/" element={<ListRecipeComponent />}/> 
              <Route path = "/recipes" element={<ListRecipeComponent />}/>
              <Route path = "/createRecipe" element={<CreateRecipeComponent />}/>
              
            </Routes>
          </div>
        <FooterComponent/>
    </div>
  );
}

export default App;

// .com/ -> all recipe list
// .com/createRecipe ->Create recipe form
