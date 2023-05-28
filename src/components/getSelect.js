import * as React from "react";

const GetSelect = ({
  customhandleClick,
  selectOptions,
  currentOperation,
  customhandleClickAnd,
  selectOptionsSecond,
}) => {
  let component = (
    <>
      <select
        onChange={(event) => customhandleClick(event)}
        className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
      >
        <option value="select">select...</option>
        {selectOptions.map((eachOption) => eachOption)}
      </select>
    </>
  );
  if (currentOperation === "and") {
    component = (
      <div className="container">
        <div className="flex flex-col">
          <select
            onChange={(event) => customhandleClick(event)}
            className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
          >
            <option value="select">and</option>
            {selectOptions.map((eachOption) => eachOption)}
          </select>

          <select
            onChange={(event) => customhandleClick(event)}
            className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
          >
            <option value="select">select...</option>
            {selectOptions.map((eachOption) => eachOption)}
          </select>

          <select
            onChange={(event) => customhandleClick(event, "second")}
            className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
          >
            <option value="select">select...</option>
            {selectOptionsSecond.map((eachOption) => eachOption)}
          </select>
        </div>
      </div>
    );
  } else if (currentOperation === "or") {
    component = (
      <div className="container">
        <div className="flex flex-col">
          <select
            onChange={(event) => customhandleClick(event)}
            className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
          >
            <option value="select">or</option>
            {selectOptions.map((eachOption) => eachOption)}
          </select>

          <select
            onChange={(event) => customhandleClick(event)}
            className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
          >
            <option value="select">select...</option>
            {selectOptions.map((eachOption) => eachOption)}
          </select>

          <select
            onChange={(event) => customhandleClick(event, "second")}
            className="border-2 border-zinc-500 rounded text-lg font-semibold px-1 w-32 mt-6"
          >
            <option value="select">select...</option>
            {selectOptionsSecond.map((eachOption) => eachOption)}
          </select>
        </div>
      </div>
    );
  }

  return component;
};

export default GetSelect;
