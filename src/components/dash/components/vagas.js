import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Separator from "src/components/UI/separator";

const defaultCenter = { lat: 40.748817, lng: -73.985428 };
const defaultOptions = { scrollwheel: false };
const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px" };
const mapElementStyle = { height: "100%" };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ))
);

const VagasComponent = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="md:px-16 mb-5 flex flex-col items-center center pt-4 md:pt-4 relative">
        <div className="font-bold  mb-4" style={{ fontSize: "36px" }}>
          Quem participa do intercâmbio
        </div>
        <Separator />
      </div>
      <RegularMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOrvhkeogBJ-yRI4j2yFIvWh481GPu3cw"
        loadingElement={<div style={loadingElementStyle} />}
        containerElement={<div style={containerElementStyle} />}
        mapElement={<div style={mapElementStyle} />}
      />
    </div>
  );
};

export default VagasComponent;
