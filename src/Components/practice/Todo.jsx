import React, { useState } from "react";

const Todo = () => {
  const [userVal, setUserVal] = useState("");
  const [userData, setUserData] = useState([]);
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  const AddHandle = () => {
    if (!userVal.trim()) return;
    setUserData([...userData, userVal]);
    setUserVal("");
  };

  const CheckHandle = (index) => {
    if (checkedIndexes.includes(index)) {
      setCheckedIndexes(checkedIndexes.filter((i) => i !== index));
    } else {
      setCheckedIndexes([...checkedIndexes, index]);
    }
  };

  return (
    <div className="flex-1">
      <div className="mt-3 flex justify-center">
        <input
          type="text"
          placeholder="Enter Text"
          className="border-1 border-black p-2 rounded-sm"
          value={userVal}
          onChange={(e) => setUserVal(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white p-2 ml-3 rounded-md"
          onClick={AddHandle}>
          Add
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="font-bold">Todo List</h1>
        <div className="flex flex-col gap-4">
          {userData.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <p
                className={
                  checkedIndexes.includes(index) ? "line-through" : ""
                }>
                {item}
              </p>
              <input
                type="checkbox"
                onChange={() => CheckHandle(index)}
                checked={checkedIndexes.includes(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
