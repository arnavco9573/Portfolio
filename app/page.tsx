"use client";

import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed for medium screens and above */}
      <div className="hidden md:block fixed w-64 h-full z-10">
        <Sidebar />
      </div>

      {/* Main Content - Adjust padding instead of margin */}
      <div className="flex-1 ml-16 p-8 overflow-y-auto h-full md:pl-64">
        <h1 className="text-2xl font-semibold">Hi!</h1>
        <p>Welcome to my portfolio.</p>
      </div>
    </div>
  );
}
