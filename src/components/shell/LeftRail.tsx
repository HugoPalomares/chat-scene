import React from "react";
import { ChatListSection } from "./ChatListSection";
import { ChatListItem } from "./ChatListItem";

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
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/3331bb9e4a947b024dfb208b3f4cae6d9a3b4fe4?placeholderIfAbsent=true"
            name="Kayo Miwa"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/1bee8297cbee3757fc1b004fab117d74bae27075?placeholderIfAbsent=true"
            name="August Bergman"
            timestamp="11:18 AM"
            isBold={true}
            isUnread={true}
          />
        </ChatListSection>

        <ChatListSection title="Chats" className="mt-1">
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b91514dda4d7ab18b508781d2a3056f629591c3c?placeholderIfAbsent=true"
            name="Access reviews Agent"
            timestamp="11:32 AM"
            isActive={true}
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/c8e337f17d2884595829457f9f954fbe31844722?placeholderIfAbsent=true"
            name="Emiliano Ceballos"
            timestamp="1:55 PM"
            isBold={true}
            isUnread={true}
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/2a06eba5adbed9404b155a9d108a4af24fef1963?placeholderIfAbsent=true"
            name="Serena Davis"
            timestamp="11:32 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/3ab6bd8b370410ba6f70d773bfff3acecbd47762?placeholderIfAbsent=true"
            name="Oscar Krogh"
            timestamp="11:02 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b68f54d819bc14fae9d60d11182f426b7f625f33?placeholderIfAbsent=true"
            name="Marketing team sync"
            timestamp="10:43 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/1a4047a473596792c03e0eb951b7ecd96ff28b09?placeholderIfAbsent=true"
            name="Kian Lambert"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/8a6ffaaa5b8920046a0c2096936455ed73d0ca90?placeholderIfAbsent=true"
            name="Team Design Template"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b68f54d819bc14fae9d60d11182f426b7f625f33?placeholderIfAbsent=true"
            name="Marie's B-day gift"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/870611e7be1b64307422244da8d6a98a9a370da9?placeholderIfAbsent=true"
            name="Serena Davis"
            timestamp="11:32 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/29c6f2849c0aa480cb7a8f10a18ad035fdad21be?placeholderIfAbsent=true"
            name="Serena Davis"
            timestamp="11:32 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/3ab6bd8b370410ba6f70d773bfff3acecbd47762?placeholderIfAbsent=true"
            name="Oscar Krogh"
            timestamp="11:02 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b68f54d819bc14fae9d60d11182f426b7f625f33?placeholderIfAbsent=true"
            name="Marketing team sync"
            timestamp="10:43 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/310d444058270b48ddbc2dc8d80c1b7cdb5b77fc?placeholderIfAbsent=true"
            name="Kian Lambert"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/3ab6bd8b370410ba6f70d773bfff3acecbd47762?placeholderIfAbsent=true"
            name="Oscar Krogh"
            timestamp="11:02 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b68f54d819bc14fae9d60d11182f426b7f625f33?placeholderIfAbsent=true"
            name="Marketing team sync"
            timestamp="10:43 AM"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/07671de727d90f84df762eeba743f9e7a5d528a5?placeholderIfAbsent=true"
            name="Kian Lambert"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/10aff7e74c0dfff56ff57a7ddaadf5df8dbdeec0?placeholderIfAbsent=true"
            name="Team Design Template"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b68f54d819bc14fae9d60d11182f426b7f625f33?placeholderIfAbsent=true"
            name="Marie's B-day gift"
            timestamp="Yesterday"
          />
          <ChatListItem
            avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/ca62455835643edad5831be22888bbcdb06207b2?placeholderIfAbsent=true"
            name="Serena Davis"
            timestamp="11:32 AM"
          />
        </ChatListSection>
      </div>
    </div>
  );
};
