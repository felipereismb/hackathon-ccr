import React from "react";

import DescriptionComponent from "./components/description";
import TrilhaComponent from "./components/trilha";
import BeneficioComponent from "./components/beneficios";
import CidadeComponent from "./components/cidade";

const DetailsComponent = () => {
  return (
    <div className="container mx-auto px-8">
      <DescriptionComponent />
      <TrilhaComponent />
      <BeneficioComponent />
      <CidadeComponent />
    </div>
  );
};

export default DetailsComponent;
