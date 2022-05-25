import React from "react";
import "./Age.css";

function Ages({ filter, btnState, setBtnState }) {
  function handleClick(index) {
    setBtnState(index);
  }
  return (
    <>
      <div className="container">
        <div className="row ages">
          <div className="agesHeader mb-1 mt-5">Ages</div>
          <div className="col-5">
            <div className="row">
              <div
                className={
                  btnState === 1
                    ? "col border border-dark age All active"
                    : "col border border-dark age All"
                }
              >
                <button
                  type="button"
                  className="btn shadow-none w-10"
                  onClick={() => {
                    filter("All");
                    handleClick(1);
                  }}
                >
                  All
                </button>
              </div>
              <div
                className={
                  btnState === 2
                    ? "col border border-dark age Dark active"
                    : "col border border-dark age Dark"
                }
              >
                <button
                  type="button"
                  className="btn shadow-none w-10"
                  onClick={() => {
                    filter("Dark");
                    handleClick(2);
                  }}
                >
                  Dark
                </button>
              </div>
              <div
                className={
                  btnState === 3
                    ? "col border border-dark age Feudal active"
                    : "col border border-dark age Feudal"
                }
              >
                <button
                  type="button"
                  className="btn shadow-none w-10"
                  onClick={() => {
                    filter("Feudal");
                    handleClick(3);
                  }}
                >
                  Feudal
                </button>{" "}
              </div>
              <div
                className={
                  btnState === 4
                    ? "col border border-dark age Castle active"
                    : "col border border-dark age Castle"
                }
              >
                <button
                  type="button"
                  className="btn shadow-none w-10"
                  onClick={() => {
                    filter("Castle");
                    handleClick(4);
                  }}
                >
                  Castle
                </button>
              </div>
              <div
                className={
                  btnState === 5
                    ? "col border border-dark age Imperial active"
                    : "col border border-dark age Imperial"
                }
              >
                <button
                  type="button"
                  className="btn shadow-none w-10"
                  onClick={() => {
                    filter("Imperial");
                    handleClick(5);
                  }}
                >
                  Imperial
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Ages;
