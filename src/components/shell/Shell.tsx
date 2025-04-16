import React from "react";
import { TitleBar } from "./TitleBar";
import { AppBar } from "./AppBar";
import { LeftRail } from "./LeftRail";
import { ChatHeader } from "./ChatHeader";
import { ChatContent } from "./ChatContent";
import { ChatCompose } from "./ChatCompose";

export const Shell: React.FC = () => {
  return (
    <div className="bg-[rgba(234,234,234,1)] overflow-hidden rounded-lg">
      <TitleBar />
      <div className="flex w-full items-stretch flex-1 flex-wrap h-full max-md:max-w-full">
        <AppBar />
        <LeftRail />
        <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
          <ChatHeader />
          <div className="bg-white w-full flex-1 pt-10 max-md:max-w-full">
            <ChatContent />
            <ChatCompose />
          </div>
        </div>
      </div>
    </div>
  );
};
