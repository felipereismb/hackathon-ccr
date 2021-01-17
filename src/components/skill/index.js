import React from "react";

const Skill = ({ name, icon, type }) => {
  return (
    <div className="text-center pt-4">
      <div className="rounded-2xl w-full flex flex-col items-center">
        <div
          className="rounded-2xl flex flex-col justify-center items-center w-full relative"
          style={{
            color: "white",
            backgroundColor: "#4BA48A",
            marginTop: "-20px",
            zIndex: "9",
            height: "180px",
            width: "200px",
          }}
        >
          <img
            style={{
              height: "25px",
              width: "auto",
              top: "10px",
              right: "10px",
            }}
            src={
              type === "hard"
                ? "imgs/icons/hard-skill.png"
                : "imgs/icons/soft-skill.png"
            }
            className="absolute"
          />
          <img style={{ height: "50px", width: "50px" }} src={icon} />
          <div
            className="flex flex-col justify-center w-full"
            style={{ marginTop: "20px", fontSize: "20px" }}
          >
            <div className="font-light p-3" style={{ fontSize: "14px" }}>
              {name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
