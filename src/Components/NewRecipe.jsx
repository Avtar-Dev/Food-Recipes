import React, { useState } from "react";

export default function NewRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    steps: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          🍽️ Submit Your Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Recipe Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={recipe.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">Select a category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
            </select>
          </div>

          {/* Ingredients */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              rows={4}
              placeholder="List each ingredient on a new line"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
          </div>

          {/* Preparation Steps */}
          <div>
            <label
              htmlFor="steps"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Preparation Steps
            </label>
            <textarea
              id="steps"
              name="steps"
              value={recipe.steps}
              onChange={handleChange}
              rows={5}
              placeholder="Step-by-step instructions"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Upload an Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 bg-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 cursor-pointer">
              📤 Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
