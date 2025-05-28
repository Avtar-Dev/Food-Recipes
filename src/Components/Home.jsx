import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    "Indian Curries",
    "Healthy Salads",
    "Pasta & Noodles",
    "Desserts & Baking",
    "Snacks & Quick Bites",
    "Drinks & Smoothies",
  ];
  return (
    <div className="flex flex-col items-center p-6 space-y-10">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          Discover Delicious Recipes, Made Simple 🍲
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore hundreds of easy, tasty, and authentic recipes from around the
          world. Whether you're a beginner or a home chef — we've got something
          delicious for you.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/recipes")}>
            Browse Recipes
          </button>
          <button
            onClick={() => navigate("/newRecipe")}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300">
            Submit Your Own
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-sm:flex max-sm:flex-col max-sm:items-center max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li>✅ Step-by-Step Guidance</li>
          <li>✅ Real Ingredients</li>
          <li>✅ Trusted Recipes</li>
          <li>✅ Global Flavors</li>
        </ul>
      </section>

      {/* Categories */}
      <section className="max-sm:flex max-sm:flex-col max-sm:items-center max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Categories We Cover</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {categories?.map((cat, i) => (
            <div key={i} className="bg-orange-100 p-4 rounded-xl shadow-sm">
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Community Callout */}
      <section className="bg-gray-50 w-full text-center p-6 rounded-xl shadow-inner">
        <h2 className="text-xl font-semibold mb-2">Cook. Click. Share.</h2>
        <p className="text-gray-600">
          Share your own food journey! Upload your recipes with photos and get
          featured in our community.
        </p>
      </section>

      {/* Newsletter */}
      <section className="bg-orange-50 w-full max-w-2xl text-center flex flex-col items-center p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">Join Our Foodie Family</h2>
        <p className="text-gray-600 mb-4">
          Sign up for weekly new recipes, cooking tips, and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl border border-gray-300 focus:ring focus:ring-orange-500 focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:scale-103 transition-transform duration-100">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm pt-10 border-t w-full text-center">
        Made with ❤️ by food lovers, for food lovers.
      </footer>
    </div>
  );
};
export default Home;
