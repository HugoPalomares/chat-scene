import React from "react";

interface ChatListItemProps {
  avatar: string;
  name: string;
  timestamp: string;
  isActive?: boolean;
  isUnread?: boolean;
  isBold?: boolean;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({
  avatar,
  name,
  timestamp,
  isActive = false,
  isUnread = false,
  isBold = false,
}) => {
  return (
    <div className="w-full font-normal px-1">
      <div
        className={`rounded relative flex min-h-8 w-full ${
          isActive
            ? "bg-white border border-[rgba(0,0,0,0.05)] border-solid"
            : ""
        }`}
      >
        <div className="rounded z-0 flex min-w-60 min-h-8 w-full items-center gap-2 flex-1 shrink basis-[0%] px-4 py-1.5">
          <div
            className={`self-stretch flex items-center gap-3 text-sm text-[#242424] ${
              isBold ? "font-bold" : ""
            } leading-5 flex-1 shrink basis-[0%] my-auto`}
          >
            <img
              src={avatar}
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt={name}
            />
            <div className="self-stretch flex-1 shrink basis-[0%] my-auto text-ellipsis">
              {name}
            </div>
          </div>
          <div className="text-[#616161] text-right text-xs font-normal leading-4 self-stretch my-auto">
            {timestamp}
          </div>
        </div>
        {isUnread && (
          <div className="absolute z-0 flex w-4 shrink-0 h-4 translate-x-[0%] -translate-y-2/4 left-0 top-2/4" />
        )}
      </div>
    </div>
  );
};
