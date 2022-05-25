import React, { useEffect, useState } from "react";
import Ages from "./Age/Age";
import Datatable from "./Table/Datatable";
import AgeOf from "../../../age-of-empires-units.json";
import Costs from "./Cost/Cost";

// const allAges = ["All", ...new Set(AgeOf.units.map((item) => item.age))];

function Units({ productId, setProductId }) {
  const [btnState, setBtnState] = useState(1);
  const [valueWood, setValueWood] = useState([0, 200]);
  const [valueFood, setValueFood] = useState([0, 200]);
  const [valueGold, setValueGold] = useState([0, 200]);
  const [woodCheck, setWoodCheck] = useState(true);
  const [foodCheck, setFoodCheck] = useState(true);
  const [goldCheck, setGoldCheck] = useState(true);
  const [menuItem, setMenuItem] = useState(AgeOf.units);

  /* Display codes of filered datas START */
  useEffect(() => {
    if (woodCheck === false && foodCheck === false && goldCheck === false) {
      setMenuItem([]);
      return;
    }
    if (
      woodCheck === true &&
      foodCheck === true &&
      goldCheck === true &&
      btnState === 1
    ) {
      setMenuItem(AgeOf.units);
      return;
    }
    if (
      woodCheck === true &&
      foodCheck === true &&
      goldCheck === true &&
      btnState === 2
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) => unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    }
    if (
      woodCheck === true &&
      foodCheck === true &&
      goldCheck === true &&
      btnState === 3
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) => unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    }
    if (
      woodCheck === true &&
      foodCheck === true &&
      goldCheck === true &&
      btnState === 4
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) => unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    }
    if (
      woodCheck === true &&
      foodCheck === true &&
      goldCheck === true &&
      btnState === 5
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) => unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    }

    if (woodCheck === false && foodCheck === false && btnState === 1) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 2) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 3) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 4) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 5) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 1) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 2) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 3) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 4) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 5) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 1) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 2) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 3) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 4) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 5) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 1) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 2) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 3) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 4) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 5) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 1) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 2) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 3) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 4) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 5) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 1) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 2) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 3) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 4) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 5) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 1
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 2
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 3
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 4
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 5
    ) {
      const filteredWoods = AgeOf.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    }
  }, [
    woodCheck,
    foodCheck,
    goldCheck,
    valueWood,
    valueFood,
    valueGold,
    btnState,
  ]);
  /* Display codes of filered datas END */

  /* Ages Filter START */
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(AgeOf.units);
      return;
    }

    const filteredData = AgeOf.units.filter((item) => item.age === button);
    setMenuItem(filteredData);
  };
  /* Ages Filter END */

  return (
    // Units Pages START
    <div className="container">
      <Ages filter={filter} btnState={btnState} setBtnState={setBtnState} />
      <div className="mt-4 mb-4">
        <Costs
          valueWood={valueWood}
          setValueWood={setValueWood}
          valueFood={valueFood}
          setValueFood={setValueFood}
          valueGold={valueGold}
          setValueGold={setValueGold}
          woodCheck={woodCheck}
          setWoodCheck={setWoodCheck}
          foodCheck={foodCheck}
          setFoodCheck={setFoodCheck}
          goldCheck={goldCheck}
          setGoldCheck={setGoldCheck}
        />
      </div>
      <Datatable setProductId={setProductId} menuItem={menuItem} />
    </div>
    // Units Pages END
  );
}

export default Units;
