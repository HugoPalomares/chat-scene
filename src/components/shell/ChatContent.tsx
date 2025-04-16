
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
              Hi Will, there's an access review for Salesforce that needs your immediate attention. I've already completed 80% to save you time, but I still need your help with a few final decisions. First, for the 80% I've processed: these 80 users are all controllers from the finance department who are actively using their 'Analytics Cloud' role, which you had previously approved. Are you okay with them retaining their access?
              <br />
              <br />
              Let's tackle the rest together—it should only take a couple of minutes.
              <AccessReviewCard />
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:16 AM"
          content="That should be fine, but can you quickly let me know who these 80 users are so I can take a look at them?"
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:18 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Great, I'll make sure their access is retained. For the remaining 20 users, I need some guidance: I can see that 10 users were assigned access by John without going through the proper approval process. They're all from the marketing department and aren't even using their access. John didn't provide any business justification at the time. Should we maintain their access?
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:20 AM"
          content="I'm not sure about these. Can you check with John?"
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:21 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              I'll check with John and get back to you. I also see 9 accounting clerks from the finance department who never use their access. In the history, I can see they requested access and you previously approved it. Should we maintain their access going forward?
            </>
          }
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:23 AM"
          content="I don't fully recall these. Can you remind me when they requested access and if they provided a business justification?"
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:24 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="They all requested access back in January and mentioned Project Amadeus as the reason."
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:26 AM"
          content="Oh right, that project was cancelled. We can revoke their access."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:27 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="Perfect. One last item: Julia still has access. She used to be in the finance department but recently moved to the customer success department. Do you think she still needs access?"
        />
        <ChatMessage
          isUser={true}
          timestamp="5/12, 9:28 AM"
          content="Let's remove her access."
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/12, 9:29 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content={
            <>
              Thank you, Will. That's all I needed for now. The auditors will be pleased with our decisions! 😉
              <br /><br />
              I'll let you know when I hear back from John, and then we can complete this review.
            </>
          }
        />
        <ChatMessage
          sender="Access review Agent"
          timestamp="5/14, 10:45 AM"
          avatar="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true"
          content="Hi Will, John got back to me and confirmed the marketing users no longer need access, so I've gone ahead and completed the review!"
        />
      </div>
    </ScrollArea>
  );
};
