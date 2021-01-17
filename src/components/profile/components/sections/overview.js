import React from "react";

const OverviewSection = () => {
  return (
    <div>
      <div class="flex items-center">
        <div class="w-1/2 pt-6 pb-2 font-normal text-grey-darkest">Skills</div>
      </div>

      {/* Cards de habilidades */}
      <div class="flex">
        <div class="w-1/2 bg-white border px-4 py-4 mb-4 mr-2 rounded text-sm">
          <div class="flex">
            <div>
              <a href="#" class="no-underline">
                laravel/framework
              </a>
            </div>
          </div>
          <div class="flex text-sm mt-6">
            <div class="mr-4 font-thin text-xs">PHP</div>
            <div class="mr-4 font-thin text-xs">8.8k</div>
            <div class="mr-4 font-thin text-xs">5k</div>
          </div>
        </div>
        <div class="w-1/2 bg-white border px-4 py-4 mb-4 ml-4 rounded text-sm">
          <div class="flex">
            <div>
              <a href="#" class="no-underline">
                laravel/framework
              </a>
            </div>
          </div>
          <div class="flex text-sm mt-6">
            <div class="mr-4 font-thin text-xs">PHP</div>
            <div class="mr-4 font-thin text-xs">8.8k</div>
            <div class="mr-4 font-thin text-xs">5k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
