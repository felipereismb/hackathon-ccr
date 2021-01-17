import React from "react";

import OportunidadeCard from "../oportunidade";

const OportunidadesSection = () => {
  return (
    <div>
      {/* Cards de habilidades */}
      <div className="flex my-4">
        <OportunidadeCard
          nome={"Auxiliar administrativo"}
          descricao={"CCR Nova Dutra - São José dos Campos"}
          concluido={false}
          porcentagem={33}
        />

        <OportunidadeCard
          nome={"Auxiliar administrativo"}
          descricao={"BH Airport - Confins"}
          concluido={false}
          porcentagem={19}
        />
      </div>
      <div className="flex my-4">
        <OportunidadeCard
          nome={"Auxiliar administrativo"}
          descricao={"ViaQuatro - São Paulo"}
          concluido
        />
        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default OportunidadesSection;
