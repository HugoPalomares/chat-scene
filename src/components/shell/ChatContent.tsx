
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { useChatSimulation } from "@/context/ChatSimulationContext";

export const ChatContent: React.FC = () => {
  const { messages } = useChatSimulation();

  return (
    <div className="flex w-full flex-col flex-1 px-[72px] py-10 overflow-y-auto max-md:max-w-full max-md:px-5">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          timestamp={message.timestamp}
          content={message.content}
          isUser={message.isUser}
          avatar={message.avatar}
        />
      ))}
    </div>
  );
};
