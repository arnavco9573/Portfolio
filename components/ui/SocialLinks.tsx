"use client"
import React from "react";
import { Link } from "@heroui/react";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/arnavco9573",
      icon: <FiGithub className="h-7 w-7 text-pink-400 transition-transform -translate-y-1 group-hover:-translate-y-2" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/arnavsharm098",
      icon: <BsTwitterX className="h-7 w-7 text-gray-400 transition-transform -translate-y-1 group-hover:-translate-y-2" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arnav-sharma-212944257/",
      icon: <SlSocialLinkedin className="h-7 w-7 text-blue-600 transition-transform -translate-y-1 group-hover:-translate-y-2" />,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          isExternal
          className="group flex items-center gap-3 p-2 text-sm font-medium transition-all"
        >
          <span className="flex items-center justify-center">{link.icon}</span>
          <span className="text-gray-300 leading-none">{link.name}</span>
        </Link>
      ))}
    </div>
  );
}
