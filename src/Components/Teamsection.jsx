import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardOverlay,
} from "mdb-react-ui-kit";

import member from "../images/member.jpg";

import "./main.css";

const Teamsection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {" "}
      <div
        id="intro-team"
        className="p-5 text-center bg-image"
        style={{ backgroundColor: "#000" }}
      >
        <h1
          data-aos="fade-left"
          className="head_text"
          style={{ color: "#fff" }}
        >
          {" "}
          MEMBERS{" "}
        </h1>
        <MDBRow data-aos="slide-up" className="row-cols-1 row-cols-md-4 g-4">
          <MDBCol>
            <MDBCard style={{ backgroundColor: "transparent" }}>
              <MDBCardImage
                src={member}
                alt="..."
                position="top"
                style={{
                  backgroundColor: "transparent",
                  height: "auto",
                  width: "auto",

                  borderRadius: "10px",
                }}
              />

              <MDBCardOverlay className="mt-5">
                <MDBCardTitle
                  style={{
                    color: "#000",
                    marginTop: "250px",
                    fontSize: "50px",
                  }}
                >
                  Angela White
                </MDBCardTitle>
                <MDBCardText style={{ color: "#000" }}>Developer</MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ backgroundColor: "transparent" }}>
              <MDBCardImage
                src={member}
                alt="..."
                position="top"
                style={{
                  backgroundColor: "transparent",
                  height: "auto",
                  width: "auto",
                  borderRadius: "10px",
                }}
              />

              <MDBCardOverlay className="mt-5">
                <MDBCardTitle
                  style={{
                    color: "#000",
                    marginTop: "250px",
                    fontSize: "50px",
                  }}
                >
                  Angela
                </MDBCardTitle>
                <MDBCardText style={{ color: "#000" }}>Developer</MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ backgroundColor: "transparent" }}>
              <MDBCardImage
                src={member}
                alt="..."
                position="top"
                style={{
                  backgroundColor: "transparent",
                  height: "auto",
                  width: "auto",

                  borderRadius: "10px",
                }}
              />

              <MDBCardOverlay className="mt-5">
                <MDBCardTitle
                  style={{
                    color: "#000",
                    marginTop: "250px",
                    fontSize: "50px",
                  }}
                >
                  Angela
                </MDBCardTitle>
                <MDBCardText style={{ color: "#000" }}>Developer</MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ backgroundColor: "transparent" }}>
              <MDBCardImage
                src={member}
                alt="..."
                position="top"
                style={{
                  backgroundColor: "transparent",
                  height: "auto",
                  width: "auto",

                  borderRadius: "10px",
                }}
              />

              <MDBCardOverlay className="mt-5">
                <MDBCardTitle
                  style={{
                    color: "#000",
                    marginTop: "250px",
                    fontSize: "50px",
                  }}
                >
                  Angela
                </MDBCardTitle>
                <MDBCardText style={{ color: "#000" }}>Developer</MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default Teamsection;
