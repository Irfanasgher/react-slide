import React from "react";

import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter>
      {" "}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className=""
          href="https://www.NFT PROJECT.com/"
          style={{ backgroundColor: "#000", color: "#fff" , textDecoration:"none"}}
        >
          https://www.NFT PROJECT.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
