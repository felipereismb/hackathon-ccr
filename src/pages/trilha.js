import React from "react";
import ScreenTrilha from "app/screens/trilha";
import DynamicHead from "app/components/UI/head/dynamic-head";

export default () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(imgs/backgrounds/intro.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <DynamicHead />
        <ScreenTrilha />
      </div>
    </>
  );
};
