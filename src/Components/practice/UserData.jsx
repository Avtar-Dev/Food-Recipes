import React, { useEffect, useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(200);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetch(
        `https://api.farcaster.xyz/v2/all-channels?limit=${num}`
      );
      const res = await data.json();
      setData(res.result.channels);
    };

    dataFetch();
  }, []);

  console.log(data);

  return (
    <div className="grid grid-cols-3 px-4 py-4 my-auto mx-auto">
      {data.map((items) => {
        return (
          <div key={items?.id} className="max-w-fit">
            <img src={items.imageUrl} alt="" className="h-60 w-60" />
            <h1 className="font-bold">{items?.name}</h1>
            <h3 className="font-medium max-w-60">{items?.description}</h3>
            <h5 className="font-light">{items?.followerCount}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default UserData;

// https://api.farcaster.xyz/v2/all-channels
