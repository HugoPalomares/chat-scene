
import React, { useState } from "react";
import { PostponeReviewModal } from "./PostponeReviewModal";

export const AccessReviewCard: React.FC = () => {
  const [showPostponeModal, setShowPostponeModal] = useState(false);

  const handlePostponeClick = () => {
    setShowPostponeModal(true);
  };

  return (
    <div className="max-w-[360px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.14),0px_0px_2px_0px_rgba(0,0,0,0.12)] bg-white w-[360px] overflow-hidden mt-[22px] py-3 rounded-[Corner_radiusLarge]">
      <div className="flex min-w-[180px] w-full items-center gap-2.5 px-3">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto">
          <div className="text-[#242424] text-ellipsis text-base font-semibold leading-none">
            Salesforce Access Review
          </div>
          <div className="flex w-full items-center gap-1 text-xs text-[#616161] font-normal leading-none mt-1.5">
            <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] min-w-60 w-full gap-2 my-auto">
              Due in 3 days
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-1.5 w-8 my-auto">
          <div className="rounded bg-[rgba(255,255,255,0)] self-stretch flex w-8 items-center justify-center h-8 my-auto px-1.5">
            <div className="self-stretch flex w-5 items-center gap-1 justify-center my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/db58c6ecb25d8d2176a05e7448d169b2ecbedf64?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch my-auto"
                alt="More options"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-2.5 pt-2.5">
        <div className="flex w-full items-center gap-2.5 justify-center px-3">
          <div className="text-[#242424] text-ellipsis text-sm font-normal leading-5 self-stretch flex-1 shrink basis-[0%] my-auto">
            Status
          </div>
          <div className="bg-[rgba(235,235,235,1)] self-stretch flex min-w-5 min-h-5 items-center overflow-hidden text-[10px] text-[#616161] font-semibold text-center leading-[14px] justify-center my-auto px-1 rounded-full">
            <div className="self-stretch h-3.5 my-auto pb-px px-0.5">
              In Progress
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2.5 justify-center mt-2.5 px-3">
          <div className="text-[#242424] text-ellipsis text-sm font-normal leading-5 self-stretch flex-1 shrink basis-[0%] my-auto">
            Created by
          </div>
          <div className="text-[rgba(36,36,36,1)] text-sm font-semibold leading-none text-right self-stretch flex-1 shrink basis-[0%] my-auto">
            Emily Rodriguez
          </div>
        </div>
        <div className="flex w-full items-center gap-2.5 justify-center mt-2.5 px-3">
          <div className="text-[#242424] text-ellipsis text-sm font-normal leading-5 self-stretch flex-1 shrink basis-[0%] my-auto">
            Completion
          </div>
          <div className="text-[rgba(36,36,36,1)] text-sm font-semibold leading-none text-right self-stretch flex-1 shrink basis-[0%] my-auto">
            80 out of 100 (80%)
          </div>
        </div>
        <div className="flex w-full items-center gap-2.5 justify-center mt-2.5 px-3">
          <div className="text-[#242424] text-ellipsis text-sm font-normal leading-5 self-stretch flex-1 shrink basis-[0%] my-auto">
            Estimated time
          </div>
          <div className="text-[rgba(36,36,36,1)] text-sm font-semibold leading-none text-right self-stretch flex-1 shrink basis-[0%] my-auto">
            5 minutes
          </div>
        </div>
      </div>
      <div className="w-full text-xs text-[#242424] font-normal leading-4 mt-2.5 px-3">
        <div className="rounded bg-[rgba(255,249,245,1)] border flex w-full items-center gap-2 overflow-hidden justify-center px-3 border-[rgba(253,207,180,1)] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/ebf2f4ffd243266a444ab2f1ccd00e94825df364?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Warning"
          />
          <div className="self-stretch min-w-60 gap-1 flex-1 shrink basis-[0%] my-auto py-2.5">
            20 access permissions need review
          </div>
        </div>
      </div>
      <div className="flex w-full gap-1.5 text-xs text-[#242424] font-normal leading-none flex-wrap mt-2.5 pt-5 px-3">
        <div className="rounded bg-white border flex items-center gap-1 justify-center px-2 py-0.5 border-[rgba(209,209,209,1)] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/51ff29c06a4d1b524c8fd5dc4c4eae8a04014b39?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Finish"
          />
          <div className="self-stretch flex min-h-5 items-center gap-1 justify-center my-auto">
            <div className="self-stretch my-auto">Start review</div>
          </div>
        </div>
        
        <div 
          onClick={handlePostponeClick} 
          className="rounded bg-white border flex items-center gap-1 justify-center px-2 py-0.5 border-[rgba(209,209,209,1)] border-solid cursor-pointer hover:bg-gray-50"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/c91f120e807a079949f7759011619b0bcf7eb748?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Calendar"
          />
          <div className="self-stretch flex min-h-5 items-center gap-1 justify-center my-auto">
            <div className="self-stretch my-auto">Postpone review</div>
          </div>
        </div>
      </div>
      
      <PostponeReviewModal 
        open={showPostponeModal} 
        onOpenChange={setShowPostponeModal} 
      />
    </div>
  );
};

export default AccessReviewCard;
