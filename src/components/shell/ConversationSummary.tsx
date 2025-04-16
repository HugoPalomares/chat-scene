
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageSquare, CheckCircle, AlertCircle, UserCircle } from "lucide-react";

export const ConversationSummary: React.FC = () => {
  // This would typically come from a real data source
  const summaryData = {
    timeline: [
      { date: "May 12", events: [
        { time: "9:15 AM", text: "Agent started Salesforce access review", type: "start" },
        { time: "9:15 AM", text: "Reviewed 80 Controller users in Finance", type: "review" },
        { time: "9:16 AM", text: "User approved retention for 80 Controller users", type: "decision" },
        { time: "9:18 AM", text: "Discussed 10 Marketing department users", type: "review" },
        { time: "9:20 AM", text: "User requested to check with John", type: "action" },
        { time: "9:21 AM", text: "Agent agreed to contact John", type: "response" },
        { time: "9:22 AM", text: "Discussed 9 Accounting Clerks", type: "review" },
        { time: "9:23 AM", text: "User requested justification details", type: "question" },
        { time: "9:24 AM", text: "Agent provided 'Project Amadeus' justification", type: "info" },
        { time: "9:26 AM", text: "User confirmed project cancelled, approved revocation", type: "decision" },
        { time: "9:27 AM", text: "Agent confirmed revoking access for 9 users", type: "action" },
        { time: "9:28 AM", text: "Discussed Julia's access after department transfer", type: "review" },
        { time: "9:28 AM", text: "User approved removing Julia's access", type: "decision" },
        { time: "9:29 AM", text: "Agent confirmed completing review except pending items", type: "conclusion" },
      ]},
      { date: "May 14", events: [
        { time: "10:45 AM", text: "Agent provided update about Marketing users", type: "update" },
        { time: "10:45 AM", text: "Confirmed revocation for Marketing users", type: "conclusion" },
        { time: "10:45 AM", text: "Review completed", type: "complete" },
      ]}
    ],
    decisions: [
      { text: "Retained access for 80 Controller users in Finance", status: "approved" },
      { text: "Revoked access for 9 Accounting Clerks (Project Amadeus cancelled)", status: "revoked" },
      { text: "Revoked access for Julia after department transfer", status: "revoked" },
      { text: "Revoked access for 10 Marketing users (confirmed with John)", status: "revoked" },
    ],
    pendingActions: []
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

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="decisions">Decisions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="overflow-auto">
          {summaryData.timeline.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <h3 className="text-sm font-medium text-gray-700">{day.date}</h3>
              </div>
              
              <div className="space-y-2">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="border-l-4 border-l-purple-200 hover:bg-gray-50 cursor-pointer transition-colors">
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
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="decisions" className="overflow-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="decisions">
              <AccordionTrigger className="py-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>All Decisions ({summaryData.decisions.length})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 py-1">
                  {summaryData.decisions.map((decision, index) => (
                    <div key={index} className="flex items-center justify-between rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center gap-2">
                        <UserCircle className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{decision.text}</span>
                      </div>
                      <Badge className={getStatusColor(decision.status)}>
                        {decision.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
};
