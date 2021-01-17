import React, { useState } from "react";

import OverviewSection from "./components/sections/overview";
import RepositorieSection from "./components/sections/repositorie";
import StarsSection from "./components/sections/stars";
import SeguidoresSection from "./components/sections/seguidores";

const ProfileComponent = () => {
  const [selectedAba, setSelectedAba] = useState("overview");

  return (
    <>
      <div class="flex px-16">
        <div class="container mx-auto px-8">
          <div class="flex px-10">
            <div class="w-1/4">
              <div class="mb-4">
                <img class="rounded-lg" src="imgs/user.jpeg" />
              </div>
              <div class="mb-4">
                <div class="text-3xl font-medium text-grey-darkest">
                  Felipe Reis
                </div>
                <div class="text-xl text-grey-dark font-light">@felipermb</div>
              </div>
              <div class="pb-6 border-b">
                <a href="#" class="no-underline text-sm ">
                  Add a bio
                </a>
              </div>
              <div class="flex items-center text-left py-4 mb-4 border-b">
                <div class="flex items-center mr-2">
                  <svg
                    class="fill-current text-grey-dark w-4 h-4"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                <div>
                  <a href="#" class="no-underline text-sm">
                    felipereis.m.b@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div class="w-3/4 ml-6">
              {/* Abas */}
              <div class="flex items-center font-thin text-grey-dark text-sm border-b">
                <div
                  onClick={() => setSelectedAba("overview")}
                  class={`${
                    selectedAba === "overview"
                      ? "p-4 flex border-b-2 font-normal text-grey-darkest border-orange -mb-2px"
                      : "p-4 flex items-center hover:opacity-25"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  Overview
                </div>

                <div
                  onClick={() => setSelectedAba("repositorie")}
                  class={`${
                    selectedAba === "repositorie"
                      ? "p-4 flex border-b-2 font-normal text-grey-darkest border-orange -mb-2px"
                      : "p-4 flex items-center hover:opacity-25"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div>Repositories</div>
                  <div class="rounded-lg bg-grey-light text-xs ml-1 p-px">
                    41
                  </div>
                </div>

                <div
                  onClick={() => setSelectedAba("stars")}
                  class={`${
                    selectedAba === "stars"
                      ? "p-4 flex border-b-2 font-normal text-grey-darkest border-orange -mb-2px"
                      : "p-4 flex items-center hover:opacity-25"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div>Stars</div>
                  <div class="rounded-lg bg-grey-light text-xs ml-1 p-px">
                    6
                  </div>
                </div>

                <div
                  onClick={() => setSelectedAba("seguidores")}
                  class={`${
                    selectedAba === "seguidores"
                      ? "p-4 flex border-b-2 font-normal text-grey-darkest border-orange -mb-2px"
                      : "p-4 flex items-center hover:opacity-25"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <div>Followers</div>
                  <div class="rounded-lg bg-grey-light text-xs ml-1 p-px">
                    15
                  </div>
                </div>
              </div>

              {selectedAba === "overview" && <OverviewSection />}
              {selectedAba === "repositorie" && <RepositorieSection />}
              {selectedAba === "stars" && <StarsSection />}
              {selectedAba === "seguidores" && <SeguidoresSection />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
