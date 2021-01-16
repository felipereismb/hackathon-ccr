import React from "react";

import Separator from "src/components/UI/separator";

const ServicesComponent = () => {
  return (
    <div className="md:px-16 text-center pt-4 md:pt-4">
      <div className="md:px-16 flex flex-col items-center center pt-4 md:pt-4">
        <div className="font-bold  mb-4" style={{ fontSize: "36px" }}>
          Garantias do intercambista
        </div>
        <Separator />
      </div>
      <img className="mt-16" src="imgs/garantias.png" alt="garantias" />
    </div>
  );
};

export default ServicesComponent;
