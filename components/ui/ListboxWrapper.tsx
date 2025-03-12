"use client"
import React from "react";
import {Listbox, ListboxItem} from "@heroui/react";

export default function App() {
  const relevantCourseWork = [
    {id: 1, name: "Data Structures & Algorithms(C++)"},
    {id: 2, name: "Operating Systems"},
    {id: 3, name: "Database Management Systems"},
    {id: 4, name: "Computer Networks"},
    {id: 5, name: "Object-Oriented Programming(C++)"},
    {id: 6, name: "Web Technologies"},
  ];

  return (
    <div className="w-full max-w-[400px]">
      <Listbox 
        aria-label="Course Work" 
        items={relevantCourseWork}
        variant="flat"
      >
        {(item) => (
          <ListboxItem key={item.id}>
            {item.name}
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}