import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import DetailsComponent from "app/components/details";

const details = () => {
  return (
    <>
      <UINavBar type="vagas" />
      <DetailsComponent />
    </>
  );
};

export default details;
