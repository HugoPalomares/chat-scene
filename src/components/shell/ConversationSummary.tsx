import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageSquare, CheckCircle, AlertCircle, TrendingUp, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ConversationSummaryProps {
  onEventClick?: (messageId: string) => void;
}

export const ConversationSummary: React.FC<ConversationSummaryProps> = ({ onEventClick }) => {
  const summaryData = {
    timeline: [
      { date: "May 12", events: [
        { time: "9:15 AM", text: "Agent started Salesforce access review", type: "start", messageId: "msg-1" },
        { time: "9:15 AM", text: "Reviewed 80 Controller users in Finance", type: "review", messageId: "msg-2" },
        { time: "9:16 AM", text: "User approved retention for 80 Controller users", type: "decision", messageId: "msg-3" },
        { time: "9:18 AM", text: "Discussed 10 Marketing department users", type: "review", messageId: "msg-4" },
        { time: "9:20 AM", text: "User requested to check with John", type: "action", messageId: "msg-5" },
        { time: "9:21 AM", text: "Agent agreed to contact John", type: "response", messageId: "msg-6" },
        { time: "9:22 AM", text: "Discussed 9 Accounting Clerks", type: "review", messageId: "msg-7" },
        { time: "9:23 AM", text: "User requested justification details", type: "question", messageId: "msg-8" },
        { time: "9:24 AM", text: "Agent provided 'Project Amadeus' justification", type: "info", messageId: "msg-9" },
        { time: "9:26 AM", text: "User confirmed project cancelled, approved revocation", type: "decision", messageId: "msg-10" },
        { time: "9:27 AM", text: "Agent confirmed revoking access for 9 users", type: "action", messageId: "msg-11" },
        { time: "9:28 AM", text: "Discussed Julia's access after department transfer", type: "review", messageId: "msg-12" },
        { time: "9:28 AM", text: "User approved removing Julia's access", type: "decision", messageId: "msg-13" },
        { time: "9:29 AM", text: "Agent confirmed completing review except pending items", type: "conclusion", messageId: "msg-14" },
      ]},
      { date: "May 14", events: [
        { time: "10:45 AM", text: "Agent provided update about Marketing users", type: "update", messageId: "msg-15" },
        { time: "10:45 AM", text: "Confirmed revocation for Marketing users", type: "conclusion", messageId: "msg-15" },
        { time: "10:45 AM", text: "Review completed", type: "complete", messageId: "msg-15" },
      ]}
    ],
    decisions: [
      { text: "Retained access for 80 Controller users in Finance", status: "approved", messageId: "msg-3" },
      { text: "Revoked access for 9 Accounting Clerks (Project Amadeus cancelled)", status: "revoked", messageId: "msg-10" },
      { text: "Revoked access for Julia after department transfer", status: "revoked", messageId: "msg-13" },
      { text: "Revoked access for 10 Marketing users (confirmed with John)", status: "revoked", messageId: "msg-15" },
    ],
    pendingActions: [],
    confidenceData: {
      initialConfidence: 72,
      finalConfidence: 94,
      confidenceChange: "22",
      improvementAreas: ["Department-specific roles", "Project context", "Personnel changes"]
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "start":
      case "complete":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "decision":
        return <CheckCircle className="h-4 w-4 text-purple-500" />;
      case "review":
      case "update":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "action":
      case "conclusion":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    return status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const handleEventClick = (messageId: string) => {
    if (onEventClick) {
      onEventClick(messageId);
    }
  };

  return (
    <div className="h-full overflow-hidden flex flex-col">
      {/* Confidence Summary Section - Stock Market Style */}
      <div className="mb-6 p-3 border border-[rgba(0,0,0,0.1)] rounded-md bg-white">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xs uppercase font-semibold text-gray-500">Agent Confidence</h3>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-bold text-lg">+{summaryData.confidenceData.confidenceChange}%</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold">{summaryData.confidenceData.finalConfidence}%</span>
          <span className="text-sm text-gray-500">from {summaryData.confidenceData.initialConfidence}%</span>
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-1">Improved understanding in:</p>
          <div className="flex flex-wrap gap-1">
            {summaryData.confidenceData.improvementAreas.map((area, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-[#5B5FC7]/10 border-[#5B5FC7]/20 text-[#5B5FC7] hover:bg-[#5B5FC7]/20">{area}</Badge>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="timeline" className="w-full h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="decisions">Decisions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            {summaryData.timeline.map((day, dayIndex) => (
              <Collapsible key={dayIndex} className="mb-4" defaultOpen={true}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between mb-2 cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-md transition-colors">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <h3 className="text-sm font-medium text-gray-700">{day.date}</h3>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180" />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="space-y-2">
                    {day.events.map((event, eventIndex) => (
                      <Card 
                        key={eventIndex} 
                        className="border-l-4 border-l-[#5B5FC7] hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleEventClick(event.messageId)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5">
                              {getEventIcon(event.type)}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{event.text}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Clock className="h-3 w-3 text-gray-400" />
                                <span className="text-xs text-gray-500">{event.time}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="decisions" className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="decisions">
                <AccordionTrigger className="py-2">
                  <div className="flex items-center gap-2">
                    <span>All Decisions ({summaryData.decisions.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 py-1">
                    {summaryData.decisions.map((decision, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between rounded-md p-2 hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleEventClick(decision.messageId)}
                      >
                        <span className="text-sm">{decision.text}</span>
                        <Badge className={getStatusColor(decision.status)}>
                          {decision.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};
