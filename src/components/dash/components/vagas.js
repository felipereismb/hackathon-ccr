import React, { useState } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Separator from "src/components/UI/separator";
import ModalVaga from "src/components/UI/modal/vaga-modal";

const defaultCenter = { lat: -10.252673, lng: -48.324874 };
const defaultOptions = { scrollwheel: false };
const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "500px" };
const mapElementStyle = { height: "100%" };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} onClick={props.onClickMarker} />
    </GoogleMap>
  ))
);

const VagasComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="md:px-16 pt-4 md:pt-4">
      <div className="md:px-16 mb-5 flex flex-col items-center center pt-4 md:pt-4 relative">
        <div className="font-bold  mb-4" style={{ fontSize: "36px" }}>
          Vagas
        </div>
        <Separator />
      </div>
      <RegularMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOrvhkeogBJ-yRI4j2yFIvWh481GPu3cw"
        loadingElement={<div style={loadingElementStyle} />}
        containerElement={<div style={containerElementStyle} />}
        mapElement={<div style={mapElementStyle} />}
        onClickMarker={() => setOpenModal(true)}
      />
      <ModalVaga open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default VagasComponent;
