import * as React from "react";
import GetSelect from "./getSelect";

const LowerSelect = ({
  customhandleClick,
  selectOptions,
  currentOperation,
  customhandleClickAnd,
  selectOptionsSecond,
}) => {
  return (
    <>
      <GetSelect
        customhandleClick={customhandleClick}
        selectOptions={selectOptions}
        currentOperation={currentOperation}
        customhandleClickAnd={customhandleClickAnd}
        selectOptionsSecond={selectOptionsSecond}
      />
      <div>
        <button className=" box-border w-8 h-8 border-2 rounded border-zinc-500 bg-slate-200 font-semibold text-lg ">
          x
        </button>
      </div>
      <div className="text-lg font-semibold my-6">result: </div>
    </>
  );
};

export default LowerSelect;
