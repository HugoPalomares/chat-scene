
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, AlertTriangle, Clock, FileText } from "lucide-react";

export const ReviewsContent: React.FC = () => {
  return (
    <div className="min-w-60 flex-1 shrink basis-[0%] flex flex-col max-md:max-w-full">
      <div className="bg-white w-full overflow-hidden max-md:max-w-full h-[59px] flex items-center px-8">
        <h1 className="text-[#242424] text-2xl font-bold">Access reviews</h1>
      </div>
      <div className="bg-white w-full flex-1 flex flex-col max-md:max-w-full relative overflow-auto p-8">
        <div className="max-w-[1000px]">
          {/* Chat with AI Agent Button */}
          <div className="flex justify-end mb-6">
            <Button className="bg-[#0078d4] hover:bg-[#106ebe] rounded-full px-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                  fill="white"
                />
              </svg>
              Chat with AI Agent
            </Button>
          </div>

          {/* Top security priorities */}
          <Card className="mb-10 border-[#e0e0e0] shadow-sm">
            <CardContent className="p-0">
              <div className="border-l-4 border-[#0078d4]">
                <h2 className="text-xl font-semibold p-6 pb-4">Top security priorities</h2>

                {/* Priority Item 1 */}
                <div className="border-t border-[rgba(0,0,0,0.05)] p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#f7e36c] h-10 w-10 flex items-center justify-center rounded">
                      <span className="font-bold text-[#333]">QS</span>
                    </div>
                    <div>
                      <p className="font-semibold">Replace with salesforce</p>
                      <p className="text-sm text-gray-600">App</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle size={18} className="text-[#d13438]" />
                      <span className="text-sm">Critical security</span>
                    </div>
                    <div className="w-24">
                      <span className="text-sm">Progress 0/10</span>
                    </div>
                    <div className="bg-[#333] text-white text-xs px-3 py-1 rounded-full flex items-center">
                      <span className="h-2 w-2 bg-white rounded-full mr-1"></span>
                      60% confidence
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>

                {/* Priority Item 2 */}
                <div className="border-t border-[rgba(0,0,0,0.05)] p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#e9ecef] h-10 w-10 flex items-center justify-center rounded overflow-hidden">
                      <img 
                        src="/lovable-uploads/56ec7b41-fb7b-488b-b7f6-ff4b9d550e36.png" 
                        alt="User" 
                        className="h-8 w-8 object-cover rounded"
                        style={{ objectPosition: '0 -180px' }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">My direct reports</p>
                      <p className="text-sm text-gray-600">User access</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <Clock size={18} className="text-gray-600" />
                      <span className="text-sm">Due next week</span>
                    </div>
                    <div className="w-24">
                      <span className="text-sm">Progress 0/5</span>
                    </div>
                    <div className="bg-[#333] text-white text-xs px-3 py-1 rounded-full flex items-center">
                      <span className="h-2 w-2 bg-white rounded-full mr-1"></span>
                      54% confidence
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>

                {/* Priority Item 3 */}
                <div className="border-t border-[rgba(0,0,0,0.05)] p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#e1f1ff] h-10 w-10 flex items-center justify-center rounded">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7L5 12L12 17L19 12L12 7Z" fill="#0078d4" />
                        <path d="M5 14L12 19L19 14" stroke="#0078d4" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Eng-devenv-https</p>
                      <p className="text-sm text-gray-600">Access package</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                      <Clock size={18} className="text-gray-600" />
                      <span className="text-sm">Due in 2 weeks</span>
                    </div>
                    <div className="w-24">
                      <span className="text-sm">Progress 0/8</span>
                    </div>
                    <div className="bg-[#333] text-white text-xs px-3 py-1 rounded-full flex items-center">
                      <span className="h-2 w-2 bg-white rounded-full mr-1"></span>
                      48% confidence
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>

                {/* Button */}
                <div className="p-4">
                  <Button variant="outline" className="text-[#333]">
                    <FileText className="mr-2 h-4 w-4" />
                    See all access reviews
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intelligence you can trust */}
          <h2 className="text-xl font-semibold mb-4">Intelligence you can trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <Card className="border-[#e0e0e0] shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div className="max-w-[70%]">
                    <h3 className="text-lg font-semibold mb-4">Automate more with confidence</h3>
                    <p className="text-gray-700">
                      Our AI agent learns from collaboration and improves its confidence over time.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjEuMDYgMjEuNDZDNTkuMTMgMTguOTMgNTYuMjYgMTcuMTYgNTMuMDYgMTYuMzdDNTUuMDIgMTMuNjIgNTUuODggMTAuMyA1NS40OCA2LjljQzU1LjA4IDMuNTEgNTMuNDUgMC41NSA1MC44NyAtMS4zMkM0OC4yOSAtMy4xOSA0NS4wOCAtNC4yIDQxLjY3IC00LjE5QzM4LjI2IC00LjE5IDM1LjA1IC0zLjE2IDMyLjQ3IC0xLjI4QzI5LjUxIC0zLjQ3IDI1Ljg3IC00LjcxIDIyLjA4IC00LjcxQzE4LjI4IC00LjcxIDE0LjY0IC0zLjQ3IDExLjY4IC0xLjI4QzkuMTEgLTMuMTYgNS45IC00LjE5IDIuNDkgLTQuMTlDLTAuOTMgLTQuMiAtNC4xMyAtMy4xOSAtNi43MSAtMS4zMkMtOS4yOSAwLjU1IC0xMC45MyAzLjUxIC0xMS4zMiA2LjlDLTExLjcyIDEwLjMgLTEwLjg1IDEzLjYyIC04LjkgMTYuMzdDLTEyLjEgMTcuMTYgLTE0Ljk3IDE4LjkzIC0xNi45IDIxLjQ2Qy0xOC44MiAyMy45OSAtMTkuNzEgMjcuMSAtMTkuMzkgMzAuMjhDLTE5LjA4IDMzLjQ1IC0xNy41OCAzNi4zNSAtMTUuMTYgMzguNDRDLTEyLjc0IDQwLjU0IC05LjY0IDQxLjY5IC02LjQ1IDQxLjY5QzguMDIgNDEuNjkgMjIuNSA0MS42NSAzNi45NyA0MS42QzQwLjE2IDQxLjYgNDMuMjcgNDAuNDUgNDUuNjggMzguMzVDNDguMSAzNi4yNSA0OS42MSAzMy4zNiA0OS45MSAzMC4xOUM1MC4yMiAyNy4wMiA0OS4zMyAyMy45MSA0Ny40MSAyMS4zN0M0NS40OCAxOC44MiA0Mi42MSAxNy4wNiAzOS40IDE2LjI3QzQxLjM2IDEzLjUyIDQyLjIyIDEwLjIgNDEuODMgNi44QzQxLjQzIDMuNDEgMzkuNzkgMC40NSAzNy4yMSAtMS40MkMzNC42NCAtMy4yOSAzMS40NCAtNC4zIDI4LjAyIC00LjI5QzI0LjYxIC00LjI5IDIxLjQgLTMuMjYgMTguODMgLTEuMzlDMTUuODYgLTMuNTcgMTIuMjIgLTQuODEgOC40MyAtNC44MUM0LjY0IC00LjgxIDAuOTkgLTMuNTcgLTEuOTcgLTEuMzlDLTQuNTQgLTMuMjYgLTcuNzYgLTQuMjkgLTExLjE2IC00LjI5Qy0xNC41OCAtNC4zIC0xNy43OCAtMy4yOSAtMjAuMzUgLTEuNDJDLTIyLjkzIDAuNDUgLTI0LjU3IDMuNDEgLTI0Ljk3IDYuOEMtMjUuMzYgMTAuMiAtMjQuNSAxMy41MiAtMjIuNTQgMTYuMjdDLTI1Ljc1IDE3LjA2IC0yOC42MSAxOC44MiAtMzAuNTQgMjEuMzdDLTMyLjQ3IDIzLjkxIC0zMy4zNiAyNy4wMiAtMzMuMDUgMzAuMTlDLTMyLjc0IDMzLjM2IC0zMS4yNCAzNi4yNSAtMjguODIgMzguMzVDLTI2LjQgNDAuNDUgLTIzLjMgNDEuNiAtMjAuMTEgNDEuNkMtNS42NCA0MS42NSA4Ljg0IDQxLjY5IDIzLjMxIDQxLjY5QzI2LjUgNDEuNjkgMjkuNiA0MC41NCAzMi4wMiAzOC40NEMzNC40NCAzNi4zNSAzNS45NCAzMy40NSAzNi4yNSAzMC4yOEMzNi41NyAyNy4xIDM1LjY4IDIzLjk5IDMzLjc1IDIxLjQ2QzMxLjgyIDE4LjkzIDI4Ljk2IDE3LjE2IDI1Ljc2IDE2LjM3QzI3LjcxIDEzLjYyIDI4LjU4IDEwLjMgMjguMTggNi45QzI3Ljc5IDMuNTEgMjYuMTUgMC41NSAyMy41OCAtMS4zMkMyMS0zLjE5IDE3Ljc5IC00LjIgMTQuMzggLTQuMTlDMTAuOTcgLTQuMTkgNy43NiAtMy4xNiA1LjE5IC0xLjI4QzIuMjIgLTMuNDcgLTEuNDIgLTQuNzEgLTUuMjEgLTQuNzFDLTkuMDEgLTQuNzEgLTEyLjY1IC0zLjQ3IC0xNS42MiAtMS4yOEMtMTguMTkgLTMuMTYgLTIxLjM5IC00LjE5IC0yNC44IC00LjE5Qy0yOC4yMSAtNC4yIC0zMS40MiAtMy4xOSAtMzQgLTEuMzJDLTM2LjU4IDAuNTUgLTM4LjIyIDMuNTEgLTM4LjYyIDYuOUMtMzkuMDEgMTAuMyAtMzguMTUgMTMuNjIgLTM2LjE5IDE2LjM3Qy0zOS40IDE3LjE2IC00Mi4yNyAxOC45MyAtNDQuMTkgMjEuNDZDLTQ2LjEyIDIzLjk5IC00NyAyNy4xIC00Ni42OSAzMC4yOEMtNDYuMzggMzMuNDUgLTQ0Ljg4IDM2LjM1IC00Mi40NiAzOC40NEMtNDAuMDQgNDAuNTQgLTM2LjkzIDQxLjY5IC0zMy43NCA0MS42OUMtMzAuNTUgNDEuNjkgLTI3LjQ1IDQwLjU0IC0yNS4wNCAzOC40NEMtMjIuNjIgMzYuMzUgLTIxLjEyIDMzLjQ1IC0yMC44MSAzMC4yOEMtMjAuNSAyNy4xIC0yMS4zOSAyMy45OSAtMjMuMzEgMjEuNDZDLTI1LjI0IDE4LjkzIC0yOC4xIDE3LjE2IC0zMS4zMSAxNi4zN0MtMjkuMzUgMTMuNjIgLTI4LjQ5IDEwLjMgLTI4Ljg5IDYuOUMtMjkuMjkgMy41MSAtMzAuOTIgMC41NSAtMzMuNSAtMS4zMkMtMzYuMDggLTMuMTkgLTM5LjI4IC00LjIgLTQyLjcgLTQuMTlDLTQ2LjExIC00LjE5IC00OS4zMiAtMy4xNiAtNTEuODkgLTEuMjhDLTU0Ljg2IC0zLjQ3IC01OC41IC00LjcxIC02Mi4zIC00LjcxIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcikiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTcuODYiIHkxPSI0Mi4zNiIgeDI9IjE3Ljg2IiB5Mj0iLTUuMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNDJEOEJFIi8+PHN0b3Agb2Zmc2V0PSIwLjE5IiBzdG9wLWNvbG9yPSIjNEJEMEQ0Ii8+PHN0b3Agb2Zmc2V0PSIwLjQyIiBzdG9wLWNvbG9yPSIjNTRDNkYwIi8+PHN0b3Agb2Zmc2V0PSIwLjU0IiBzdG9wLWNvbG9yPSIjNTdDM0ZDIi8+PHN0b3Agb2Zmc2V0PSIwLjY5IiBzdG9wLWNvbG9yPSIjNUFCRkZBIi8+PHN0b3Agb2Zmc2V0PSIwLjc4IiBzdG9wLWNvbG9yPSIjNjJCMEYzIi8+PHN0b3Agb2Zmc2V0PSIwLjg1IiBzdG9wLWNvbG9yPSIjNzQ5QkVBIi8+PHN0b3Agb2Zmc2V0PSIwLjkyIiBzdG9wLWNvbG9yPSIjOEQ3RDdDIi8+PHN0b3Agb2Zmc2V0PSIwLjk4IiBzdG9wLWNvbG9yPSIjQUM1QTc2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjg0QTc1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"
                      alt="Automate"
                      className="h-16 w-16"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-[#e0e0e0] shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div className="max-w-[70%]">
                    <h3 className="text-lg font-semibold mb-4">Understand risk classification</h3>
                    <p className="text-gray-700">
                      See how access review tasks are scored based on usage, risk signals, peer access, and more.
                    </p>
                  </div>
                  <div>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 8C18.7 8 8 18.7 8 32C8 45.3 18.7 56 32 56C45.3 56 56 45.3 56 32C56 18.7 45.3 8 32 8Z" stroke="url(#paint0_linear)" strokeWidth="4"/>
                      <path d="M32 16V48" stroke="url(#paint1_linear)" strokeWidth="3" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF6B6B"/>
                          <stop offset="1" stopColor="#FFD166"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF6B6B"/>
                          <stop offset="1" stopColor="#FFD166"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
