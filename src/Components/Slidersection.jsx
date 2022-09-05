import React from "react";

import Slider from "./Slider";

const Slidersection = () => {
  return (
    <div>
      {" "}
      <div id="intro-slider" className="p-5 text-center bg-image">
        <div className="mask" style={{ backgroundColor: "#000" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <div className="pt-5">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidersection;
