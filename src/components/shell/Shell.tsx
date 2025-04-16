
import React from "react";
import { AppBar } from "./AppBar";
import { LeftRail } from "./LeftRail";
import { TitleBar } from "./TitleBar";
import { ChatHeader } from "./ChatHeader";
import { ChatContent } from "./ChatContent";
import { ChatCompose } from "./ChatCompose";
import { ChatSimulationProvider } from "@/context/ChatSimulationContext";

export const Shell: React.FC = () => {
  return (
    <div className="flex flex-col bg-white w-full h-full pt-0">
      <TitleBar />
      <div className="flex-1 flex h-full">
        <LeftRail />
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <AppBar />
          <ChatSimulationProvider>
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <ChatHeader />
              <ChatContent />
              <ChatCompose />
            </div>
          </ChatSimulationProvider>
        </div>
      </div>
    </div>
  );
};
