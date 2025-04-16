
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { AccessReviewCard } from "./AccessReviewCard";

export const ChatContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col flex-1 px-[72px] py-10 overflow-y-auto max-md:max-w-full max-md:px-5">
      <ChatMessage
        sender="Access review Agent"
        timestamp="5/12, 9:15 AM"
        avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
        content={
          <>
            Hi Will—there's an access review that needs your immediate
            attention. I've already completed 60% to save you time, but I still
            need your help with a few final decisions.
            <br />
            <br />
            Let's tackle the rest together—it should only take a couple of
            minutes.
            <AccessReviewCard />
          </>
        }
      />
      {/* User message removed as requested */}
    </div>
  );
};
