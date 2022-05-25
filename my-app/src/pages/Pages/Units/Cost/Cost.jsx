import { Slider } from "@mui/material";
import React from "react";
import "./Cost.css";

function Costs({
  valueWood,
  setValueWood,
  valueFood,
  setValueFood,
  valueGold,
  setValueGold,
  woodCheck,
  setWoodCheck,
  foodCheck,
  setFoodCheck,
  goldCheck,
  setGoldCheck,
}) {
  const changeValueWood = (event, value) => {
    setValueWood(value);
  };
  const changeValueFood = (event, value) => {
    setValueFood(value);
  };
  const changeValueGold = (event, value) => {
    setValueGold(value);
  };
  const getText = (value) => {
    return `${value}`;
  };

  return (
    // Costs Components JSX Codes START
    <>
      <div className="main row">
        <div className="col-2">
          <input
            type="checkbox"
            className="me-2"
            onChange={() => {
              setWoodCheck(!woodCheck);
            }}
          />
          Wood
        </div>
        <Slider
          className="slider col"
          size="small"
          min={0}
          max={200}
          disabled={woodCheck}
          value={valueWood}
          onChange={changeValueWood}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div className="main row">
        <div className="col-2">
          <input
            type="checkbox"
            className="me-2"
            onChange={() => setFoodCheck(!foodCheck)}
          />
          Food
        </div>
        <Slider
          className="slider col"
          size="small"
          min={0}
          max={200}
          //   marks
          disabled={foodCheck}
          value={valueFood}
          onChange={changeValueFood}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div className="main row">
        <div className="col-2">
          <input
            type="checkbox"
            className="me-2"
            onChange={() => setGoldCheck(!goldCheck)}
          />
          Gold
        </div>
        <Slider
          className="slider col"
          size="small"
          min={0}
          max={200}
          disabled={goldCheck}
          value={valueGold}
          onChange={changeValueGold}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
    </>
    //END
  );
}

export default Costs;
