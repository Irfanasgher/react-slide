import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import bg from "../images/bg.jpg";

const Herosection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {" "}
      <div
        id="intro-example"
        className="background_hero p-5 text-center bg-image"
        style={{
          backgroundImage: { bg },
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 data-aos="fade-right" className="head_text mb-5">
                PROGRESSIVE{" "}
              </h1>
              <h1  data-aos="fade-right" className="mt-10" style={{ fontSize: "100px" }}>
                LAW{" "}
              </h1>

              <h1  data-aos="fade-right" className="mb-4">
                consectetur adipisicing elit &amp; free guide of responsive web
                design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
