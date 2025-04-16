
import React from "react";
import { TitleBar } from "./TitleBar";
import { AppBar } from "./AppBar";
import { LeftRail } from "./LeftRail";
import { ChatHeader } from "./ChatHeader";
import { ChatContent } from "./ChatContent";
import { ChatCompose } from "./ChatCompose";

export const Shell: React.FC = () => {
  return (
    <div className="bg-[rgba(234,234,234,1)] overflow-hidden h-full flex flex-col">
      <TitleBar />
      <div className="flex w-full items-stretch flex-1 h-[calc(100%-48px)] max-md:max-w-full">
        <AppBar />
        <LeftRail />
        <div className="min-w-60 flex-1 shrink basis-[0%] flex flex-col max-md:max-w-full">
          <ChatHeader />
          <div className="bg-white w-full flex-1 flex flex-col max-md:max-w-full relative overflow-hidden border-t border-[rgba(0,0,0,0.05)]">
            <ChatContent />
            <div className="sticky bottom-0 left-0 right-0 z-10">
              <ChatCompose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

