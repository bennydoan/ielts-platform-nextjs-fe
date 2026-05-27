"use client";
import { TestCategory } from "@/data/Course";

type Props = {
  selected: string | null;
  onSelect: (category: string) => void; // function has one parameter type string return void
};

function TestCategoriesMenu({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-row justify-center gap-1 w-[90%] lg:w-[81%] mx-auto xl:justify-start">
      {TestCategory.map((c, index) => {
        return (
          <button
            key={index}
            onClick={() => onSelect(c)}
            className={`flex items-center justify-center border rounded-lg px-[12px] w-[105px] h-[36px] text-sm font-medium whitespace-nowrap capitalize transition-colors cursor-pointer
        ${
          selected === c
            ? "bg-[#F5222D] text-white border-[#F5222D]"
            : "text-gray-400 border-gray-400 hover:bg-[#F5222D] hover:text-white hover:border-[#F5222D]"
        }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}

export default TestCategoriesMenu;
