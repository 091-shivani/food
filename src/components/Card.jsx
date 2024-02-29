import React from "react";
import Carousal from "./Carousal";
function Card({ imgsrc }) {
  return (
    <>
      <div className="card mycard" style={{ width: "18rem" }}>
        <img src={imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container">
            <select name="" id="countplate">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="" id="">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div>Total Price</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
