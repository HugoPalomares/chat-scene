
import React, { useState } from "react";
import { TitleBar } from "./TitleBar";
import { AppBar } from "./AppBar";
import { LeftRail } from "./LeftRail";
import { ChatHeader } from "./ChatHeader";
import { ChatContent } from "./ChatContent";
import { ChatCompose } from "./ChatCompose";
import { X } from "lucide-react";
import { ConversationSummary } from "./ConversationSummary";
import { ChatListItem } from "./ChatListItem";

// Sample data for John's chat
const johnChatData = {
  id: "john-chat",
  avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  name: "John Smith",
  timestamp: "5/12, 10:30 AM",
  isUnread: true,
  isBold: true,
};

export const Shell: React.FC = () => {
  const [rightSideVisible, setRightSideVisible] = useState(true);
  const [highlightedMessage, setHighlightedMessage] = useState<string | undefined>(undefined);
  const [showJohnChat, setShowJohnChat] = useState(false);
  
  const toggleRightSide = () => {
    setRightSideVisible(prev => !prev);
  };
  
  const handleOpenJohnChat = () => {
    setShowJohnChat(true);
  };

  return (
    <div className="bg-[rgba(234,234,234,1)] overflow-hidden h-full flex flex-col">
      <TitleBar />
      <div className="flex w-full items-stretch flex-1 h-[calc(100%-48px)] max-md:max-w-full">
        <AppBar />
        <div className="bg-[#fafafa] w-60 flex-col flex border-r border-[rgba(0,0,0,0.05)]">
          {/* Insert John's chat at the top */}
          {showJohnChat && (
            <div className="pt-1">
              <ChatListItem
                avatar={johnChatData.avatar}
                name={johnChatData.name}
                timestamp={johnChatData.timestamp}
                isActive={false}
                isUnread={johnChatData.isUnread}
                isBold={johnChatData.isBold}
              />
            </div>
          )}
          <LeftRail />
        </div>
        <div className="min-w-60 flex-1 shrink basis-[0%] flex flex-col max-md:max-w-full">
          <ChatHeader onToggleRightSide={toggleRightSide} rightSideVisible={rightSideVisible} />
          <div className="bg-white w-full flex-1 flex flex-col max-md:max-w-full relative overflow-hidden border-t border-[rgba(0,0,0,0.05)]">
            <div className="flex flex-1 h-full">
              <div className="flex-1 flex flex-col overflow-hidden">
                <ChatContent highlightedMessageId={highlightedMessage} />
                <div className="sticky bottom-0 left-0 right-0 z-10">
                  <ChatCompose />
                </div>
              </div>
              {rightSideVisible && (
                <div className="w-72 border-l border-[rgba(0,0,0,0.05)] flex flex-col">
                  <div className="p-4 border-b border-[rgba(0,0,0,0.05)] flex justify-between items-center">
                    <h2 className="text-[#242424] text-lg font-bold leading-none">Conversation Summary</h2>
                    <button 
                      onClick={toggleRightSide} 
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Close panel"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-4 flex-1 overflow-auto">
                    <ConversationSummary 
                      onEventClick={setHighlightedMessage} 
                      onOpenJohnChat={handleOpenJohnChat}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
