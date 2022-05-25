import React from "react";
import { Link } from "react-router-dom";

function Datatable({ setProductId, menuItem }) {
  return (
    //Codes START
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>COSTS</th>
          </tr>
        </thead>
        <tbody>
          {menuItem.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link
                    key={item.id}
                    to={`/units/${item.id}`}
                    onClick={() => setProductId(item.id)}
                    className="text-dark text-decoration-none"
                  >
                    {item.id}
                  </Link>
                </td>
                <td>
                  <Link
                    key={item.id}
                    to={`/units/${item.id}`}
                    onClick={() => setProductId(item.id)}
                    className="text-dark text-decoration-none"
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.age}</td>
                <td>
                  {item.cost == null && <span>Null</span>}
                  {item.cost !== null && item.cost.Gold ? (
                    <span>{` Gold:${item.cost.Gold} `}</span>
                  ) : null}
                  {item.cost !== null && item.cost.Food ? (
                    <span>{` Food:${item.cost.Food} `}</span>
                  ) : null}
                  {item.cost !== null && item.cost.Wood ? (
                    <span>{` Wood:${item.cost.Wood} `}</span>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    //Codes END
  );
}

export default Datatable;
