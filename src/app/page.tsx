"use client";

import DraftBoard from "@/components/draft-board";
import Landing from "@/components/landing";
import { useState } from "react";

export default function Home() {
  const [currentView, setCurrentView] = useState<"landing" | "game">("landing");

  return (
    <div className="min-h-screen bg-[#FFFAF3] text-[#262626] flex items-center justify-center p-4">
      {currentView === "landing" ? (
        <Landing onStart={() => setCurrentView("game")} />
      ) : (
        <DraftBoard />
      )}
    </div>
  );
}
