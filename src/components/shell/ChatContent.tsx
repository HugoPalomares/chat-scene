
import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { AccessReviewCard } from "./AccessReviewCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface MessageInfo {
  id: string;
  sender?: string;
  timestamp: string;
  content: React.ReactNode;
  isUser?: boolean;
  avatar?: string;
  type?: string; // Maps to event types in the timeline
}

// John conversation data
const johnConversationData: MessageInfo[] = [
  {
    id: "john-msg-1",
    sender: "Access review Agent",
    timestamp: "5/12, 10:00 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "I'm reaching out regarding the 10 users from the Marketing department who have Salesforce access. Their access was assigned outside the standard approval process, and they're showing no recent activity. Will mentioned you might have more context about this.",
  },
  {
    id: "john-msg-2",
    sender: "John Smith",
    timestamp: "5/12, 10:15 AM",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    content: "Thanks for checking. Those users were granted access for the Q1 marketing campaign that ended last month. They no longer need this access as the project is complete.",
  },
  {
    id: "john-msg-3",
    sender: "Access review Agent",
    timestamp: "5/12, 10:17 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Perfect, I'll note that these users no longer require access due to project completion. Would you like me to go ahead and revoke their access?",
  },
  {
    id: "john-msg-4",
    sender: "John Smith",
    timestamp: "5/12, 10:20 AM",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    content: "Yes, please go ahead and revoke their access. If they need it again for future campaigns, we'll request it through the proper channels.",
  },
  {
    id: "john-msg-5",
    sender: "Access review Agent",
    timestamp: "5/12, 10:22 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Great! I'll revoke access for those 10 Marketing users and update our records accordingly. I'll also let Will know about your confirmation. Thanks for your quick response.",
  },
  {
    id: "john-msg-6",
    sender: "John Smith",
    timestamp: "5/12, 10:25 AM",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    content: "You're welcome. Feel free to reach out if you need any additional information.",
  },
];

// This would typically come from a data source or context
export const messageData: MessageInfo[] = [
  {
    id: "msg-1",
    sender: "Access review Agent",
    timestamp: "5/12, 9:15 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Hi Will, I need your input on the current Salesforce access review. To help expedite the process, I've already reviewed about 80% of the users, but I need your decisions on the remaining cases.",
    type: "start"
  },
  {
    id: "msg-2",
    sender: "Access review Agent",
    timestamp: "5/12, 9:15 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Let's start with the group I've already reviewed: There are 80 users, all Controllers in the Finance department. They are actively using their 'Analytics Cloud' role, which you previously approved. Based on this, my recommendation is to retain their access. Do you agree?",
    type: "review"
  },
  {
    id: "msg-3",
    isUser: true,
    timestamp: "5/12, 9:16 AM",
    content: "Yes, that sounds correct. Please retain their access.",
    type: "decision"
  },
  {
    id: "msg-4",
    sender: "Access review Agent",
    timestamp: "5/12, 9:18 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Great, I've marked those 80 users for retention. Now, regarding the remaining users requiring review: \n\nFirst, there are 10 users from the Marketing department. Records show their access was assigned by John, seemingly outside the standard approval process, and no business justification was documented. They currently show no active usage of this access. Should we keep their access enabled?",
    type: "review"
  },
  {
    id: "msg-5",
    isUser: true,
    timestamp: "5/12, 9:20 AM",
    content: "Hmm, I'm not sure about those. Could you please check with John to see if there's an ongoing need?",
    type: "action"
  },
  {
    id: "msg-6",
    sender: "Access review Agent",
    timestamp: "5/12, 9:21 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Certainly. I will contact John and let you know his feedback.",
    type: "response"
  },
  {
    id: "msg-7",
    sender: "Access review Agent",
    timestamp: "5/12, 9:22 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Next, there are 9 Accounting Clerks within the Finance department who also haven't used their Salesforce access recently. Our records indicate they requested this access, and you approved it at the time. Should we maintain their access?",
    type: "review"
  },
  {
    id: "msg-8",
    isUser: true,
    timestamp: "5/12, 9:23 AM",
    content: "I don't recall the specifics offhand. Can you remind me when they requested it and what justification they provided?",
    type: "question"
  },
  {
    id: "msg-9",
    sender: "Access review Agent",
    timestamp: "5/12, 9:24 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "They submitted their requests back in January, citing 'Project Amadeus' as the reason.",
    type: "info"
  },
  {
    id: "msg-10",
    isUser: true,
    timestamp: "5/12, 9:26 AM",
    content: "Ah, right. That project was cancelled. We can revoke their access.",
    type: "decision"
  },
  {
    id: "msg-11",
    sender: "Access review Agent",
    timestamp: "5/12, 9:27 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Understood, access for those 9 users will be revoked.",
    type: "action"
  },
  {
    id: "msg-12",
    sender: "Access review Agent",
    timestamp: "5/12, 9:28 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Lastly, there's Julia. She still has access assigned from when she was in Finance, but she recently transferred to the Customer Success department. Does she still require this specific Salesforce access in her new role?",
    type: "review"
  },
  {
    id: "msg-13",
    isUser: true,
    timestamp: "5/12, 9:28 AM",
    content: "No, she doesn't need it anymore. Let's remove her access.",
    type: "decision"
  },
  {
    id: "msg-14",
    sender: "Access review Agent",
    timestamp: "5/12, 9:29 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Okay, access for Julia will be removed. Thank you, Will. That's all the input I need from you at this moment. I will follow up regarding the 10 marketing users once I hear back from John, and then we can finalize this review cycle.",
    type: "conclusion"
  },
  {
    id: "msg-15",
    sender: "Access review Agent",
    timestamp: "5/14, 10:45 AM",
    avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
    content: "Hi Will, quick update on the Salesforce access review. John confirmed that the 10 marketing users no longer require access. Based on his confirmation and your previous decisions, I have revoked their access and completed the review. All records have been updated.",
    type: "complete"
  }
];

interface ChatContentProps {
  highlightedMessageId?: string;
}

export const ChatContent: React.FC<ChatContentProps> = ({ highlightedMessageId }) => {
  const [currentHighlighted, setCurrentHighlighted] = useState<string | undefined>(highlightedMessageId);
  const [showJohnConversation, setShowJohnConversation] = useState(false);
  
  // Check if we should show John's conversation
  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    setShowJohnConversation(pathParts.includes('john-chat') || localStorage.getItem('show-john-chat') === 'true');
    
    if (highlightedMessageId?.startsWith('john-msg')) {
      setShowJohnConversation(true);
      localStorage.setItem('show-john-chat', 'true');
    }
  }, [highlightedMessageId]);
  
  useEffect(() => {
    if (highlightedMessageId) {
      // Reduced delay to match the animation timing
      const scrollDelay = setTimeout(() => {
        setCurrentHighlighted(highlightedMessageId);
        
        // Clear highlight effect after animation completes (reduced to 1.3s total - 0.3s delay + 1s duration)
        const animationDuration = setTimeout(() => {
          setCurrentHighlighted(undefined);
        }, 1300);
        
        return () => clearTimeout(animationDuration);
      }, 300);
      
      return () => clearTimeout(scrollDelay);
    }
  }, [highlightedMessageId]);

  // Determine which messages to display
  const displayMessages = showJohnConversation ? johnConversationData : messageData;

  return (
    <ScrollArea className="flex-1 overflow-y-auto h-full">
      <div className="flex w-full flex-col px-[72px] py-10 max-md:px-5">
        {displayMessages.map((message, index) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            timestamp={message.timestamp}
            content={!showJohnConversation && index === 0 ? (
              <>
                {message.content}
                <br /><br />
                <AccessReviewCard />
              </>
            ) : message.content}
            isUser={message.isUser}
            avatar={message.avatar}
            messageId={message.id}
            isHighlighted={currentHighlighted === message.id}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
