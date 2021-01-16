import React from "react";

const Steakholder = ({ img, name, description }) => {
  return (
    <div className="md:px-10 text-center pt-4">
      <div className="rounded-2xl w-full flex flex-col items-center">
        <img
          width="75%"
          height="75%"
          src={img}
          alt={img}
          style={{ border: "3px solid white", zIndex: "10" }}
        />
        <div
          className="rounded-2xl flex w-full"
          style={{
            color: "white",
            backgroundColor: "#4BA48A",
            marginTop: "-20px",
            zIndex: "9",
            height: "180px",
          }}
        >
          <div
            className="flex flex-col justify-center w-full"
            style={{ marginTop: "30px", fontSize: "20px" }}
          >
            <div>{name}</div>
            <div className="font-light p-3" style={{ fontSize: "14px" }}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steakholder;
