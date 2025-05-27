import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
const Foods = () => {
  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("home", result);

      setDescription(result.categories);
      setLoading(false);

      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-1">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-orange-600 text-3xl font-bold flex justify-center mb-6 mt-4">
          Menu
        </div>
      )}

      {description.map((item) => (
        <div
          key={item.idCategory}
          className="
          ml-[30%] w-[700px] mt-[20px]">
          <h1>
            <b>{item.strCategory}</b>
          </h1>
          <img src={item.strCategoryThumb} alt="" />
          <h4>{item.strCategoryDescription}</h4>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Foods;
