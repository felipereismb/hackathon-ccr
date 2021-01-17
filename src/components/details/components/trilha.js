import React from "react";

import Separator from "src/components/UI/separator";
import Skill from "src/components/skill";

const TrilhaComponent = () => {
  return (
    <div className="md:px-32 mt-10">
      <div
        className="flex items-center leading-10 font-bold mb-2"
        style={{ fontSize: "30px", marginTop: "-16px" }}
      >
        Trilha da vaga
        <img
          className="ml-5"
          style={{ height: "25px", width: "auto" }}
          src="imgs/icons/interrogacao.png"
        />
      </div>
      <Separator />
      <div className="mt-10 flex justify-between">
        <Skill
          name={"Pacote Office®"}
          icon="imgs/icons/office.png"
          type="hard"
        />
        <Skill
          name={"Controle de malote"}
          icon="imgs/icons/malote.png"
          type="hard"
        />
        <Skill
          name={"Trabalho em equipe"}
          icon="imgs/icons/trablaho-equipe.png"
        />
        <Skill name={"Comunicação"} icon="imgs/icons/comunicacao.png" />
      </div>

      <div className="mt-5 flex ">
        <div className="flex items-center">
          <img
            style={{ height: "25px", width: "auto" }}
            src={"imgs/icons/hard-skill.png"}
          />
          <div className="ml-2">Hard Skill</div>
        </div>
        <div className="flex items-center ml-8">
          <img
            style={{ height: "25px", width: "auto" }}
            src={"imgs/icons/soft-skill.png"}
          />
          <div className="ml-2">Soft Skill</div>
        </div>
      </div>
    </div>
  );
};

export default TrilhaComponent;
