import React from "react";
import ScreenDetails from "app/screens/details";
import DynamicHead from "app/components/UI/head/dynamic-head";

export default () => {
  return (
    <>
      <div>
        <DynamicHead />
        <ScreenDetails />
      </div>
    </>
  );
};
