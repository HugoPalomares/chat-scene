
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

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
  // Get initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
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
            <Avatar className="w-5 h-5">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-xs">{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div className="self-stretch flex-1 shrink basis-[0%] my-auto text-ellipsis overflow-hidden whitespace-nowrap">
              {name}
            </div>
          </div>
          <div className="text-[#616161] text-right text-xs font-normal leading-4 self-stretch my-auto whitespace-nowrap">
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
