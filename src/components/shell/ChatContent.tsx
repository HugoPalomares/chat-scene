
import React from "react";
import { ChatMessage } from "./ChatMessage";
import { AccessReviewCard } from "./AccessReviewCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ChatContent: React.FC = () => {
  return (
    <ScrollArea className="flex-1 overflow-y-auto h-full">
      <div className="flex w-full flex-col px-[72px] py-10 max-md:px-5">
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:15 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Hi Will, I need your input on the current Salesforce access review. To help expedite the process, I've already reviewed about 80% of the users, but I need your decisions on the remaining cases.
              <br /><br />
              <AccessReviewCard />
            </>
          }
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:15 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Let's start with the group I've already reviewed: There are 80 users, all Controllers in the Finance department. They are actively using their 'Analytics Cloud' role, which you previously approved. Based on this, my recommendation is to retain their access. Do you agree?
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:16 AM"
          content="Yes, that sounds correct. Please retain their access."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:18 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Great, I've marked those 80 users for retention. Now, regarding the remaining users requiring review:
              <br /><br />
              First, there are 10 users from the Marketing department. Records show their access was assigned by John, seemingly outside the standard approval process, and no business justification was documented. They currently show no active usage of this access. Should we keep their access enabled?
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:20 AM"
          content="Hmm, I'm not sure about those. Could you please check with John to see if there's an ongoing need?"
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:21 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="Certainly. I will contact John and let you know his feedback."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:22 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Next, there are 9 Accounting Clerks within the Finance department who also haven't used their Salesforce access recently. Our records indicate they requested this access, and you approved it at the time. Should we maintain their access?
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:23 AM"
          content="I don't recall the specifics offhand. Can you remind me when they requested it and what justification they provided?"
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:24 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="They submitted their requests back in January, citing 'Project Amadeus' as the reason."
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:26 AM"
          content="Ah, right. That project was cancelled. We can revoke their access."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:27 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="Understood, access for those 9 users will be revoked."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:28 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Lastly, there's Julia. She still has access assigned from when she was in Finance, but she recently transferred to the Customer Success department. Does she still require this specific Salesforce access in her new role?
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:28 AM"
          content="No, she doesn't need it anymore. Let's remove her access."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:29 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Okay, access for Julia will be removed. Thank you, Will. That's all the input I need from you at this moment. I will follow up regarding the 10 marketing users once I hear back from John, and then we can finalize this review cycle.
            </>
          }
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/14, 10:45 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="Hi Will, quick update on the Salesforce access review. John confirmed that the 10 marketing users no longer require access. Based on his confirmation and your previous decisions, I have revoked their access and completed the review. All records have been updated."
        />
      </div>
    </ScrollArea>
  );
};
