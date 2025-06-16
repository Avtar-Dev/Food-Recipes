import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.1.68:3000/api/recipes");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      setRecipes(result.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-1 max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-12">
            🍽️ Delicious Recipes
          </h1>
          <div className="text-center mb-10 flex gap-2 justify-center">
            <Link
              to="/newRecipe"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out">
              🍳 Submit Your Recipe
            </Link>
            <Link
              to="/submitRecipes"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out">
              Community Recipes
            </Link>
          </div>
        </div>
      )}

      <div className="space-y-12">
        {recipes.map((recipe, idx) => (
          <article
            key={idx}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <header className="bg-gradient-to-r from-orange-100 to-orange-200 p-6">
              <h2 className="text-3xl font-bold text-orange-700">
                {recipe.name}
              </h2>
            </header>

            {/* Sections */}
            <div className="p-6 space-y-6">
              {recipe.sections?.map((section, sidx) => (
                <section key={sidx} className="mb-6">
                  <h3 className="text-xl font-semibold text-orange-700 mb-2 border-b border-orange-200 pb-1">
                    {section.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
                    {section.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
