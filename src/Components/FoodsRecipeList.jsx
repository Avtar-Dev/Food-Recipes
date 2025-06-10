import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function FoodsRecipeList() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  console.log("category", category);

  const filterValue = useSelector((state) => state.filterFoods);

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

  const filterRecipe = recipes.filter(
    (recipe) => recipe?.category?.toLowerCase() === category?.toLowerCase()
  );
  return (
    <div className="flex-1 max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        All Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterRecipe?.map(({ _id, name, category, description, imageUrl }) => (
          <div
            key={_id}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/foodsrecipelist/${_id}`)}>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">{name}</h3>
              <p className="text-gray-600 text-sm mt-1 italic">
                Category: {category}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-3">
                {description.length > 60
                  ? description.substring(0, 60) + "..."
                  : description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
