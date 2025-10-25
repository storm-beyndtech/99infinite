import React from "react";
import { Popover as HeadlessPopover } from "@headlessui/react";

interface PopoverProps {
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ children }) => (
  <HeadlessPopover className="relative">
    {children}
  </HeadlessPopover>
);

interface PopoverTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, asChild = false }) => {
  if (asChild && React.isValidElement(children)) {
    return (
      <HeadlessPopover.Button as={React.Fragment}>
        {children}
      </HeadlessPopover.Button>
    );
  }
  
  return (
    <HeadlessPopover.Button>
      {children}
    </HeadlessPopover.Button>
  );
};

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
}

const PopoverContent: React.FC<PopoverContentProps> = ({ 
  children, 
  className = "",
  align = "center"
}) => {
  const alignmentClasses = {
    start: "origin-top-left left-0",
    center: "origin-top -translate-x-1/2 left-1/2",
    end: "origin-top-right right-0"
  };

  return (
    <HeadlessPopover.Panel
      className={`absolute z-50 mt-2 ${alignmentClasses[align]} transform transition-all duration-200 ${className}`}
    >
      {children}
    </HeadlessPopover.Panel>
  );
};

export { Popover, PopoverTrigger, PopoverContent };