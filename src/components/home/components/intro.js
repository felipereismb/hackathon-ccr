import React from "react";

import Separator from "src/components/UI/separator";

const IntroComponent = () => {
  return (
    <div className="md:px-16 pt-4 md:pt-4">
      <img
        src="imgs/backgrounds/stakeholders2.png"
        className="absolute"
        style={{
          top: "90px",
          left: "0",
        }}
      />
      <div className="md:m-16 grid grid-cols-2 gap-4">
        <div>
          <div
            className="leading-10 font-bold mb-6"
            style={{ fontSize: "42px" }}
          >
            Em busca de uma nova experiência cultural e renda?
          </div>
          <Separator />
          <div
            className="leading-8 mt-4 font-light"
            style={{ color: "#7D7987", fontSize: "21px" }}
          >
            Trazemos a experiência de um intercâmbio cultural diretamente para
            dentro do país, aliado com o aprendizado de uma nova carreira e
            novas experiências.
          </div>
          <button
            className="mt-4 rounded-full w-40"
            style={{ color: "white", height: "40px" }}
          >
            Vamos lá
          </button>
        </div>
        <div>
          <img src="imgs/intro.png" alt="intro" />
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
