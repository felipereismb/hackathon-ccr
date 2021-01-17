import React from "react";
import Router from "next/router";

const ModalVaga = ({ open, onClose }) => {
  return (
    open && (
      <div
        className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800"
        style={{ "--bg-opacity": ".8" }}
      >
        <div className="bg-white rounded-lg w-1/2">
          <div className="flex flex-col items-start p-4">
            <div
              className="leading-10 font-bold mb-6"
              style={{ fontSize: "42px" }}
            >
              Auxiliar administrativo
            </div>
            <div
              className="leading-10 font-bold mb-2"
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
            <hr />
            <div className="ml-auto">
              <button
                onClick={() => {
                  Router.push("/details");
                }}
                className="text-white font-bold py-2 px-4 rounded"
              >
                Ver mais
              </button>
              <button
                onClick={onClose}
                style={{
                  backgroundColor: "white",
                  borderColor: "#4BA48A",
                  color: "#4BA48A",
                }}
                className="ml-4 font-semibold py-2 px-4 border rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalVaga;
