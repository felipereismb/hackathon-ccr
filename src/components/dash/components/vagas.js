import React, { useState } from "react";

import GoogleMapReact from "google-map-react";

import Separator from "src/components/UI/separator";
import ModalVaga from "src/components/UI/modal/vaga-modal";

const defaultCenter = { lat: -16.82488, lng: -49.164749 };

const markers = [
  { lat: -23.225706, lng: -45.916568 },
  { lat: -10.252673, lng: -48.324874 },
  { lat: -22.544178, lng: -43.58877 },
  { lat: -12.612144, lng: -41.673002 },
  { lat: -20.723391, lng: -54.474291 },
  { lat: -13.071071, lng: -55.919413 },
  { lat: -16.82488, lng: -49.164749 },
  { lat: -19.939458, lng: -43.935225 },
];

const VagasComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="md:px-16 pt-4 md:pt-4">
      <div className="md:px-16 flex flex-col items-center center pt-4 md:pt-4 relative">
        <div className="font-bold mb-4" style={{ fontSize: "36px" }}>
          Vagas
        </div>
        <Separator />
      </div>
      <div className="py-8" style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDOrvhkeogBJ-yRI4j2yFIvWh481GPu3cw" }}
          defaultCenter={defaultCenter}
          defaultZoom={5}
        >
          {markers.map((marker) => (
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
      <ModalVaga open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default VagasComponent;
