import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Foods from "./Components/Foods";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Footer from "./Components/Footer";
import Explore from "./Components/Explore";
import NewRecipe from "./Components/NewRecipe";
import SubmitRecipes from "./Components/SubmitRecipes";
import RecipeDetails from "./Components/RecipeDetails.jsx";
import FoodsRecipeList from "./Components/FoodsRecipeList.jsx";
import FoodsByCategory from "./Components/FoodsByCategory.jsx";
import Debouncing from "./Components/Debouncing.jsx";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/newRecipe" element={<NewRecipe />} />
            <Route path="/submitRecipes" element={<SubmitRecipes />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/foodsrecipelist" element={<FoodsRecipeList />} />
            <Route path="/foodsrecipelist/:id" element={<FoodsByCategory />} /> */}
            <Route path="/" element={<Debouncing />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
