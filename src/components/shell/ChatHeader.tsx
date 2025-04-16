import React from "react";

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-white w-full overflow-hidden pt-[7px] max-md:max-w-full">
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
          <div className="self-stretch flex gap-[-8px] my-auto">
            <div className="rounded relative flex min-h-[52px] gap-1.5 px-2.5 py-4">
              <div className="z-0 text-sm text-[#242424] font-semibold whitespace-nowrap leading-5 px-0.5">
                Chat
              </div>
              <div className="absolute z-0 flex flex-col h-0.5 w-[54px] px-[11px] bottom-0 inset-x-0">
                <div className="bg-[rgba(91,95,199,1)] flex w-[30px] shrink-0 h-0.5 rounded-[999px_999px_0px_0px]" />
              </div>
            </div>
            <div className="flex gap-2.5 w-8 pl-3 pt-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/82fc8fea2e8d5f6f3c566d3958e333748e9ce29b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5"
                alt="Add Tab"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 my-auto">
          <div className="flex w-8">
            <div className="rounded bg-[rgba(255,255,255,0)] flex w-8 items-center overflow-hidden justify-center h-8 px-1.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/4f2ac9c3719a7399a7d47eacdc2c1c5d71880850?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch my-auto"
                alt="More Options"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[5px] pb-1 max-md:max-w-full">
        <div className="border min-h-px w-full border-[rgba(0,0,0,0.05)] border-solid max-md:max-w-full" />
      </div>
    </div>
  );
};
