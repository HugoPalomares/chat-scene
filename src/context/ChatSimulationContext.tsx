
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the conversation paths
export type ConversationState = {
  step: number;
  path: string;
};

type ChatSimulationContextType = {
  messages: { sender: string; content: ReactNode; timestamp: string; isUser: boolean; avatar?: string }[];
  addUserMessage: (content: string) => void;
  resetChat: () => void;
};

const ChatSimulationContext = createContext<ChatSimulationContextType | undefined>(undefined);

export const ChatSimulationProvider = ({ children }: { children: ReactNode }) => {
  const [conversationState, setConversationState] = useState<ConversationState>({
    step: 0,
    path: "",
  });
  
  const [messages, setMessages] = useState<{ sender: string; content: ReactNode; timestamp: string; isUser: boolean; avatar?: string }[]>([
    {
      sender: "Access review Agent",
      timestamp: getCurrentTimestamp(),
      avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
      content: "Hi Will—there's an access review that needs your immediate attention. I've already completed 60% to save you time, but I still need your help with a few final decisions. Let's tackle the rest together—it should only take a couple of minutes.",
      isUser: false,
    },
    {
      sender: "Access review Agent",
      timestamp: getCurrentTimestamp(),
      avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
      content: "Hi Will, there is an access review for Salesforce that needs your immediate attention. I have already completed 80% to save you time, but I still need your help with a few decisions. First things first, for the 80% which I already completed, these 80 users were all controllers from the finance department, they are actively using their 'Analytics Cloud' role and you had previously approved it. Are you okay with them retaining their access?",
      isUser: false,
    }
  ]);

  // Helper to get current timestamp in the format "MM/DD, H:MM AM/PM"
  function getCurrentTimestamp() {
    const now = new Date();
    const month = now.getMonth() + 1; // getMonth() is zero-based
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    
    return `${month}/${day}, ${formattedHours}:${minutes} ${ampm}`;
  }

  const addUserMessage = (content: string) => {
    // If user types "start over", reset the chat
    if (content.toLowerCase().trim() === "start over") {
      resetChat();
      return;
    }

    // Add user message
    const userMessage = {
      sender: "Will",
      timestamp: getCurrentTimestamp(),
      content,
      isUser: true,
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Determine next agent message based on conversation state and user input
    setTimeout(() => {
      let nextAgentMessage;
      
      switch (conversationState.step) {
        case 0:
          if (content.toLowerCase().includes("sure") || content.toLowerCase().includes("good") || content.toLowerCase().includes("okay") || content.toLowerCase().includes("fine")) {
            nextAgentMessage = "Great, I will make sure their access is retained. For the remaining 20 users I will need some help. I can see 10 users got previously assigned access by John without going through an approval process, they are all from the marketing department but they are not even using the access, should we keep their access? John Didn't provide any business justification back then.";
            setConversationState({ step: 1, path: "path1" });
          } else if (content.toLowerCase().includes("who") || content.toLowerCase().includes("users") || content.toLowerCase().includes("look")) {
            nextAgentMessage = "Great, I will make sure their access is retained. For the remaining 20 users I will need some help. I can see 10 users got previously assigned access by John without going through an approval process, they are all from the marketing department but they are not even using the access, should we keep their access? John Didn't provide any business justification back then.";
            setConversationState({ step: 1, path: "path2" });
          } else {
            nextAgentMessage = "I'm not sure I understand. Could you let me know if you're okay with the finance controllers keeping their access?";
            // Stay at the same step
          }
          break;
        
        case 1:
          if (content.toLowerCase().includes("check") && content.toLowerCase().includes("john")) {
            nextAgentMessage = "Sure, I will check with John and let you know when I hear back from him. I can also see there are 9 accounting clerks from the finance department which never use their access. In the history I can see they requested the access and you previously approved it. Should we keep their access going forward?";
            setConversationState({ step: 2, path: conversationState.path });
          } else {
            nextAgentMessage = "I think it's best to check with John since he assigned the access. In the meantime, I can also see there are 9 accounting clerks from the finance department which never use their access. In the history I can see they requested the access and you previously approved it. Should we keep their access going forward?";
            setConversationState({ step: 2, path: conversationState.path });
          }
          break;
          
        case 2:
          if (content.toLowerCase().includes("when") || content.toLowerCase().includes("justify") || content.toLowerCase().includes("remind") || content.toLowerCase().includes("reason")) {
            nextAgentMessage = "They all requested back in January and mentioned Project Amadeus as reason.";
            setConversationState({ step: 3, path: conversationState.path });
          } else {
            nextAgentMessage = "Let me give you more context. They all requested access back in January and mentioned Project Amadeus as the business justification.";
            setConversationState({ step: 3, path: conversationState.path });
          }
          break;
          
        case 3:
          if (content.toLowerCase().includes("revoke") || content.toLowerCase().includes("cancel") || content.toLowerCase().includes("remove")) {
            nextAgentMessage = "Perfect, last one, Julia still has access, she used to be in the finance department but she recently moved to the customer success department, do you think she still needs access?";
            setConversationState({ step: 4, path: conversationState.path });
          } else {
            nextAgentMessage = "I understand. Since Project Amadeus was cancelled, should we revoke their access now?";
            // Stay at same step
          }
          break;
          
        case 4:
          if (content.toLowerCase().includes("remove") || content.toLowerCase().includes("revoke") || content.toLowerCase().includes("no longer")) {
            nextAgentMessage = "Thank you Will, that's all I needed for now, I am sure the auditors will be happy about our decisions 😉 I will let you know when I hear back from John and then we can complete this review.";
            setConversationState({ step: 5, path: conversationState.path });
            
            // Set up a timer for the final message after 2 seconds (simulating 2 days later)
            setTimeout(() => {
              const finalMessage = {
                sender: "Access review Agent",
                timestamp: getCurrentTimestamp(),
                avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
                content: "Hi Will, John got back to me and confirmed the marketing users no longer need access so I went ahead and completed the review!",
                isUser: false,
              };
              setMessages(prevMessages => [...prevMessages, finalMessage]);
            }, 2000);
          } else {
            nextAgentMessage = "I'm not sure I understand your decision about Julia. Should we keep or remove her access?";
            // Stay at same step
          }
          break;
          
        default:
          nextAgentMessage = "I don't have any more questions at this time. Type 'start over' if you'd like to restart our conversation.";
      }
      
      if (nextAgentMessage) {
        const agentMessage = {
          sender: "Access review Agent",
          timestamp: getCurrentTimestamp(),
          avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
          content: nextAgentMessage,
          isUser: false,
        };
        
        setMessages(prevMessages => [...prevMessages, agentMessage]);
      }
    }, 1000);
  };

  const resetChat = () => {
    setConversationState({ step: 0, path: "" });
    setMessages([
      {
        sender: "Access review Agent",
        timestamp: getCurrentTimestamp(),
        avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
        content: "Hi Will—there's an access review that needs your immediate attention. I've already completed 60% to save you time, but I still need your help with a few final decisions. Let's tackle the rest together—it should only take a couple of minutes.",
        isUser: false,
      },
      {
        sender: "Access review Agent",
        timestamp: getCurrentTimestamp(),
        avatar: "https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/bbf4c6d64799b006bfa3862b2510c8308095337e?placeholderIfAbsent=true",
        content: "Hi Will, there is an access review for Salesforce that needs your immediate attention. I have already completed 80% to save you time, but I still need your help with a few decisions. First things first, for the 80% which I already completed, these 80 users were all controllers from the finance department, they are actively using their 'Analytics Cloud' role and you had previously approved it. Are you okay with them retaining their access?",
        isUser: false,
      }
    ]);
  };

  return (
    <ChatSimulationContext.Provider value={{ messages, addUserMessage, resetChat }}>
      {children}
    </ChatSimulationContext.Provider>
  );
};

export const useChatSimulation = () => {
  const context = useContext(ChatSimulationContext);
  if (context === undefined) {
    throw new Error("useChatSimulation must be used within a ChatSimulationProvider");
  }
  return context;
};
