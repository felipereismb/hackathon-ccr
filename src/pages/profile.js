import React from "react";
import ScreenProfile from "app/screens/profile/profile";
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
        <ScreenProfile />
      </div>
    </>
  );
};
