import * as React from "react";

const UpperSelect = ({ val, handleSelects, handleAdd }) => {
  return (
    <>
      <div className="flex">
        <div className="border-2 border-zinc-500 rounded text-lg font-semibold w-32 px-2">
          My Arg
        </div>

        <select
          onChange={(e) => handleSelects(e, -1)}
          className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-18"
        >
          <option>true</option>
          <option>false</option>
        </select>
      </div>
      {val.map((data, i) => {
        return (
          <div className="flex" onChange={(e) => handleSelects(e, i)}>
            <input
              className="border-2 border-zinc-500 rounded text-lg font-semibold w-32 px-2"
              placeholder="My Arg"
            />

            <select
              onChange={(e) => handleSelects(e)}
              className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-18"
            >
              <option>true</option>
              <option>false</option>
            </select>
          </div>
        );
      })}
      <button
        onClick={(e) => handleAdd(e)}
        className="flex items-center justify-center w-28 border-2 font-semibold border-zinc-500 rounded text-lg px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <div>add arg</div>
      </button>
    </>
  );
};

export default UpperSelect;
