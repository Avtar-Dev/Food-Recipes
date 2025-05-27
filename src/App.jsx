import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Foods from "./Components/Foods";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Footer from "./Components/Footer";
import NewRecipe from "./Components/NewRecipe";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/newRecipe" element={<NewRecipe />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
