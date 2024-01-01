import React from "react";
import '../App.css'
import HooliLogo from "../Hooli.png";
import "flowbite";
import { useState } from "react";

("use client");

export default function Home() {
  return (
    <div className="d-flex flex-column" >
      <Nav />
      <div className="container flex-grow-1 ">
        <Logo />
        <Search />
        <Btn />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <img src={HooliLogo} alt="Hooli Logo" />
    </div>
  );
};

const searchStyles = {
  width: "100%", // Use a percentage for responsiveness
  maxWidth: "1000px", // Maximum width
  height: "45px", // Moderate height
  borderRadius: "24px", // Rounded border
  borderColor: "#dfe1e5", // Light grey border color
  borderWidth: "1px", // Thin border
  padding: "10px 20px", // Padding inside the search bar
  marginTop: "55px",
  marginRight: "200px",
};

const Search = () => {

const [onHover, setOnHover] = useState(false)

const searchHover = {
  ...searchStyles,
  border: onHover ? "1px solid #a9a9a9" : "none",
}


  return (
    <div>
      <div>
        <input
          type="text"
          style={searchStyles}
          className="px-8 py-2 focus:outline-none "
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

const Btn = () => {
  const [leftHovered, setLeftHovered] = React.useState(false);
  const [rightHovered, setRightHovered] = React.useState(false);

  const commonButtonStyle = {
    backgroundColor: "#e9ecef", // Grey background
    color: "black", // Black text
    padding: "8px 16px", // Vertical and horizontal padding
    borderRadius: "12px", // Pill shape
    border: "none", // No border
    outline: "none", // No outline
    cursor: "pointer", // Cursor changes to pointer on hover
    margin: "5px", // Margin around buttons
    marginTop: "25px",
  };

  const leftButtonStyle = {
    ...commonButtonStyle,
    border: leftHovered ? "1px solid #a9a9a9" : "none",
  };

  const rightButtonStyle = {
    ...commonButtonStyle,
    border: rightHovered ? "1px solid #a9a9a9" : "none",
  };

  return (
    <div>
      <button
        style={leftButtonStyle}
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setLeftHovered(false)}
        onClick={() => {
          console.log("Search clicked");
        }}
      >
        Search
      </button>
      <button
        style={rightButtonStyle}
        onMouseEnter={() => setRightHovered(true)}
        onMouseLeave={() => setRightHovered(false)}
        onClick={() => {
          console.log("I'm feeling lucky clicked");
        }}
      >
        I'm feeling lucky
      </button>
    </div>
  );
};




const Nav = () => {
  return (
    <nav className="d-flex justify-content-end m-2">
      <ul className="list-unstyled d-flex">
        <li className="me-2">HooliMail</li>
        <li>Images</li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: "#e9ecef" }}>
        © 2021 Hooli, Inc.
      </div>
    </footer>
  );
};
