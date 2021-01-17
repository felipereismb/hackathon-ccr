import React from "react";

const Course = ({ description, icon, concluido, bloqueado = null }) => {
  return (
    <div className="text-center pt-4 mx-4">
      <div
        className="rounded-2xl flex flex-col justify-center items-center w-full relative"
        style={{
          color: bloqueado ? "#999999" : concluido ? "white" : "#4BA48A",
          backgroundColor: bloqueado || !concluido ? "white" : "#4BA48A",
          border: bloqueado ? "1px solid #999999" : !concluido && "1px solid #4BA48A",
          zIndex: "9",
          height: "180px",
          width: "200px",
        }}
      >
        <img
          className="mt-8"
          style={{ height: "50px", width: "auto" }}
          src={icon}
        />
        <div
          className="flex flex-col justify-center w-full"
          style={{ marginTop: "20px", fontSize: "20px" }}
        >
          <div className="font-light p-3" style={{ fontSize: "14px" }}>
            {description}
          </div>
        </div>
        {bloqueado == null && (
          <div
            className="font-bold p-3 mb-4 cursor-pointer"
            style={{ fontSize: "14px" }}
          >
            {concluido ? "Ver novamente" : "Iniciar"}
          </div>
        )}
        {bloqueado && (
          <div
            className="font-bold p-3 mb-4 cursor-pointer"
            style={{ fontSize: "14px" }}
          >
            Bloqueado
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
