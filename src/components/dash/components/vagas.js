import React, { useState } from "react";

import GoogleMapReact from "google-map-react";

import Separator from "src/components/UI/separator";
import ModalVaga from "src/components/UI/modal/vaga-modal";

const defaultCenter = { lat: -16.82488, lng: -49.164749 };

const markers = [
  { lat: -23.225706, lng: -45.916568, state: "SP" },
  { lat: -10.252673, lng: -48.324874 },
  { lat: -22.544178, lng: -43.58877, state: "RIO" },
  { lat: -12.612144, lng: -41.673002 },
  { lat: -20.723391, lng: -54.474291 },
  { lat: -13.071071, lng: -55.919413 },
  { lat: -16.82488, lng: -49.164749 },
  { lat: -19.939458, lng: -43.935225 },
];

const VagasComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [marcadores, setMarcadores] = useState(markers);

  const [valeAlimentacao, setValeAlimentacao] = useState(false);
  const [valeRefeicao, setValeRefeicao] = useState(false);
  const [assistencia, setAssistencia] = useState(false);
  const [valeTransporte, setValeTransporte] = useState(false);

  return (
    <div className="md:px-16">
      <div className="md:px-16 flex flex-col items-center center relative">
        <div className="font-bold mb-4" style={{ fontSize: "36px" }}>
          Vagas
        </div>
        <Separator />
      </div>
      <div className="py-8" style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDOrvhkeogBJ-yRI4j2yFIvWh481GPu3cw" }}
          defaultCenter={defaultCenter}
          defaultZoom={5}
        >
          {marcadores.map((marker) => (
            <div
              lat={marker.lat}
              lng={marker.lng}
              style={{ cursor: "pointer" }}
              onClick={() => setOpenModal(true)}
            >
              <div className="pin flex items-center justify-center">
                <img
                  style={{
                    height: "20px",
                    width: "auto",
                    transform: "rotate(45deg)",
                  }}
                  src="imgs/logo/brasis-logo.png"
                />
              </div>
              <div className="pulse" />
            </div>
          ))}
        </GoogleMapReact>
      </div>

      <div className="md:px-16 flex flex-col">
        <div
          className="flex items-center leading-10 font-bold mb-2"
          style={{ fontSize: "30px", marginTop: "-16px" }}
        >
          Filtros
        </div>
        <Separator />

        <div className="flex mb-16">
          <div>
            <div className="mt-8 flex flex-col">
              <div
                className="flex items-center mb-4"
                style={{ marginLeft: "-6px" }}
              >
                <img src="imgs/icons/local.png" />
                <select className="border p-2" style={{ width: "250px" }}>
                  <option>Todos</option>
                  <option>São Paulo</option>
                  <option>Bahia</option>
                  <option>Tocantins</option>
                  <option>Rio de Janeiro</option>
                  <option>Mato Grosso</option>
                  <option>Mato Grosso do Sul</option>
                </select>
              </div>

              <div
                className="flex items-center cursor-pointer"
                checked={valeRefeicao}
                onClick={() => setValeRefeicao(!valeRefeicao)}
              >
                <label
                  class="relative cursor-pointer text-xl pl-8"
                  style={{ marginTop: "-26px" }}
                  checked={valeRefeicao}
                  onClick={() => setValeRefeicao(!valeRefeicao)}
                >
                  <input
                    class="absolute opacity-0 left-0 top-0 cursor-pointer"
                    type="checkbox"
                    checked={valeRefeicao}
                  />
                  <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                </label>
                <img
                  style={{ height: "36px", width: "auto" }}
                  src={"imgs/icons/vale-refeicao.png"}
                />
                <div className="ml-2 font-light" style={{ fontSize: "18px" }}>
                  Vale-refeição
                </div>
              </div>

              <div
                className="flex items-center cursor-pointer mt-3"
                checked={assistencia}
                onClick={() => setAssistencia(!assistencia)}
              >
                <label
                  class="relative cursor-pointer text-xl pl-8"
                  style={{ marginTop: "-26px" }}
                >
                  <input
                    class="absolute opacity-0 left-0 top-0 cursor-pointer"
                    type="checkbox"
                    checked={assistencia}
                  />
                  <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                </label>
                <img
                  style={{ height: "36px", width: "auto" }}
                  src={"imgs/icons/medica.png"}
                />
                <div className="ml-2 font-light" style={{ fontSize: "18px" }}>
                  Assistência médica
                </div>
              </div>
            </div>
          </div>

          <div className="ml-16">
            <div className="mt-8 flex flex-col">
              <div
                className="flex items-center mb-4"
                style={{ marginLeft: "-6px" }}
              >
                <img src="imgs/icons/search.png" />
                <input
                  placeholder="Digite uma busca"
                  className="border p-2"
                  style={{ width: "250px" }}
                />
              </div>

              <div
                className="flex items-center cursor-pointer"
                checked={valeAlimentacao}
                onClick={() => setValeAlimentacao(!valeAlimentacao)}
              >
                <label
                  class="relative cursor-pointer text-xl pl-8"
                  style={{ marginTop: "-26px" }}
                >
                  <input
                    class="absolute opacity-0 left-0 top-0 cursor-pointer"
                    type="checkbox"
                    checked={valeAlimentacao}
                  />
                  <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                </label>
                <img
                  style={{ height: "36px", width: "auto" }}
                  src={"imgs/icons/vale-alimentacao.png"}
                />
                <div className="ml-2 font-light" style={{ fontSize: "18px" }}>
                  Vale-alimentação
                </div>
              </div>

              <div
                className="flex items-center cursor-pointer mt-3"
                checked={valeTransporte}
                onClick={() => setValeTransporte(!valeTransporte)}
              >
                <label
                  class="relative cursor-pointer text-xl pl-8"
                  style={{ marginTop: "-26px" }}
                >
                  <input
                    class="absolute opacity-0 left-0 top-0 cursor-pointer"
                    type="checkbox"
                    checked={valeTransporte}
                  />
                  <span class="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
                </label>
                <img
                  style={{ height: "36px", width: "auto" }}
                  src={"imgs/icons/vale-transporte.png"}
                />
                <div className="ml-2 font-light" style={{ fontSize: "18px" }}>
                  Vale-transporte
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center w-full mt-1 mb-8"
          onClick={() =>
            setMarcadores([{ lat: -23.225706, lng: -45.916568, state: "SP" }])
          }
        >
          <button
            className="rounded-full px-8 mb-16"
            style={{ color: "white", height: "40px" }}
          >
            Buscar
          </button>
        </div>
      </div>

      <ModalVaga open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default VagasComponent;
