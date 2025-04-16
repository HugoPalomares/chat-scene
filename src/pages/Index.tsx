import React from "react";
import { Shell } from "@/components/shell/Shell";

export default function Index() {
  return (
    <div className="container mx-auto py-8 h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Microsoft Teams-like Chat Interface
      </h1>
      <div className="h-[calc(100vh-120px)]">
        <Shell />
      </div>
    </div>
  );
}
