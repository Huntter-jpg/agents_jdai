"use client";

import { categories } from "@/data/agents";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 h-10 text-label-lg rounded-full border transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.97] ${
            selected === category
              ? "bg-gray-900 text-white border-gray-900 shadow-elevation-1"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
