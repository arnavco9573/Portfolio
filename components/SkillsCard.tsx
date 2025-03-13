"use client";

import { Card, CardBody, CardHeader, Chip } from "@heroui/react";

const chipColors: Array<"primary" | "secondary" | "success" | "warning" | "danger" | "default"> = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "default"
  ];

const skills = {
  Languages:["C/C++","Python","JavaScript","TypeScript","Java"],  
  Frontend: ["React.js", "Next.js","Tailwind CSS"],
  Backend: ["Node.js", "Prisma", "Express.js", "Git", "Socket.IO"],
  Databases: ["MongoDB", "MySQL",],
};


export default function SkillsCard() {
  return (
    <Card className="bg-opacity-5 text-white shadow-lg rounded-lg p-2">
      <CardBody>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-2">
            <h3 className="text-md font-light bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">{category}</h3>
            <div className="flex flex-wrap gap-2 items-center mt-2">
              {items.map((skill, index) => (
                <Chip
                  key={skill}
                  color={chipColors[index % chipColors.length]} // Cycle through colors
                  variant="bordered"
                >
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
