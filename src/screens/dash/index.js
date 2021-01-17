import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import DashComponent from "app/components/dash";

const dash = ({ type }) => {
  return (
    <>
      <UINavBar type={type} />
      <DashComponent />
    </>
  );
};

export default dash;
