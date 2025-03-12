import React from "react";
import { Card, CardBody, Chip, Link } from "@heroui/react";
import { SlCalender } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface ProjectProps {
  project: string;
  link: string;
  duration: string;
  description: string[];
  skills: string[];
}

export function ProjectCard({
  project,
  link,
  duration,
  description,
  skills,
}: ProjectProps) {
  return (
    <Card
      isBlurred
      className="w-full mb-4 border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{project}</h3>
            <Link href={link} color="secondary" className="mt-1"><FiGithub/></Link>
          </div>
          <div className="flex items-center text-default-500">
            <SlCalender className="w-4 h-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        <div className="my-4">
          {description.map((point, index) => (
            <div key={index} className="flex items-start gap-3 mb-2">
              <FaCircle className="w-2.5 h-2.5 text-primary mt-[5px] shrink-0" />
              <p className="text-sm text-default-600 leading-relaxed w-full">
                {point}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <Chip key={skill} size="sm" variant="flat" color="primary">
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
