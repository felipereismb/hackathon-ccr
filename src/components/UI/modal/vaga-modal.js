import React from "react";

import Router from "next/router";

const ModalVaga = ({ open, onClose }) => {
  return (
    open && (
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-60">
        <div className="bg-white rounded-lg w-1/2">
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center w-full">
              <div className="text-gray-900 font-medium text-lg">
                Vaga [aasdadads]
              </div>
            </div>
            <hr />
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <hr />
            <div className="ml-auto">
              <button
                onClick={() => {
                  Router.push("/details");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ver mais
              </button>
              <button
                onClick={onClose}
                className="bg-transparent ml-4 hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalVaga;
