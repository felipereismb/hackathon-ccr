import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import DashComponent from "app/components/dash";

const dash = () => {
  return (
    <>
      <UINavBar type="dash" />
      <DashComponent />
    </>
  );
};

export default dash;
