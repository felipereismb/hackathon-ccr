import React, { useState } from "react";

import PropTypes from "prop-types";
import Link from "next/link";

import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const NavBar = ({ typeNav }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="shadow-lg">
      <div className="container mx-auto sm:px-24 sm:flex sm:justify-between sm:items:center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <Link href="/">
              <a>
                {typeNav === "home" || typeNav === "profile" ? (
                  <img
                    src="/imgs/logo/hashmapname-t.png"
                    className="h-8"
                    alt="logo"
                  />
                ) : (
                  <img src="/imgs/logo/H.png" className="h-8" alt="logo" />
                )}
              </a>
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              {showNav && (
                <div style={{ color: "black" }}>
                  <MdClose />
                </div>
              )}
              {!showNav && (
                <div style={{ color: "black" }}>
                  <TiThMenu />
                </div>
              )}
            </button>
          </div>
        </div>

        <nav
          className={`px-2 pt-2 pb-4 sm:flex sm:flex-row sm:p-0 ${
            showNav ? "block" : "hidden"
          }`}
        >
          <div className="md:hidden uppercase mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-400 sm:mt-0 sm:ml-2">
            Home
          </div>
          <div className="md:hidden uppercase mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-400 sm:mt-0 sm:ml-2">
            Faça parte
          </div>
          <div className="md:hidden uppercase mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-400 sm:mt-0 sm:ml-2">
            Benefícios
          </div>
          <div className="md:hidden uppercase mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-400 sm:mt-0 sm:ml-2">
            Perguntas frequêntes
          </div>
          <div className="md:hidden uppercase mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-400 sm:mt-0 sm:ml-2">
            O que você precisa
          </div>
        </nav>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  typeNav: PropTypes.string,
};

NavBar.defaultProps = {
  typeNav: "home",
};

export default NavBar;
