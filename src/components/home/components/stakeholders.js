import React from "react";

import Steakholder from "src/components/steakholder/steakholder";
import Separator from "src/components/UI/separator";

const SteakholdersComponent = () => {
  return (
    <>
      <div className="md:px-16 flex flex-col items-center center pt-4 md:pt-4 relative">
        <img
          src="imgs/backgrounds/stakeholders.png"
          className="absolute"
          style={{
            top: "-10px",
            left: "-100px",
            height: "900px",
            width: "auto",
          }}
        />
        <img
          src="imgs/backgrounds/stakeholders2.png"
          className="absolute"
          style={{
            bottom: "-980px",
            right: "-75px",
          }}
        />
        <div className="font-bold  mb-4" style={{ fontSize: "36px" }}>
          Quem participa do intercâmbio
        </div>
        <Separator />
      </div>
      <div className="md:m-16 grid grid-cols-3 gap-4">
        <Steakholder
          img="imgs/intercambista.jpeg"
          name="Intercambista"
          description="Quem vai participar da experiência de imersão de uma nova cultura e ainda adiquirir conhecimento em uma nova área de atuação profissional"
        />
        <Steakholder
          img="imgs/mentor.png"
          name="Mentor"
          description="Quem vai participar da experiência de imersão de uma nova cultura e ainda adiquirir conhecimento em uma nova área de atuação profissional"
        />
        <Steakholder
          img="imgs/anfitriao.png"
          name="Anfitrião"
          description="Quem vai participar da experiência de imersão de uma nova cultura e ainda adiquirir conhecimento em uma nova área de atuação profissional"
        />
      </div>
    </>
  );
};

export default SteakholdersComponent;
