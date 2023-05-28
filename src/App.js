import React, { useState, useEffect } from "react";
import LowerSelect from "./components/lowerSelect";
import UpperSelect from "./components/upperSelect";

function App() {
  const [listValues, setListValue] = useState({});

  const setDefault = () => {
    const newValue = {
      value: "true",

      argument: "My Arg",
    };
    listValues["-1"] = newValue;
    setListValue(listValues);
  };

  useEffect(setDefault, []);

  const handleSelects = (event, index) => {
    const foundValue = event.target.value;

    if (foundValue === "true" || foundValue === "false") {
      console.log("boolean value found ", event.target.value);

      const newValue = {
        ...listValues[`${index}`],
        value: event.target.value,
      };

      listValues[`${index}`] = newValue;
      setListValue(listValues);
      console.log("listvalue", listValues);
    } else {
      console.log("argument change found", event.target.value);
      let newValue = {};
      if (index == -1) {
        newValue = {
          ...listValues[`${index}`],
          argument: "My Arg",
        };
      }
      newValue = {
        ...listValues[`${index}`],
        argument: event.target.value,
      };
      listValues[`${index}`] = newValue;
      setListValue(listValues);
      console.log("listvalue", listValues);
    }

    console.log("index", index);

    //a map of index and event.target.value
  };
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const defaultOptions = [
    <option value="constant">constant</option>,
    <option value="argument">argument</option>,
    <option value="and">and</option>,
    <option value="or">or</option>,
  ];
  const [selectOptions, setselectOptions] = useState(defaultOptions);
  const [selectOptionsSecond, setSelectOptionsSecond] =
    useState(defaultOptions);

  const [currentOperation, setCurrentOperation] = useState("");

  // lower selct element
  const customhandleClick = (event, option = null) => {
    let selectOptions = [];
    try {
      console.log("handle select cli", event.target.value);
      if (event.target.value) {
        switch (event.target.value) {
          case "constant":
            console.log("inside constant");
            selectOptions = [
              <option value="true">true</option>,
              <option value="false">false</option>,
            ];
            // setCurrentOperation("constant");
            if (!option) {
              setselectOptions(selectOptions);
            }
            if (option == "second") {
              setSelectOptionsSecond(selectOptions);
            }
            break;
          case "argument":
            console.log("inside argument");
            // set selectOptions with arguments
            for (const [argument, argumentValue] of Object.entries(
              listValues
            )) {
              selectOptions.push(
                <option value={argumentValue.value}>
                  {argumentValue.argument}
                </option>
              );
            }
            if (!option) {
              setselectOptions(selectOptions);
            }
            if (option == "second") {
              setSelectOptionsSecond(selectOptions);
            }
            break;

          case "and":
            console.log("inside and");

            // insert two select box with default select options
            // set a new state variable with

            if (!option) {
              setCurrentOperation("and");
              setselectOptions(defaultOptions);
            }
            if (option == "second") {
              setCurrentOperation("and");
              setSelectOptionsSecond(defaultOptions);
            }

            break;
          case "or":
            console.log("inside or");
            setCurrentOperation("or");
            setselectOptions(defaultOptions);
            break;
          default:
            console.log("not a valid option selcted");
        }
      }
    } catch (err) {
      console.log("err at handleSeleted ", err);
      return;
    }
  };

  const customhandleClickAnd = () => {};

  return (
    <>
      <UpperSelect
        val={val}
        handleSelects={handleSelects}
        handleAdd={handleAdd}
      />

      <LowerSelect
        customhandleClick={customhandleClick}
        selectOptions={selectOptions}
        currentOperation={currentOperation}
        customhandleClickAnd={customhandleClickAnd}
        selectOptionsSecond={selectOptionsSecond}
      />
    </>
  );
}

export default App;
