"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchListings = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize search term from URL query params if available
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const persistedSearchTerm = searchParams.get("searchTerm");
    if (persistedSearchTerm) {
      setSearchTerm(persistedSearchTerm); // Set the search term from URL if exists
    } else {
      setSearchTerm(""); // Clear the input field if no searchTerm in the URL
    }
  }, [searchParams]); // Run the effect when the searchParams change

  const handleSearch = () => {
    if (searchTerm) {
      // Update the URL with the search term when search button is clicked
      const params = new URLSearchParams(searchParams.toString());
      params.set("searchTerm", searchTerm);
      router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });
    } else {
      // Remove the searchTerm from the URL if the input is empty
      const params = new URLSearchParams(searchParams.toString());
      params.delete("searchTerm");
      router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <div className="max-w-screen-md">
      <div className="relative flex items-center rounded-xl overflow-hidden  h-14 border-[2px] border-[#e9ebec] dark:border-[#142e3a] ">
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update input value
          placeholder="Search..."
          className="w-full h-full rounded-r-none px-4 outline-none border-none focus:ring-0 dark:shadow-[#0d0e15] bg-light-secondary-bg dark:bg-dark-secondary-bg"
        />
        <div
          className="w-14 h-full bg-primary-btn-bg text-black flex items-center justify-center cursor-pointer"
          onClick={handleSearch} // Call handleSearch on click
        >
          <Search size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default SearchListings;
