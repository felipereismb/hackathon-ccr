import React from "react";

import Separator from "src/components/UI/separator";

const MoradiaComponent = () => {
  return (
    <div className="md:px-32 mt-16">
      <div
        className="flex items-center leading-10 font-bold mb-2"
        style={{ fontSize: "30px", marginTop: "-16px" }}
      >
        Moradia
      </div>
      <Separator />

      <img src="imgs/moradia.png" />
    </div>
  );
};

export default MoradiaComponent;
