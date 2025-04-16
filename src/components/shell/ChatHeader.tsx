
import React from "react";

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-hidden max-md:max-w-full h-[52px] flex items-center">
      <div className="z-10 flex w-full max-w-[907px] items-stretch gap-5 flex-wrap justify-between ml-5 mr-3.5 max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-center gap-[11px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/ffbd5b754c4191d3777df1d248ce09d4caee309e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 rounded self-stretch shrink-0 my-auto"
            alt="Chat Avatar"
          />
          <div className="text-[#242424] text-lg font-bold leading-none self-stretch w-[196px] my-auto">
            Access reviews Agent
          </div>
        </div>
      </div>
      <div className="pt-[5px] pb-1 max-md:max-w-full">
        <div className="border min-h-px w-full border-[rgba(0,0,0,0.05)] border-solid max-md:max-w-full" />
      </div>
    </div>
  );
};
