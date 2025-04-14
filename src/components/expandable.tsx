"use client";

import { useRef, useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface ExpandableProps {
  title: string;
  type?: "info" | "warning";
  children: React.ReactNode;
}

const Expandable: React.FC<ExpandableProps> = ({
  title,
  type = "info",
  children,
}: ExpandableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-md shadow-sm overflow-hidden my-4">
      <button
        className="w-full text-left px-4 py-3 font-semibold transition hover:text-blue cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row gap-2 items-center">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />} {title}
        </div>
      </button>

      <div
        ref={contentRef}
        className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
        style={{ transitionProperty: "max-height, padding" }}
      >
        <div className="text-gray-700 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Expandable;
