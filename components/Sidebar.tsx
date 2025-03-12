import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PiBooksDuotone } from "react-icons/pi";
import { Avatar } from "@heroui/avatar";
import ListBoxWrapper from "@/components/ui/ListboxWrapper";
import SocialLinks from "./ui/SocialLinks";

export default function Sidebar() {
  return (
    <div className="w-72 h-[95vh] bg-white bg-opacity-5 backdrop-blur-lg flex flex-col gap-1 relative m-3 rounded-lg p-4">
      {/* Profile Section */}
      <div className="text-center flex gap-2 flex-col items-center">
        <Avatar
          isBordered
          radius="sm"
          color="success"
          className="w-[7rem] h-[7rem] text-large"
          src="avatar.jpg"
        />

        <h2 className="text-xl font-semibold mt-2">Arnav Sharma</h2>
        <p className="text-sm text-gray-300 font-light">Full-Stack Developer</p>

        <div className="text-left mt-1">
          <h2 className="text-xl text-gray-300 flex align-middle items-center gap-3 ">
            {" "}
            <span className="text-blue-600 ">
              <PiBooksDuotone  className="w-7 h-7"/>
            </span>{" "}
            Education
          </h2>

          <div className="mt-2">
            <h3 className="text-md font-semibold text-white">
              Delhi Technical Campus GN
            </h3>
            <p className="text-sm text-gray-400">
              Bachelor of Technology in Computer Science
            </p>
            <p className="text-sm text-gray-400">Graduation Year: 2026</p>
          </div>

          <div className="mt-2">
            <h3 className="text-md font-semibold text-white">
              Relevant Coursework
            </h3>
            <ListBoxWrapper />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col justify-center space-x-1 mt-2 space-y-3">
        <h2 className="text-xl font-semibold mt-2">Social Links</h2>
        <SocialLinks/>
      </div>
    </div>
  );
}
