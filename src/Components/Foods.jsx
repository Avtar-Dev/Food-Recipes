import React, { useEffect, useState } from "react";
import { FaUtensils } from "react-icons/fa";
export default function Foods() {
  //  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const res = await fetch("http://192.168.1.68:3000/api/foods");
  //       const data = await res.json();

  //       if (data.success) {
  //         setRecipes(data.recipes);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching recipes:", error);
  //     }
  //   };

  //   fetchRecipes();
  // }, []);

  const worldFoods = [
    {
      name: "Italian",
      image: "/italian.jpg",
      description: "Pasta, pizza, and delicious cheeses from Italy.",
    },
    {
      name: "Indian",
      image: "/indian.jpg",
      description: "Spicy curries, biryanis, and street food delights.",
    },
    {
      name: "Japanese",
      image: "/japanese.jpeg",
      description: "Sushi, ramen, tempura, and elegant flavors.",
    },
    {
      name: "Mexican",
      image: "/mexican.jpg",
      description: "Tacos, burritos, guacamole, and vibrant flavors.",
    },
    {
      name: "French",
      image: "/french.jpg",
      description: "Croissants, baguettes, and gourmet cuisine.",
    },
    {
      name: "Thai",
      image: "/thai.jpg",
      description: "Coconut curries, pad thai, and fresh herbs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            <span className="mr-2">🌍</span>
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 text-transparent bg-clip-text">
              Worlds Food
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-pink-600 font-medium max-w-2xl mx-auto leading-relaxed animate-bounce-slow">
            Discover a variety of{" "}
            <span className="text-orange-500 font-semibold">Traditional</span>{" "}
            and <span className="text-blue-500 font-semibold">Modern</span>{" "}
            dishes from around the globe.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer">
          {worldFoods.map((food, index) => (
            <div
              // onClick={()=>Handle(food.)}
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:scale-103">
              {/* Image with zoom effect */}
              <div className="overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-100"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaUtensils className="text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition">
                    {food.name}
                  </h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed italic font-serif tracking-wide max-w-prose mx-auto group-hover:text-green-700 transition-colors duration-300">
                  {food.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// {
//   "name": "Butter Chicken",
//   "description": "A rich and creamy tomato-based curry made with marinated grilled chicken pieces.",
//   "ingredients": "Chicken, yogurt, butter, cream, tomatoes, garlic, ginger, garam masala, chili powder, coriander, cumin",
//   "equipments": "Pan, bowl, blender, spatula, knife",
//   "steps": "1. Marinate chicken in yogurt and spices.\n2. Grill the marinated chicken.\n3. Prepare tomato gravy with butter and spices.\n4. Blend the gravy for a smooth texture.\n5. Add grilled chicken and simmer.\n6. Finish with cream and serve hot with naan or rice.",
//   "category": "indian",
//   "image": {
//     "name": "butter-chicken.jpg",
//     "data": "",
//     "contentType": "image/jpeg"
//   }
// }

// {
//   "name": "Spaghetti Carbonara",
//   "description": "A classic Roman pasta dish made with eggs, cheese, pancetta, and black pepper.",
//   "ingredients": "Spaghetti, pancetta, eggs, Parmesan cheese, black pepper, salt",
//   "equipments": "Pot, pan, bowl, whisk, fork",
//   "steps": "1. Cook spaghetti al dente.\n2. Sauté pancetta until crispy.\n3. Whisk eggs and Parmesan together.\n4. Mix hot pasta with pancetta and remove from heat.\n5. Quickly stir in egg mixture to create a creamy sauce.\n6. Season with black pepper and serve immediately.",
//   "category": "italian",
//   "image": {
//     "name": "carbonara.jpg",
//     "data": "",
//     "contentType": "image/jpeg"
//   }
// }

// {
//   "name": "Pad Thai",
//   "description": "Thailand’s famous stir-fried rice noodle dish with eggs, tofu, shrimp, and a tangy sauce.",
//   "ingredients": "Rice noodles, shrimp, eggs, tofu, bean sprouts, garlic, peanuts, lime, tamarind paste, fish sauce, palm sugar",
//   "equipments": "Wok, spatula, knife, bowl",
//   "steps": "1. Soak rice noodles.\n2. Prepare sauce with tamarind paste, fish sauce, and palm sugar.\n3. Stir-fry garlic and tofu.\n4. Add shrimp and scrambled eggs.\n5. Mix in noodles and sauce.\n6. Toss in bean sprouts and peanuts.\n7. Serve with lime wedges.",
//   "category": "thai",
//   "image": {
//     "name": "pad-thai.jpg",
//     "data": "",
//     "contentType": "image/jpeg"
//   }
// }
