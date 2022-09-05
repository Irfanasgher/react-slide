import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import bg from "../images/bg.jpg";
import CountDownTimer from "./CountdownTimer";

const Timersection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  var today = new Date();

  var current_hour = today.getHours() + 1;
  var current_minutes = today.getMinutes();
  var current_seconds = today.getSeconds();

  var display_hour = 21 - current_hour;
  var display_minutes = 59 - current_minutes;
  var display_seconds = 59 - current_seconds;
  const hoursMinSecs = {
    hours: display_hour,
    minutes: display_minutes,
    seconds: display_seconds,
  };
  return (
    <div>
      {" "}
      <div id="intro-time" className="p-5 text-center bg-image">
        <div className="mask" style={{ backgroundColor: "#000" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img src={bg} alt="bg" className="img-fluid"  style={{border:"none" , borderRadius:"30px"}}/>
                  </div>
                  <div className="col-md-6">
                    <h1
                      className="title mt-4 undertitle"
                      data-aos="fade-right"
                      style={{
                        color: "#fff",
                        fontSize: "100px",
                      }}
                    >
                      <CountDownTimer hoursMinSecs={hoursMinSecs} />
                    </h1>

                    <p
                      style={{
                        color: "#fff",
                        fontSize: "20px",
                      }}
                    >
                      Lorem ipsum dolor sit{" "}
                      <strong style={{ color: "#0D5BE1 " }}>
                        amet consectetur adipisicing elit.
                      </strong>
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem.{" "}
                      <strong style={{ color: "#0D5BE1 " }}>
                        amet consectetur adipisicing elit.
                      </strong>
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timersection;
