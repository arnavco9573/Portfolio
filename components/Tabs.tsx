"use client";
import { Tabs, Tab, Button, Spinner } from "@heroui/react";
import { ExperienceCard } from "./ui/ExperienceCard";
import { ProjectCard } from "./ui/ProjectCard";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import SkillsCard from "./SkillsCard";

export default function App() {
  const resumeUrl = "/resume.pdf";
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    // Create an invisible anchor tag to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Arnav_Resume.pdf"; // File name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate download completion after 2 seconds
    setIsLoading(false);
  };

  const experiences = [
    {
      company: "Mylamp.ai",
      role: "Web Developer Intern",
      link: "https://drive.google.com/file/d/1BniRBJJ9d70uaGg-JITsc7fEiyE4qdBJ/view?usp=sharing",
      duration: "June 2024 - August 2024 ",
      description: [
        "Designed and implemented RESTful API endpoints utilizing TypeScript, which increased response times by 25%",
        "Instituted a comprehensive authentication system with NextAuth as well as with some API endpoints improving user login experience and reducing support requests related to access issues. ",
        "Implemented a scalable architecture that enabled seamless real-time interactions between users in communities using the socket.io, which allows the efficient message handling and broadcasting mechanism ",
        "Participated in weekly meetings and code reviews.",
      ],
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "NextAuth",
        "Git",
        "Primsa",
        "MongoDb",
      ],
    },
    {
      company: "HecDec",
      role: "Junior Frontend Developer",
      link: "https://drive.google.com/file/d/1zDOYIV7qaEphGHznxM8zTOr6jsSsluZu/view?usp=drive_link",
      duration: "June 2023 - August 2023",
      description: [
        "Designed a front-end of EdTech Website with React.js front-end and a Tailwind CSS for the sleek and responsive design. Role included Front-end Development of Figma design.  ",
        "Optimized database queries improving performance by 40%",
        "Conducted code reviews and participated in weekly meetings, contributing to a collaborative and agile development environment. ",
      ],
      skills: ["React", "JavaScript", "Git", "Tailwind CSS"],
    },
  ];

  const webprojects = [
    {
      project: "Real-time messaging app using Pusher",
      link: "https://github.com/arnavco9573/Chat_App",
      duration: "Nov-2024 ",
      description: [
        "Implemented pusher-based one-on-one messaging, group chats, online/offline user status, and real-time messaging with read receipts, incorporating strong authentication using NextAuth, Google, and GitHub. ",
        "For a comprehensive user experience, we enabled image sharing via Cloudinary, user profile customization, and efficient group chat management.",
      ],
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "NextAuth",
        "Git",
        "Primsa",
        "MongoDb",
        "Pusher",
      ],
    },
    {
      project: "Pathfinding Algorithms Visualizer (College Project)",
      link: "https://github.com/arnavco9573/PathFinding_Alogorithms",
      duration: "Nov-2024 ",
      description: [
        "Developed a pathfinding visualizer app using React.js to demonstrate algorithms such as BFS, DFS, A*, and Dijkstra.",
        "The application supports various maze generation techniques, including Binary Tree, Recursive Division, and No Maze, providing an interactive and dynamic visualization of pathfinding in different environments. ",
      ],
      skills: ["React", "Node.js", "TypeScript", "JavaScript", "Git"],
    },
    {
      project: "Web application for sharing AI chat prompts",
      link: "https://github.com/arnavco9573/QuillMind",
      duration: "Oct-2023 ",
      description: [
        "Developed and deployed a comprehensive content management system using Next.js, where users can seamlessly create, read, update, and delete prompts. This project enriched the platform’s interactivity, fostering a more engaging and collaborative community environment.",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "JavaScript",
        "Git",
      ],
    },
  ];
  return (
    <div className="flex w-full flex-col max-w-[52rem] mb-10 md:mb-1">
      <Tabs
        key="success"
        color="success"
        aria-label="Options"
        variant="underlined"
        className=""
      >
        <Tab key="Experience" title="Experience">
          <div className="mt-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </Tab>
        <Tab key="Projects" title="Projects">
          <Tabs
            key="success"
            color="success"
            aria-label="Options"
            variant="underlined"
            className="flex sm:flex-wrap"
          >
            <Tab key="Web Dev Projects" title="Web Dev Projects">
              <div className="mt-4">
                {webprojects.map((pro, index) => (
                  <ProjectCard key={index} {...pro} />
                ))}
              </div>
            </Tab>
            <Tab key="ML Projects" title="ML Projects">
              Uploading Soon.....
            </Tab>
            <Tab key="Deep-Learning Projects" title="Deep-Learning Projects">
              Uploading Soon.....
            </Tab>
          </Tabs>
        </Tab>
        <Tab key="Skills" title="Skills">
          <h2 className="text-lg font-bold text-white mb-2 p-2">
            What I Know!
          </h2>
          <SkillsCard />
        </Tab>
        <Tab key="Resume" title="Resume">
          <div className="mt-5 items-left ml-3">
            <h2 className="text-lg font-semibold mb-2">
              Click to Download the Resume
            </h2>
            <Button
              className="mt-2"
              color="secondary"
              isLoading={isLoading}
              onPress={handleDownload}
              variant="bordered"
            >
              {isLoading ? <Spinner /> : "Download"}
            </Button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
