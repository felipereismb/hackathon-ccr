import React from "react";

import Separator from "src/components/UI/separator";

const CidadeComponent = () => {
  return (
    <div className="md:px-32 mt-16 relative">
      <img
        src="imgs/backgrounds/stakeholders2.png"
        className="absolute"
        style={{
          top: "500px",
          right: "-50px",
        }}
      />
      <div
        className="flex items-center leading-10 font-bold mb-2"
        style={{ fontSize: "30px", marginTop: "-16px" }}
      >
        Conheça São José dos Campos
      </div>
      <Separator />
      <img className="mt-8" src="imgs/cidade.png" />

      <div className="flex justify-center w-full my-8">
        <button
          className="mt-4 rounded-full px-8 mb-16"
          style={{ color: "white", height: "40px" }}
        >
          Quero me candidatar para essa vaga
        </button>
      </div>
    </div>
  );
};

export default CidadeComponent;
