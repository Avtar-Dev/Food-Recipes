import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function SubmitRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://192.168.1.70:3000/api/submitrecipe");
        const data = await res.json();
        if (data.success) {
          setRecipes(data.recipes);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center cursor-pointer">
        {loading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <div className="flex gap-2 justify-center items-center">
              <span role="img" aria-label="chef hat" className="text-5xl">
                👩‍🍳
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent py-4 leading-tight flex items-center justify-center gap-3">
                Community Recipes
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-8 tracking-wide italic font-medium drop-shadow-sm">
              Discover and share mouth-watering recipes crafted by passionate
              food lovers worldwide.
            </p>
          </>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
          {recipes.map(({ name, category, description, imageUrl }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-green-900 tracking-wide mb-2 drop-shadow-sm">
                  {name}
                </h3>
                <p className="text-sm text-green-700 font-medium uppercase tracking-wider mb-2">
                  <strong>Category:</strong> {category}
                </p>
                <p className="text-base text-gray-700 leading-8 tracking-wide font-light italic max-w-3xl mx-auto sm:px-0 px-6 shadow-sm bg-yellow-50 rounded-md">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
