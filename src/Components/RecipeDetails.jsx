import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `http://192.168.1.70:3000/api/submitrecipe/${id}`
        );
        const data = await res.json();
        setRecipe(data.recipe);
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex-1 bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-12">
          {/* Title & Description */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {recipe.name}
          </h1>
          <p className="mt-4 text-gray-700 text-lg italic leading-relaxed">
            {recipe.description}
          </p>

          {/* Details Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Category & Ingredients */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Category
                </h2>
                <p className="text-gray-700">{recipe.category}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Ingredients
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {recipe.ingredients}
                </p>
              </div>
            </div>

            {/* Right Column: Equipments & Steps */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Equipments
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {recipe.equipments}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Steps
                </h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
                  {recipe.steps.split(/(?:\r\n|\r|\n)/).map((step, idx) => (
                    <li key={idx}>{step.trim()}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
