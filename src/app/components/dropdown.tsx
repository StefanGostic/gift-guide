import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  options: string[];
  placeholder: string;
  label: string;
  onSelect: (value: string) => void;
  selected: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  label,
  onSelect,
  selected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full mt-4" ref={dropdownRef}>
      <label className="block text-sm mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-2 border border-[#726794] rounded-2xl transition-colors duration-200 hover:bg-[#726794]/20 bg-transparent flex justify-between items-center"
      >
        <span>{selected || placeholder}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 border border-[#726794] bg-[#1f114be6] rounded-2xl max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`px-6 py-2 cursor-pointer hover:bg-[#726794]/20 ${
                selected === option ? "bg-[#726794]/40" : ""
              }`}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
