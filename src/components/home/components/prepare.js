import React from "react";

import Separator from "src/components/UI/separator";

const PrepareComponent = () => {
  return (
    <div className="md:px-16 pt-4 md:pt-4">
      <div className="md:m-16 grid grid-cols-2 gap-4">
        <div>
          <img src="imgs/preparoEducacional.png" alt="intro" />
        </div>
        <div className="ml-10">
          <div
            className="leading-10 font-bold mb-6"
            style={{ fontSize: "36px" }}
          >
            Preparo educacional para a sua nova fase
          </div>
          <Separator />
          <div
            className="leading-8 mt-4 font-light"
            style={{ color: "#7D7987", fontSize: "18px" }}
          >
            Com as trilhas de conhecimento, guiamos os seus conhecimentos para a
            sua nova jornada de trabalho. Se ainda tiver dúvidas, um mentor te
            acompanhará antes e durante o intercâmbio.
          </div>
          <button
            className="mt-4 rounded-full w-40"
            style={{ color: "white", height: "40px" }}
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrepareComponent;
