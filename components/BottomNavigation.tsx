"use client";

import { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { CiMail } from "react-icons/ci";
import { SiHyperskill } from "react-icons/si";
import Sidebar from "@/components/Sidebar";
import SkillsCard from "./SkillsCard";
import MobileContactFrom from "./ui/MobileContactFrom";

export default function BottomNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Separate useDisclosure for Skills, Profile, and Contact
  const skillsModal = useDisclosure();
  const profileDrawer = useDisclosure();
  const contactModal = useDisclosure();

  // Close Sidebar when switching to laptop/desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white bg-opacity-5 backdrop-blur-md shadow-md p-2 flex justify-evenly items-center lg:hidden">

        {/* Profile Button */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          // Open Profile Drawer
        >
          <Button onPress={profileDrawer.onOpen} variant="light" className="">
            <Avatar size="sm" src="/avatar.jpg" radius="full" color="primary" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>

        {/* Profile Drawer */}
        <Drawer
          isOpen={profileDrawer.isOpen}
          placement="left"
          onOpenChange={profileDrawer.onOpenChange}
          className="scrollbar-hide"
        >
          <DrawerContent>
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Contact Button */}
        <Button variant="light" onPress={contactModal.onOpen}>
          <div className="flex flex-col items-center text-white">
            <CiMail className="text-lg" /> {/* Force bigger size */}
            <span className="text-sm mt-1">Contact</span>
          </div>
        </Button>
        {/* Contact Modal */}
        <MobileContactFrom
          isOpen={contactModal.isOpen}
          onOpenChange={contactModal.onOpenChange}
        />
      </div>
    </>
  );
}
