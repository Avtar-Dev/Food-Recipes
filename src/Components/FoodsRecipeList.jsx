import { useEffect, useState } from "react";

export default function FoodsRecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("http://192.168.1.68:3000/api/foods");
        const data = await res.json();

        if (data.success) {
          setRecipes(data.recipes);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="flex-1 max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        All Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {recipe.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1 italic">
                Category: {recipe.category}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-3">
                {recipe.description}
              </p>
              <details className="mt-3">
                <summary className="text-sm text-blue-600 cursor-pointer">
                  View Full Recipe
                </summary>
                <ul className="mt-2 text-sm text-gray-800 list-disc list-inside space-y-1">
                  <li>
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </li>
                  <li>
                    <strong>Equipments:</strong> {recipe.equipments}
                  </li>
                  <li>
                    <strong>Steps:</strong>{" "}
                    <pre className="whitespace-pre-wrap">{recipe.steps}</pre>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
