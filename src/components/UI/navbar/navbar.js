import React from "react";
import Router from "next/router";

const NavBar = ({ type }) => {
  return (
    <header>
      <div className="container mx-auto px-32 py-4">
        <nav className="flex justify-between px-6 py-2">
          <div className="flex items-center mr-6">
            <img
              src="imgs/logo/brasis-logo.png"
              style={{ height: "60%", width: "auto" }}
            />
          </div>

          {type === "dash" && (
            <div
              onClick={() => {
                Router.push("/profile");
              }}
              className="lg:flex lg:items-center lg: justify-end"
              style={{ cursor: "pointer" }}
            >
              <div className="mr-3">Felipe Reis</div>
              <img
                className="rounded-full"
                src="imgs/user.jpeg"
                alt="usuario"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          )}

          {type !== "dash" && type !== "profile" && type !== "vagas" && (
            <div className="lg:flex lg:items-center lg: justify-end">
              <div className="text-sm">
                <a
                  href="#home"
                  className="block mt-4 font-bold lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 mr-4"
                >
                  Home
                </a>
                <a
                  href="#faca-parte"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 mr-4"
                >
                  Encontre o primeiro emprego
                </a>
                <a
                  href="#beneficios"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 mr-4"
                >
                  Vagas
                </a>
                <a
                  href="#perguntas-frequentes"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 mr-4"
                >
                  About us
                </a>
                <a
                  href="/login"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25"
                >
                  Login
                </a>
              </div>
            </div>
          )}

          {type == "profile" && (
            <div className="lg:flex lg:items-center lg: justify-end">
              <div className="text-sm">
                <a
                  href="/dash"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 mr-4"
                >
                  Buscar vagas
                </a>

                <a
                  href="/profile"
                  className="block mt-4 font-bold lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 "
                >
                  Perfil
                </a>
              </div>
            </div>
          )}

          {type == "vagas" && (
            <div className="lg:flex lg:items-center lg: justify-end">
              <div className="text-sm">
                <a
                  href="/dash"
                  className="block mt-4 font-bold lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25 mr-4"
                >
                  Buscar vagas
                </a>

                <a
                  href="/profile"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:opacity-25"
                >
                  Perfil
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
