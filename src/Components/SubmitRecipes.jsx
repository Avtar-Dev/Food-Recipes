// import React from "react";

// export default function SubmitRecipes() {
//   const recipes = [
//     {
//       name: "Spicy Indian Curry",
//       category: "Dinner",
//       description:
//         "A flavorful curry with bold spices, tender meat, and rich gravy.",
//       image: "/spicyCurry.jpg",
//     },
//     {
//       name: "Creamy Alfredo Pasta",
//       category: "Lunch",
//       description:
//         "Silky cream sauce tossed with fettuccine and parmesan cheese.",
//       image: "/pasta.jpg",
//     },
//     {
//       name: "Chocolate Lava Cake",
//       category: "Dessert",
//       description:
//         "Rich, gooey chocolate cake with a molten center. A sweet indulgence!",
//       image: "/chocolateLava.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-white py-10 px-4">
//       <div className="max-w-6xl mx-auto text-center cursor-pointer">
//         <div className="flex gap-2 justify-center items-center">
//           <span role="img" aria-label="chef hat" className="text-5xl">
//             👩‍🍳
//           </span>
//           <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent py-4 leading-tight flex items-center justify-center gap-3">
//             Community Recipes
//           </h1>
//         </div>
//         <p className="text-gray-600 text-lg max-w-xl mx-auto leading-8 tracking-wide italic font-medium drop-shadow-sm">
//           Discover and share mouth-watering recipes crafted by passionate food
//           lovers worldwide.
//         </p>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
//           {recipes.map(({ name, category, description, image }, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-5 text-left">
//                 <h3 className="text-xl font-bold text-green-900 tracking-wide mb-2 drop-shadow-sm">
//                   {name}
//                 </h3>
//                 <p className="text-sm text-green-700 font-medium uppercase tracking-wider mb-2">
//                   <strong>Category:</strong> {category}
//                 </p>
//                 <p className="text-base text-gray-700 leading-8 tracking-wide font-light italic max-w-3xl mx-auto sm:px-0 px-6 shadow-sm bg-yellow-50 rounded-md">
//                   {description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// ImageGallery.jsx
import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    try {
      const res = await fetch("http://192.168.1.70:3000/api/submitrecipe");
      const data = await res.json();

      if (data.success) {
        setImages(data.recipes);
      } else {
        setError("Failed to fetch images");
      }
    } catch (err) {
      setError("Error fetching images: " + err.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Uploaded Images</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img._id} className="border rounded shadow p-3">
            <h3 className="font-medium mb-2">{img.name}</h3>
            {img.imageUrl ? (
              <img
                src={img.imageUrl}
                alt={img.name}
                className="w-full h-auto rounded"
              />
            ) : (
              <p className="text-sm text-gray-500">No image available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
