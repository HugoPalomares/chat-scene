
import React from "react";
import { ChatListSection } from "./ChatListSection";
import { ChatListItem } from "./ChatListItem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User, UserRound, Users, MessageCircle } from "lucide-react";

export const LeftRail: React.FC = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative min-w-60 overflow-hidden w-80">
      <div className="relative z-0 flex w-full items-center justify-between pl-5 pr-3.5 py-3.5">
        <div className="self-stretch z-0 text-lg text-[#242424] font-bold whitespace-nowrap leading-none my-auto">
          Chat
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/0b7c993b93ca27e7fdf1a05b10d9786e76566ac1?placeholderIfAbsent=true"
          className="aspect-[2] object-contain w-16 self-stretch z-0 shrink-0 my-auto"
          alt="Controls"
        />
        <div className="absolute z-0 flex min-w-60 flex-col items-center w-80 pt-[5px] pb-1 left-px -right-px -bottom-1">
          <div className="border min-h-px w-full border-[rgba(224,224,224,1)] border-solid" />
        </div>
      </div>
      <div className="absolute z-0 flex min-h-[859px] w-2 right-0 inset-y-0" />
      <div className="z-0 w-full">
        <ChatListSection title="Favorites">
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
            name="Kayo Miwa"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            name="August Bergman"
            timestamp="11:18 AM"
            isBold={true}
            isUnread={true}
          />
        </ChatListSection>

        <ChatListSection title="Chats" className="mt-1">
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1581226892492-f03d5b4bc5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
            name="Access Reviews Agent"
            timestamp="11:32 AM"
            isActive={true}
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
            name="Emiliano Ceballos"
            timestamp="11:55 AM"
            isBold={true}
            isUnread={true}
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
            name="Serena Davis"
            timestamp="11:32 AM"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1612353413834-e1a391f79a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
            name="Oscar Krogh"
            timestamp="11:02 AM"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            name="Marketing team sync"
            timestamp="10:43 AM"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
            name="Kian Lambert"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Team Design Template"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b68f54d819bc14fae9d60d11182f426b7f625f33?placeholderIfAbsent=true"
            name="Marie's B-day gift"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            name="Tanya Rodriguez"
            timestamp="Monday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            name="Marcus Chen"
            timestamp="Monday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            name="Elena Johnson"
            timestamp="Sunday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            name="David Park"
            timestamp="Sunday"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            name="Sophie Wilson"
            timestamp="Last week"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            name="Project Q Brainstorm"
            timestamp="Last week"
          />
          <ChatListItem
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            name="James Sullivan"
            timestamp="April 10"
          />
        </ChatListSection>
      </div>
    </div>
  );
};
