import React, { useState } from "react";

import OportunidadeSection from "./components/sections/oportunidades";
import CursosSection from "./components/sections/cursos";
import ReconhecimentoSection from "./components/sections/reconhecimentos";

import Separator from "src/components/UI/separator";

const ProfileComponent = () => {
  const [selectedAba, setSelectedAba] = useState("oportunidades");

  return (
    <>
      <div class="flex px-16">
        <div class="container mx-auto px-8">
          <div class="flex px-10">
            <div class="w-1/4">
              <div class="mb-4">
                <img class="rounded-lg" src="imgs/user.jpeg" />
              </div>
              <div class="mb-4">
                <div class="text-3xl font-medium text-grey-darkest">
                  Felipe Reis
                </div>
                <div class="text-xl text-grey-dark font-light">@felipermb</div>
              </div>
              <div class="flex flex-col text-left pb-4 mb-4">
                <div className="font-bold mb-4">
                  <div style={{ fontSize: "36px" }}>Selos</div>
                  <Separator />
                </div>
                <img
                  style={{ height: "auto", width: "80%" }}
                  src="imgs/selos.png"
                />
              </div>
            </div>

            <div class="w-3/4 ml-8">
              {/* Abas */}
              <div
                class="flex items-center font-thin text-grey-dark text-sm"
                style={{ fontSize: "25px" }}
              >
                <div
                  onClick={() => setSelectedAba("oportunidades")}
                  class={`${
                    selectedAba === "oportunidades"
                      ? "pb-2 mr-8 flex border-b-2 font-bold"
                      : "pb-2 mr-8 flex items-center hover:opacity-25"
                  }`}
                  style={{
                    cursor: "pointer",
                    borderColor: selectedAba === "oportunidades" && "#E4CE00",
                  }}
                >
                  Oportunidades
                </div>

                <div
                  onClick={() => setSelectedAba("cursos")}
                  class={`${
                    selectedAba === "cursos"
                      ? "pb-2 mr-8 flex border-b-2 font-bold"
                      : "pb-2 mr-8 flex items-center hover:opacity-25"
                  }`}
                  style={{
                    cursor: "pointer",
                    borderColor: selectedAba === "cursos" && "#E4CE00",
                  }}
                >
                  <div>Cursos</div>
                </div>

                <div
                  onClick={() => setSelectedAba("reconhecimento")}
                  class={`${
                    selectedAba === "reconhecimento"
                      ? "pb-2 mr-8 flex border-b-2 font-bold"
                      : "pb-2 mr-8 flex items-center hover:opacity-25"
                  }`}
                  style={{
                    cursor: "pointer",
                    borderColor: selectedAba === "reconhecimento" && "#E4CE00",
                  }}
                >
                  <div>Reconhecimentos</div>
                </div>
              </div>

              {selectedAba === "oportunidades" && <OportunidadeSection />}
              {selectedAba === "cursos" && <CursosSection />}
              {selectedAba === "reconhecimento" && <ReconhecimentoSection />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
