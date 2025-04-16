
import React from "react";
import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

interface ChatHeaderProps {
  onToggleRightSide?: () => void;
  rightSideVisible?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  onToggleRightSide, 
  rightSideVisible = false 
}) => {
  return (
    <div className="bg-white w-full overflow-hidden max-md:max-w-full h-[59px] flex items-center">
      <div className="z-10 flex w-full items-stretch gap-5 flex-wrap justify-between ml-5 mr-3.5 max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-center gap-[11px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/ffbd5b754c4191d3777df1d248ce09d4caee309e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 rounded self-stretch shrink-0 my-auto"
            alt="Chat Avatar"
          />
          <div className="text-[#242424] text-lg font-bold leading-none self-stretch w-[196px] my-auto">
            Access reviews Agent
          </div>
        </div>
        {onToggleRightSide && (
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onToggleRightSide}
            className="border-[#8E9196] bg-white hover:bg-gray-100"
            aria-label={rightSideVisible ? "Close panel" : "Open panel"}
          >
            {rightSideVisible ? 
              <PanelRightClose size={18} className="text-[#555555]" /> : 
              <PanelRightOpen size={18} className="text-[#555555]" />
            }
          </Button>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="border-b border-[rgba(0,0,0,0.05)] min-h-[1px] w-full border-solid" />
      </div>
    </div>
  );
};
