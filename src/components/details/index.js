import React from "react";

import DescriptionComponent from "./components/description";
import TrilhaComponent from "./components/trilha";
import BeneficioComponent from "./components/beneficios";
import CidadeComponent from "./components/cidade";
import MoradiaComponent from "./components/moradia";

const DetailsComponent = () => {
  return (
    <div className="container mx-auto px-8">
      <DescriptionComponent />
      <BeneficioComponent />
      <TrilhaComponent />
      <MoradiaComponent />
      <CidadeComponent />
    </div>
  );
};

export default DetailsComponent;
