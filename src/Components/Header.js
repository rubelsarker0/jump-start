import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ibmLogoGrey from "../images/ibm-grey-transparent.png";

const element = <FontAwesomeIcon icon={faEnvelope} />;

const Header = () => {
  return (
    <div className="font-semibold  shadow-md backgroundSecondary sticky top-0 z-50">
      <div className="navbar  py-3 container mx-auto">
        <div className="flex items-center">
          <img className="w-20" src={ibmLogoGrey} alt="" />
          <span className="text-md text-gray-500 ml-3 mb-0">Visualization of Operational Security Data</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
