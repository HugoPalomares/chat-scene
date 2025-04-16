
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const AppBar: React.FC = () => {
  const location = useLocation();
  const isReviewsPage = location.pathname === "/reviews";
  const isChatPage = location.pathname === "/";

  return (
    <div className="w-[68px] pb-[467px] border-[rgba(0,0,0,0.05)] border-r max-md:hidden max-md:pb-[100px]">
      <div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/8cc142469c4802cfe81e025f36ca9a02effa5431?placeholderIfAbsent=true"
          className="aspect-[1.21] object-contain w-[68px] rounded"
          alt="Tab 1"
        />
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/b00f2e35e11f5abaaca3b6bd5b0d03b652dd859b?placeholderIfAbsent=true"
            className={`aspect-[1.21] object-contain w-[68px] rounded ${isChatPage ? "border-l-4 border-[#6264a7]" : ""}`}
            alt="Tab 2"
          />
        </Link>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/e97505a1db20f15b2d9031eb06a7be011fb73743?placeholderIfAbsent=true"
          className="aspect-[1.21] object-contain w-[68px] rounded"
          alt="Tab 3"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/e76a00eb2cde4b24546f97e7366e5c12633730f1?placeholderIfAbsent=true"
          className="aspect-[1.21] object-contain w-[68px] rounded"
          alt="Tab 4"
        />
        <Link to="/reviews">
          <div className={`aspect-[1.21] object-contain w-[68px] flex items-center justify-center ${isReviewsPage ? "border-l-4 border-[#6264a7] bg-[rgba(98,100,167,0.1)]" : ""}`}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.625 3.5H4.375C3.89175 3.5 3.5 3.89175 3.5 4.375V23.625C3.5 24.1082 3.89175 24.5 4.375 24.5H23.625C24.1082 24.5 24.5 24.1082 24.5 23.625V4.375C24.5 3.89175 24.1082 3.5 23.625 3.5Z" stroke={isReviewsPage ? "#6264a7" : "#666666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 10.5H19.25" stroke={isReviewsPage ? "#6264a7" : "#666666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 14H19.25" stroke={isReviewsPage ? "#6264a7" : "#666666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 17.5H14" stroke={isReviewsPage ? "#6264a7" : "#666666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs text-[#666666] ml-1 font-medium" style={{ color: isReviewsPage ? "#6264a7" : "#666666" }}>Reviews</span>
          </div>
        </Link>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7114281f625a4fe383a60299d1987d6e/46af6b753f2fc11cac075305893ad9e959b682ce?placeholderIfAbsent=true"
          className="aspect-[1.21] object-contain w-[68px] rounded"
          alt="Tab 7"
        />
      </div>
    </div>
  );
};
