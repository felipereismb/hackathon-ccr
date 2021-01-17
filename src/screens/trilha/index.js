import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import TrilhaComponent from "app/components/trilha";

const trilha = () => {
  return (
    <>
      <UINavBar type="dash" />
      <TrilhaComponent />
    </>
  );
};

export default trilha;
