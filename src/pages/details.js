import React from "react";
import ScreenDetails from "app/screens/details";
import DynamicHead from "app/components/UI/head/dynamic-head";

export default () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(imgs/backgrounds/intro.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "contain",
        }}
      >
        <DynamicHead />
        <ScreenDetails />
      </div>
    </>
  );
};
