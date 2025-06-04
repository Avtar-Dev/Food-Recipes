import React, { useState } from "react";

export default function NewRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    description: "",
    equipments: "",
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

  const fetchData = async () => {
    const formData = new FormData();
    formData.append("name", recipe.name);
    formData.append("description", recipe.description);
    formData.append("ingredients", recipe.ingredients);
    formData.append("equipments", recipe.equipments);
    formData.append("steps", recipe.steps);
    formData.append("category", recipe.category);
    formData.append("image", recipe.image); // file object

    await fetch("http://192.168.1.68:3000/api/submitrecipe", {
      method: "POST",
      body: formData,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecipe({
      name: "",
      description: "",
      ingredients: "",
      equipments: "",
      steps: "",
      category: "",
      image: null,
    });
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
              placeholder="Recipe Name"
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

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={recipe.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Equipments */}
          <div>
            <label
              htmlFor="equipments"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Equipments
            </label>
            <textarea
              id="equipments"
              name="equipments"
              placeholder="List each equipments on a new line"
              value={recipe.equipments}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
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
              rows={5}
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
              rows={6}
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
              onClick={fetchData}
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
