import React from "react";
import FooterImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-300">
      <div className="flex mx-16 py-8">
        {/* left side */}
        <div>
          <img src={FooterImg} alt="" />
          <p className="text-gray-600 py-4">
            Curated tools, technologies, and resources for developers building <br />
            modern software
          </p>
          <ul className="flex text-gray-600 font-bold gap-4 text-[0.8rem]">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
        {/* right side */}
        <div className="flex gap-30 pl-30 pb-8">
          <div>
            <h4 className="font-bold text-[0.8rem]">PRODUCT</h4>
            <ul className="text-gray-600 pt-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[0.8rem]">COMPANY</h4>
            <ul className="text-gray-600 pt-4">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[0.8rem]">LEGAL</h4>
            <ul className="text-gray-600 pt-4">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* fotter bottom */}
        <div className="border-t border-gray-300 mx-16 text-gray-500 flex justify-between py-8">
          <p>&copy;2026 Dev Stack. All rights reserved</p>
          <ul className="flex gap-4 items-center">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Footer;
