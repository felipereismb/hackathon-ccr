import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import DetailsComponent from "app/components/details";

const details = ({ type }) => {
  return (
    <>
      <UINavBar type={type} />
      <DetailsComponent />
    </>
  );
};

export default details;
