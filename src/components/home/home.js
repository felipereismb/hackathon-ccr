import React from "react";

import IntroComponent from "./components/intro";
import SteakholdersComponent from "./components/stakeholders";
import ServicesComponent from "./components/services";
import QuestionsComponent from "./components/questions";

const HomeComponent = () => {
  return (
    <div className="px-4 md:m-16 grid grid-cols-1 gap-4 md:bg-white">
      <IntroComponent />
      <SteakholdersComponent />
      <ServicesComponent />
      <QuestionsComponent />
    </div>
  );
};

export default HomeComponent;
