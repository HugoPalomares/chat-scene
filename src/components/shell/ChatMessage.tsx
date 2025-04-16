
import React, { ReactNode } from "react";

interface ChatMessageProps {
  sender?: string;
  timestamp: string;
  content: ReactNode;
  isUser?: boolean;
  avatar?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  timestamp,
  content,
  isUser = false,
  avatar,
}) => {
  if (isUser) {
    return (
      <div className="rounded flex w-full max-w-[1052px] justify-end ml-auto gap-1.5 max-md:max-w-full mb-4">
        <div className="flex flex-col items-end">
          <div className="text-[#616161] text-xs leading-4 mr-4 mb-1">{timestamp}</div>
          <div className="text-sm text-[#242424] leading-5">
            <div className="bg-[rgba(232,235,250,1)] inline-block px-4 py-2 rounded-md">
              <div className="text-right">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded flex w-full max-w-[1052px] gap-1.5 max-md:max-w-full mb-4">
      <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="flex w-full max-w-[912px] gap-1.5 flex-wrap max-md:max-w-full">
          {avatar && (
            <div className="flex items-start gap-2.5 w-8 pt-0">
              <div className="rounded bg-[rgba(236,236,236,1)] self-start flex w-8 items-center gap-2.5 overflow-hidden h-8 p-1">
                <div className="rounded bg-[rgba(255,255,255,0)] self-stretch flex min-h-6 w-6 items-center overflow-hidden justify-center h-6 my-auto">
                  <img
                    src={avatar}
                    className="aspect-[1] object-contain w-6 self-stretch my-auto"
                    alt={sender}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-w-[912px] max-md:max-w-full">
            <div className="flex gap-2 text-xs text-[#616161] font-normal leading-4">
              <div>{sender}</div>
              <div>{timestamp}</div>
            </div>
            <div className="bg-neutral-100 w-full mt-[7px] pb-2 px-4 rounded-md max-md:max-w-full">
              <div className="flex w-full flex-col items-stretch max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                  <div className="text-[#242424] text-sm font-normal leading-5 max-md:max-w-full">
                    {content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
