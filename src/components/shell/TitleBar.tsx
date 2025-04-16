import React from "react";

export const TitleBar: React.FC = () => {
  return (
    <div className="w-full max-md:max-w-full">
      <div className="relative flex min-h-12 w-full items-start justify-between pl-[22px] max-md:max-w-full max-md:pl-5">
        <div className="z-0 flex items-center gap-3 w-6 my-auto">
          <div className="self-stretch flex w-6 items-center gap-6 my-auto">
            <div className="self-stretch flex w-6 gap-2.5 my-auto p-0.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/d0e89d31d14c9f96b82a3850fa5dc63ed78b4fd8?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5"
                alt="Teams Logo"
              />
            </div>
          </div>
        </div>
        <div className="z-0 flex items-center gap-2 my-auto">
          <div className="self-stretch flex items-center gap-2 w-8 my-auto">
            <div className="self-stretch flex w-8 items-center my-auto">
              <div className="rounded bg-[rgba(255,255,255,0)] self-stretch flex w-8 items-center overflow-hidden justify-center h-8 my-auto px-1.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/d07fc91706b97b4ce49de5c10844afbcb605556a?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                  alt="Button"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-center gap-2 w-8 my-auto rounded-3xl">
            <div className="self-stretch flex w-8 items-center gap-2.5 my-auto rounded-3xl">
              <div className="self-stretch flex w-full items-center gap-2.5 flex-1 shrink basis-[0%] my-auto p-0.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/d1c2ca24a9d785cfac77c5c72a0943cfa7d9eb22?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-7 self-stretch flex-1 shrink basis-[0%] my-auto"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-center w-[132px] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/c9ff89e893b472e452ea8047a73d2332fcd3a6c9?placeholderIfAbsent=true"
              className="aspect-[2.75] object-contain w-[132px] self-stretch my-auto"
              alt="Window Controls"
            />
          </div>
        </div>
        <div className="absolute z-0 w-[1329px] pt-px bottom-0 inset-x-0 max-md:max-w-full">
          <div className="border min-h-px w-full border-[rgba(0,0,0,0.05)] border-solid max-md:max-w-full" />
        </div>
        <div className="absolute z-0 flex min-w-60 gap-4 text-sm text-[#707070] font-normal whitespace-nowrap leading-5 -translate-x-2/4 translate-y-[0%] w-[468px] left-2/4 bottom-2 max-md:max-w-full">
          <div className="rounded shadow-[0px_1px_2px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] z-0 min-w-60 w-[468px] overflow-hidden max-md:max-w-full">
            <div className="rounded bg-white border flex w-full items-center gap-2.5 overflow-hidden px-2.5 border-[rgba(255,255,255,0)] border-solid max-md:max-w-full">
              <div className="self-stretch flex min-w-60 w-full items-center gap-1.5 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/86f5fdfb547e5aabbd78cb6a6c2e71464618273d?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Search Icon"
                />
                <div className="self-stretch min-w-60 overflow-hidden flex-1 shrink basis-[0%] my-auto pt-[5px] pb-[7px] px-0.5 max-md:max-w-full">
                  Search
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/c85573b0c630a8fc96128ff6daff20f75b528e17?placeholderIfAbsent=true"
            className="aspect-[2] object-contain w-16 absolute z-0 shrink-0 -left-20 bottom-0"
            alt="Decoration"
          />
        </div>
      </div>
    </div>
  );
};
