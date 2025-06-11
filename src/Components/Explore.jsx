import Loader from "./Loader";
import React, { useEffect, useState } from "react";

const exploreItems = [
  "Recipe Videos",
  "World Cuisines",
  "Chef Tips & Hacks",
  "Healthy Alternatives",
  "Street Food Tours",
  "Cooking Equipment",
];

export default function Explore() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://192.168.1.6:3000/api/youtube");
        const data = await res.json();
        if (data.success) {
          setVideos(data.recipes);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-white px-4 py-10">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent mb-4">
              <h1 className="p-2">Explore Recipes from Around the World</h1>
            </div>
            <p className="text-center text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-12 px-4 sm:px-0 transition duration-300 hover:text-gray-900">
              <span className="inline-block bg-yellow-100 px-2 py-1 rounded-md shadow-sm hover:bg-yellow-200 transition">
                Dive into delicious cultures
              </span>{" "}
              with curated videos,{" "}
              <span className="font-medium text-green-700">
                pro kitchen tips
              </span>
              , and{" "}
              <span className="italic text-red-600">international flavors</span>
              .
            </p>

            {/* Video Section */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300">
                  <iframe
                    className="w-full h-56"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                  <div className="p-4 whitespace-nowrap">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {video.title.length > 40
                        ? video.title.substring(0, 40) + "..."
                        : video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Categories */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                What can you explore?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {exploreItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white py-6 px-4 rounded-xl shadow hover:shadow-lg transition text-sm font-medium text-gray-800 hover:text-green-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
