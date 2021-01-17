import React from "react";

const DescriptionComponent = () => {
  return (
    <div className="md:px-16">
      <img
        src="imgs/backgrounds/stakeholders2.png"
        className="absolute"
        style={{
          top: "190px",
          left: "10px",
        }}
      />
      <div className="md:mx-16 grid grid-cols-3 gap-4">
        <div>
          <img src="imgs/vaga-description.png" alt="intro" />
        </div>
        <div className="col-span-2 ml-10">
          <div
            className="leading-10 font-bold mb-6"
            style={{ fontSize: "42px" }}
          >
            Auxiliar administrativo
          </div>
          <div
            className="leading-10 font-bold mb-6"
            style={{ fontSize: "30px", marginTop: "-16px" }}
          >
            CCR Nova Dutra - São José dos Campos
          </div>
          <div
            className="leading-8 mt-8 font-light"
            style={{ color: "#7D7987", fontSize: "21px" }}
          >
            Atendimento ao público, atendimento telefônico, elaboração de
            relatórios, cadastro de usuários no sistema, agendamento de
            consultas, análise de documentos, arquivo.
          </div>
          <button
            className="mt-4 rounded-full w-40"
            style={{ color: "white", height: "40px" }}
          >
            Candidatar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
