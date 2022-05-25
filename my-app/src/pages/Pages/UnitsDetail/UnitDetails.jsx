import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AgeOf from "../../../age-of-empires-units.json";
import "./UnitDetails.css";

function UnitDetails({ productId, setProductId, setRefId, refId }) {
  const [unit, setUnit] = useState({});
  const { id } = useParams();

  setRefId(Number(id));
  setProductId(refId);

  useEffect(() => {
    const filterUnit = AgeOf.units.filter((item) => item.id === productId);

    setUnit(filterUnit[0]);
  }, [productId]);

  return (
   //START
    <>
    &nbsp;
      <div className="text-center fs-2">{unit.name}</div>
      <table className="table table-borderless table-dark">
        <thead className="auto"></thead>
        <tbody>
          <tr>
            <th class="col-md-2">ID:</th>
            <td>{unit.id}</td>
          </tr>
          <tr>
            <th class="col-md-2">Name:</th>
            <td>{unit.name}</td>
          </tr>
          <tr>
            <th class="col-md-2">Description:</th>
            <td>{unit.description}</td>
          </tr>
          <tr>
            <th class="col-md-2">Min. Required Age:</th>
            <td>{unit.age}</td>
          </tr>
          <tr>
            <th class="col-md-2">Wood Cost:</th>
            <td>
              {unit.cost ? unit.cost.Wood ? <>{unit.cost.Wood}</> : null : null}
            </td>
          </tr>
          <tr>
            <th class="col-md-2">Food Cost:</th>
            <td>
              {unit.cost ? unit.cost.Food ? <>{unit.cost.Food}</> : null : null}
            </td>
          </tr>
          <tr>
            <th class="col-md-2">Gold Cost:</th>
            <td>
              {unit.cost ? unit.cost.Gold ? <>{unit.cost.Gold}</> : null : null}
            </td>
          </tr>
          <tr>
            <th class="col-md-2">Build Time:</th>
            <td>{unit.build_time}</td>
          </tr>
          <tr>
            <th class="col-md-2">Reload Time:</th>
            <td>{unit.reload_time}</td>
          </tr>
          <tr>
            <th class="col-md-2">Hit Points:</th>
            <td>{unit.hit_points}</td>
          </tr>
          <tr>
            <th class="col-md-2">Attack:</th>
            <td>{unit.attack}</td>
          </tr>
          <tr>
            <th class="col-md-2">Accuracy:</th>
            <td>{unit.accuracy}</td>
          </tr>
        </tbody>
      </table>
    </>
    //END
  );
}

export default UnitDetails;
