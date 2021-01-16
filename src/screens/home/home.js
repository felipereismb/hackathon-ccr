import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import HomeComponent from "app/components/home/home";

const home = () => {
  return (
    <>
      <UINavBar typeNav="home" />
      <hr className="md:pt-12 md:hidden" />
      <HomeComponent />
    </>
  );
};

export default home;
