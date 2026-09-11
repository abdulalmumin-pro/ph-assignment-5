import React from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="border-b border-gray-300">
      <nav className="flex justify-between py-6 mx-16">
        <img src={Logo} alt="logo" className="items-center" />
        <ul className="flex gap-8 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex gap-8 items-center">
          <button>Sign</button>
          <button className="bg-red-700 py-2 px-6 rounded-2xl text-white">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
