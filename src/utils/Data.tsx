// utils/Data.tsx
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export const TimelineData = [
  {
    date: "January 2024",
    title: "B.Tech",
    description: "B.Tech graduate with specialization in CSE",
    icon: <FaGraduationCap className="text-xl text-blue-500" />, // 🎓
  },
  {
    date: "February 2024",
    title: "Design Phase",
    description: "Finalizing designs and mockups.",
    icon: <FaBriefcase className="text-xl text-green-500" />, // 💼
  },
  {
    date: "March 2024",
    title: "Development Phase",
    description: "Starting the development of the project.",
    icon: <FaBriefcase className="text-xl text-yellow-500" />,
  },
  {
    date: "April 2024",
    title: "Testing Phase",
    description: "Testing and quality assurance.",
    icon: <FaBriefcase className="text-xl text-purple-500" />,
  },
  {
    date: "May 2024",
    title: "Launch",
    description: "Official project launch.",
    icon: <FaBriefcase className="text-xl text-red-500" />,
  },
];
