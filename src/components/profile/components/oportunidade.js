import React from "react";

const OportunidadeCard = ({ nome, descricao, concluido, porcentagem }) => {
  return (
    <div
      class="w-1/2 px-4 py-2 mr-2 rounded text-white"
      style={{ backgroundColor: concluido ? "#999999" : "#4BA48A" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="font-bold" style={{ fontSize: "15px" }}>
              {nome}
            </div>
            <div style={{ fontSize: "13px" }}>{descricao}</div>
          </div>
          <img
            style={{ height: "40px", width: "auto" }}
            src="imgs/logo/ccr-logo.png"
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div style={{ fontSize: "13px" }}>
            {porcentagem ? `${porcentagem + "% concluido"}` : ""}
          </div>
          <a href="/trilha" className="font-bold" style={{ fontSize: "15px" }}>
            {concluido ? "Acessar resultado" : "Acessar trilha"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default OportunidadeCard;
