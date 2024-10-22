import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-black py-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-4">HELP</h1>
            <ul className="flex justify-center space-x-6 mb-4">
              <li className="hover:underline cursor-pointer">
                <Link to="/">Home</Link>
              </li>
            
              
              <li className="hover:underline cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/course">Course</Link>
              </li>
            </ul>
            <div className="text-sm text-gray-400">
              <h1>&copy; {new Date().getFullYear()} All Rights Reserved</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
