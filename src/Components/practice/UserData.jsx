import React, { useEffect, useState } from "react";
import Loader from "../Loader";

const UserData = () => {
  const [allData, setAllData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 20;

  // Step 1: Fetch all data once
  useEffect(() => {
    const dataFetch = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.farcaster.xyz/v2/all-channels`);
        const json = await res.json();
        setAllData(json.result.channels || []);
        // Load first 20
        setVisibleData(json.result.channels.slice(0, perPage));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  // Step 2: Load more on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 300 &&
        !loading
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleData, allData, loading]);

  // Step 3: Load more data
  const loadMore = () => {
    setLoading(true);
    const nextPage = page + 1;
    const nextData = allData.slice(0, nextPage * perPage);
    setVisibleData(nextData);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="text-center mx-auto flex py-4 text-purple-500 font-semibold">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-3 gap-6 px-4 py-4 flex-1">
        {visibleData.map((item) => (
          <div key={item.id} className="max-w-fit">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-60 w-60 object-cover"
            />
            <h1 className="font-bold">{item.name}</h1>
            <h3 className="font-medium max-w-60 truncate">
              {item.description}
            </h3>
            <h5 className="font-light">{item.followerCount}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserData;
