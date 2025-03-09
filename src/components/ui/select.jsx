import React from "react";

export function Select({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectTrigger({ children, className }) {
  return (
    <button className={`bg-white border border-gray-300 rounded px-4 py-2 ${className}`}>
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="absolute mt-2 w-full bg-white shadow-md rounded">{children}</div>;
}

export function SelectItem({ value, children }) {
  return <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">{children}</div>;
}
