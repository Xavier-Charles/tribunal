import React from "react";

const AboutComponent = ({dao}) => {
  return (
    <div
      className="w-full lg:w-3/4 float-right pl-0 lg:pl-5 relative"
      id="content-right"
    >
      <div className="px-3 md:px-0 mb-3 flex relative">
        <div className="flex-auto">
          <div className="flex items-center flex-auto">
            <h2 className="font-serif text-xl">About</h2>
          </div>
        </div>
        <div
          className="relative inline-block text-left h-full"
          data-v-025c8f0a=""
        ></div>
      </div>
      <div className="md:space-y-4 my-4">
        <div class="md:rounded-xl -ml-[1px] md:border bg-skin-block-bg border-skin-border text-base mb-3">
          <div class="p-4 leading-5 sm:leading-6">
            <div class="mb-3">
              <h4 class="text-skin-link mb-2 leading-7 break-words font-semibold text-lg">
                Network
              </h4>
              <div>Ropsten Testnet</div>
            </div>
            <div class="mb-3">
              <h4 class="text-skin-link mb-2 leading-7 break-words font-semibold text-lg">
                Description
              </h4>{" "}
              {dao.desc}
            </div>
            <div class="last:mb-0 mb-3"></div>
          </div>
        </div>
      </div>
      <div className="w-[10px] h-[10px] absolute bottom-0"></div>
    </div>
  );
};

export default AboutComponent;
