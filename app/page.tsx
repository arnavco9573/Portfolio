"use client";

import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs"

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed for medium screens and above */}
      <div className="hidden md:block fixed w-64 h-full z-10">
        <Sidebar />
      </div>

      {/* Main Content - Adjust padding instead of margin */}
      <div className="flex-1 ml-16 p-8 overflow-y-auto h-full md:pl-64 text-gray-300">
        <h1 className="text-3xl font-bold text-white">Hi! 👋</h1>
        <p className="text-lg text-gray-400">Welcome to my portfolio.</p>

        <hr className="mt-2 border-gray-700" />

        <div className="mt-3">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
            Summary
          </h2>
          <p className="text-gray-400 leading-relaxed mt-2">
            Computer Science student with experience in full-stack development,
            real-time communication, and API design, specializing in building
            extensible, user-friendly web applications. Proficient in React.js,
            Next.js, Node.js, and JavaScript, with expertise in problem-solving,
            data structures and OOPs in (C++), performance optimization, and
            user experience enhancement
          </p>
        </div>

        <div className="mt-3">
          <Tabs/>

        </div>
      </div>
    </div>
  );
}
