import { useState } from "react";

import "../styles/Header.css";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <header>
        <div>
          <img src="/img/logo.svg" alt="logo" />
          <p>Digital marketing agency</p>
        </div>
        <nav>
          <a href="#Home">Home</a>
          <a href="#Services">Services</a>
          <a href="#Porttfolio">Portfolio</a>
          <a href="#ClientsAndPartners">Clients &amp; Partners</a>
          <a href="#X Academy">X Academy</a>
          <a href="#Porttfolio">Portfolio</a>
          <a href="#About">About Us</a>
          <a href="#LetsTalk">Lets Talk</a>
        </nav>
        <div className="menu" onClick={() => setopen(true)}>
          <IoIosMenu />
        </div>
      </header>

      <nav
        className="nav-par"
        style={{
          transform: open ? "" : "translateX(100%)",
        }}
      >
        <IoIosMenu
          className="menu"
          onClick={() => setopen(false)}
          style={{
            transform: !open ? "" : "rotate(90deg)",
            transition: "0.5s",
            fontSize: 30,
          }}
        />
        <a href="#Home">Home</a>
        <a href="#Services">Services</a>
        <a href="#Porttfolio">Portfolio</a>
        <a href="#ClientsAndPartners">Clients &amp; Partners</a>
        <a href="#X Academy">X Academy</a>
        <a href="#Porttfolio">Portfolio</a>
        <a href="#About">About Us</a>
        <a href="#LetsTalk">Lets Talk</a>

        <IoIosMenu
          className="menu1"
          onClick={() => setopen(!open)}
          style={{
            transform: !open ? "" : "rotate(90deg)",
            transition: "0.5s",
          }}
        />
      </nav>
    </>
  );
};

export default Header;
