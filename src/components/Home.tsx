import React from "react";

import HooliLogo from "../Hooli.png";
import "flowbite";

("use client");

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Flex container that fills the viewport height */}
      <div className="container flex-grow-1"> {/* Content container that grows to fill space */}
        <Logo />
        <Search />
        <Btn />
      </div>
      <Footer />
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
  const buttonStyle = {
    backgroundColor: "#D3D3D3", // Grey background
    color: "black", // Black text
    padding: "8px 16px", // Vertical and horizontal padding
    borderRadius: "12px", // Pill shape
    border: "none", // No border
    outline: "none", // No outline
    cursor: "pointer", // Cursor changes to pointer on hover
    margin: "5px", // Margin around buttons
    marginTop: "25px",
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={() => {
          console.log("Search clicked");
        }}
      >
        Search
      </button>
      <button
        style={buttonStyle}
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
    <nav>
      <div>
        <ul>
          <li>HooliMail</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-3 w-full mt-auto"> {/* mt-auto pushes the footer to the bottom */}
      <div className="text-center">
        <h6>Donate to fight climate change</h6>
      </div>
    </footer>
  );
};