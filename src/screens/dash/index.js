import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import DashComponent from "app/components/dash";

const dash = () => {
  return (
    <>
      <UINavBar type="vagas" />
      <DashComponent />
    </>
  );
};

export default dash;
