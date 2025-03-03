"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

const suggestions: string[] = [
  "iPhone 11 - Apple -এ মোবাইল ফোন",
  "iPhone 11 Pro - Apple -এ মোবাইল ফোন",
  "iPhone 11 Pro Max - Apple -এ মোবাইল ফোন",
  "iPhone 12 - Apple -এ মোবাইল ফোন",
  "iPhone 12 Mini - Apple -এ মোবাইল ফোন",
  "iPhone 11 Pro Max - Apple -এ মোবাইল ফোন",
  "iPhone 12 - Apple -এ মোবাইল ফোন",
  "iPhone 12 Mini - Apple -এ মোবাইল ফোন",
];

const SearchDropdown = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredSuggestions(value ? suggestions.filter((item) => item.toLowerCase().includes(value.toLowerCase())) : []);
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-5 sm:px-0 mt-10">
      <div className="relative flex items-center rounded-xl overflow-hidden bg-[#eceded] dark:bg-[#07141e] h-14 shadow-box-shadow dark:shadow-box-shadow-dark">
        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full h-full rounded-r-none px-4 outline-none border-none focus:ring-0  dark:shadow-[#0d0e15] "
        />
        <div className="w-14 h-full bg-primary-btn-bg text-black flex items-center justify-center cursor-pointer">
          <Search size={20} className="text-white" />
        </div>
      </div>
      {filteredSuggestions.length > 0 && (
        <Card className="absolute top-full left-0 w-full bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-lg mt-1 rounded-md overflow-hidden max-h-56 overflow-y-auto overflow-x-hidden border-none p-3 ">
          {filteredSuggestions.map((item, index) => (
            <div key={index} className="p-2 hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg cursor-pointer rounded-md">
              {item}
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default SearchDropdown;
