
import React, { useState } from "react";
import { useChatSimulation } from "@/context/ChatSimulationContext";

export const ChatCompose: React.FC = () => {
  const [message, setMessage] = useState("");
  const { addUserMessage } = useChatSimulation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Send the message to the chat simulation context
      addUserMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="bg-white flex w-full flex-col items-stretch justify-center px-[72px] py-6 max-md:max-w-full max-md:px-5">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="min-h-11 w-full overflow-hidden rounded-md max-md:max-w-full">
          <div className="bg-white border flex w-full items-center gap-2.5 overflow-hidden flex-1 flex-wrap h-full pl-2.5 pr-1.5 rounded-md border-[rgba(209,209,209,1)] border-solid max-md:max-w-full">
            <div className="self-stretch flex min-w-60 items-center text-sm font-normal leading-5 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] my-auto pt-[5px] pb-[7px] px-0.5 max-md:max-w-full outline-none text-[#242424]"
              />
            </div>
            <div className="self-stretch flex items-center gap-1 my-auto pl-0.5 py-1.5">
              <div className="self-stretch flex items-center gap-2.5 overflow-hidden my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/2fba7bdfde43347271fc35b08f5c5110fdd233ae?placeholderIfAbsent=true"
                  className="aspect-[5] object-contain w-40 self-stretch shrink-0 my-auto"
                  alt="Formatting options"
                />
                <div className="bg-[rgba(209,209,209,1)] self-stretch flex w-px shrink-0 h-6 my-auto rounded-[100px]" />
                <button
                  type="submit"
                  className="rounded bg-[rgba(255,255,255,0)] self-stretch flex items-center overflow-hidden justify-center w-8 h-8 my-auto px-1.5"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/e914f8e615a4437feb85dc64a4a90769528b0ed6?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 self-stretch my-auto"
                    alt="Send"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
