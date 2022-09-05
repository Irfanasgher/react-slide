import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { BsTwitter, BsInstagram, BsDiscord, BsTelegram } from "react-icons/bs";

import bg from "../images/logoo.png";

import "./main.css";

export default function Navbars() {
  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#000" }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            href="#intro-example"
            style={{ fontSize: "10px", font: "bolder" }}
          >
            <img src={bg} alt="" style={{ width: "90px", font: "bolder" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro-example" style={{ fontSize: "20px" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#intro-faq" style={{ fontSize: "20px" }}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#intro-team" style={{ fontSize: "20px" }}>
                Team
              </Nav.Link>
              <Nav.Link href="#intro-time" style={{ fontSize: "20px" }}>
                Time
              </Nav.Link>
              <Nav.Link href="#intro-slider" style={{ fontSize: "20px" }}>
                Slide
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#deets"
                style={{ color: "#fff", backGroundcolor: "" }}
              >
                <BsTwitter style={{ fontSize: "20px" }} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <BsInstagram style={{ fontSize: "20px" }} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <BsDiscord style={{ fontSize: "20px" }} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <BsTelegram style={{ fontSize: "20px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
