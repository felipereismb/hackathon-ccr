import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Pronto para recomendar?
            <br />
            <span className="text-indigo-600">Crie um perfil agora mesmo</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/sign-up">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Sim, vamos lá!
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
