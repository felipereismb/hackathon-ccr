import React from "react";

import Steakholder from "src/components/steakholder/steakholder";

const SteakholdersComponent = () => {
  return (
    <div className="md:px-16 text-center pt-4 md:pt-4">
      <Steakholder />
      <Steakholder />
      <Steakholder />
    </div>
  );
};

export default SteakholdersComponent;
