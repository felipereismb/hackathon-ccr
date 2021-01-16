import React from "react";

const IntroComponent = () => {
  return (
    <div className="md:px-16 text-center pt-4 md:pt-4">
      {/* <div className="md:m-16 grid grid-cols-2 gap-4 md:bg-white"> */}
      <div>
        <div className="text-lg leading-5 font-semibold">
          Em busca de uma nova experiência e renda?
        </div>
      </div>
      {/* <div>img</div> */}
      {/* </div> */}
      <div className="text-sm leading-4 mt-4">
        Trazemos a experiência de um intercâmbio cultural diretamente para
        dentro do país, aliado com o aprendizado de uma nova carreira e novas
        experiências.
      </div>
      <button className="mt-4 bg-current rounded-full w-40 ">Vamos lá</button>
    </div>
  );
};

export default IntroComponent;
