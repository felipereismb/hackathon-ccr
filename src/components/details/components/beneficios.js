import React from "react";

import Separator from "src/components/UI/separator";

const BeneficioComponent = () => {
  return (
    <div className="md:px-32 mt-16">
      <div
        className="flex items-center leading-10 font-bold mb-2"
        style={{ fontSize: "30px", marginTop: "-16px" }}
      >
        Benefícios
      </div>
      <Separator />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mt-5 flex flex-col ">
            <div className="flex items-center">
              <img
                style={{ height: "36px", width: "auto" }}
                src={"imgs/icons/vale-refeicao.png"}
              />
              <div className="ml-2 font-light" style={{ fontSize: "36px" }}>
                Vale-refeição
              </div>
            </div>

            <div className="flex items-center">
              <img
                style={{ height: "36px", width: "auto" }}
                src={"imgs/icons/medica.png"}
              />
              <div className="ml-2 font-light" style={{ fontSize: "36px" }}>
                Assistência médica
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 flex flex-col ">
            <div className="flex items-center">
              <img
                style={{ height: "36px", width: "auto" }}
                src={"imgs/icons/vale-alimentacao.png"}
              />
              <div className="ml-2 font-light" style={{ fontSize: "36px" }}>
                Vale-alimentação
              </div>
            </div>

            <div className="flex items-center">
              <img
                style={{ height: "36px", width: "auto" }}
                src={"imgs/icons/vale-transporte.png"}
              />
              <div className="ml-2 font-light" style={{ fontSize: "36px" }}>
                Vale-transporte
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficioComponent;
