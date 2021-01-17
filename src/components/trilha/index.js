import React from "react";

import Separator from "src/components/UI/separator";
import Course from "./components/course";

const TrilhaComponent = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="md:px-16">
        <div
          className="rounded-2xl flex w-full"
          style={{
            color: "white",
            backgroundColor: "#4BA48A",
            width: "100%",
            height: "auto",
          }}
        >
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between px-5 py-3">
              <div>
                <div className="font-bold" style={{ fontSize: "24px" }}>
                  Auxiliar administrativo
                </div>
                <div className="font-light">
                  CCR Nova Dutra - São José dos Campos
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div>Progresso de aprendizado:</div>
                <div className="font-bold" style={{ fontSize: "24px" }}>
                  33%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-16 flex flex-col items-center mt-8">
          <div
            className="flex items-center leading-10 font-bold mb-2"
            style={{ fontSize: "30px" }}
          >
            Trilha
          </div>
          <Separator />
        </div>

        <div className="flex flex-col my-6 mb-16">
          <div
            className="flex items-center justify-between"
            style={{ fontSize: "26px" }}
          >
            <div className="flex items-center">
              <img
                className="mr-6"
                style={{ height: "15px", width: "auto" }}
                src="imgs/icons/module-open.png"
              />
              Módulo 1 - Pacote Office®
            </div>
            <div style={{ color: "#4BA48A" }}>38%</div>
          </div>

          {/* Trilha */}
          <div className="overflow-x-auto flex">
            <Course
              description="Conhecendo o Microssoft Word®"
              icon="imgs/icons/office.png"
              concluido
            />
            <Course
              description="Caixa de ferramentas do Microssoft Word®"
              icon="imgs/icons/office.png"
              concluido
            />
            <Course
              description="Formatando textos com Microssoft Word®"
              icon="imgs/icons/office.png"
              concluido
            />
            <Course
              description="Preparando um arquivo para impressão"
              icon="imgs/icons/office-verde.png"
              concluido={false}
            />
            <Course
              description="Exportando um arquivo em PDF"
              icon="imgs/icons/office-bloqueado.png"
              bloqueado
            />
          </div>

          <div
            className="flex items-center justify-between mt-5"
            style={{ fontSize: "26px" }}
          >
            <div className="flex items-center">
              <img
                className="mr-6"
                style={{ height: "15px", width: "auto" }}
                src="imgs/icons/module-close.png"
              />
              Módulo 2 - Controle de malotes
            </div>
            <div style={{ color: "#4BA48A" }}>0%</div>
          </div>

          <div
            className="flex items-center justify-between mt-5"
            style={{ fontSize: "26px" }}
          >
            <div className="flex items-center">
              <img
                className="mr-6"
                style={{ height: "15px", width: "auto" }}
                src="imgs/icons/module-close.png"
              />
              Módulo 3 - Trabalho em equipe
            </div>
            <div style={{ color: "#4BA48A" }}>20%</div>
          </div>

          <div
            className="flex items-center justify-between mt-5"
            style={{ fontSize: "26px" }}
          >
            <div className="flex items-center">
              <img
                className="mr-6"
                style={{ height: "15px", width: "auto" }}
                src="imgs/icons/module-close.png"
              />
              Módulo 4 - Comunicação
            </div>
            <div style={{ color: "#4BA48A" }}>75%</div>
          </div>
        </div>

        <div style={{ height: "40px" }} />
      </div>
    </div>
  );
};

export default TrilhaComponent;
