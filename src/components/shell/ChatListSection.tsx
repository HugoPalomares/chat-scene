import React, { ReactNode } from "react";

interface ChatListSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ChatListSection: React.FC<ChatListSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`w-full pt-3 ${className}`}>
      <div className="flex w-full text-xs text-[#616161] font-normal whitespace-nowrap leading-4 pb-1 px-1">
        <div className="relative flex min-w-60 w-full items-start flex-1 shrink basis-[0%] px-4 py-0.5">
          <div className="z-0 flex-1 shrink basis-[0%] my-auto">{title}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/77c62d4622f799b0029dc4a17e464f8130f1cfbc?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 absolute z-0 shrink-0 h-4 left-0 bottom-0.5"
            alt="Icon"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
