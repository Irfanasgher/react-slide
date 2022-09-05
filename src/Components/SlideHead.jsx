import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Aos from "aos";
import "aos/dist/aos.css";

import "./main.css";

const Slidehead = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="#slide">
      {" "}
      <div
        id="intro-slide"
        className="p-5 text-center bg-image"
        style={{ backgroundColor: "#000" }}
      >
        <h1 data-aos="fade-up" style={{ color: "#fff", fontSize: "80px" , textAlign:"center" }}>
          {" "}
         LAW'S
        </h1>
      </div>
    </div>
  );
};

export default Slidehead;
