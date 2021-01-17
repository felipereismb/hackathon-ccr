import React from "react";

import IntroSection from "./components/intro";
import SteakholdersSection from "./components/stakeholders";
import ServicesSection from "./components/services";
import QuestionsSection from "./components/questions";
import PrepareComponent from "./components/prepare";

const HomeComponent = () => {
  return (
    <div className="container mx-auto px-8">
      <IntroSection />
      <SteakholdersSection />
      <PrepareComponent />
      <ServicesSection />
      {/* <QuestionsSection /> */}
    </div>
  );
};

export default HomeComponent;
