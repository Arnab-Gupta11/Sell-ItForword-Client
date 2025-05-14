/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import { IListing } from "@/types/listing.types";
import { FaBoxOpen } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchDropdown = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [listings, setListings] = useState<IListing[] | []>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [cacheListing, setCacheListing] = useState<Record<string, IListing[]>>({});
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    try {
      if (cacheListing[input]) {
        setListings(cacheListing[input]);
        return;
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings?searchTerm=${input}`);
      const result = await res.json();
      setListings(result?.data);
      setCacheListing((prev) => ({ ...prev, [input]: result?.data }));
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //ab
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResult(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (listings.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % listings.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex - 1 + listings.length) % listings.length);
        break;
      case "Enter":
        if (selectedIndex >= 0 && selectedIndex < listings.length) {
          router.push(`/listings/${listings[selectedIndex]._id}`);
          setShowResult(false);
        }
        break;
      case "Escape":
        setShowResult(false);
        break;
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-5 sm:px-0 mt-10" ref={searchRef}>
      <div className="relative flex items-center rounded-xl overflow-hidden bg-[#eceded] dark:bg-[#07141e] h-14 shadow-box-shadow dark:shadow-box-shadow-dark border-2 border-[#c8dde9] dark:border-[#07212d]">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          placeholder="Search..."
          onKeyDown={handleKeyDown}
          className="w-full h-full rounded-r-none px-4 outline-none border-none focus:ring-0 dark:shadow-[#0d0e15]"
        />
        <Link
          href={`/listings?searchTerm=${input}`}
          className="w-14 h-full bg-primary-btn-bg text-black flex items-center justify-center cursor-pointer"
        >
          <Search size={20} className="text-white" />
        </Link>
      </div>

      {showResult && (
        <div className="absolute top-full left-0 w-full bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-lg mt-1 rounded-md overflow-hidden max-h-56 overflow-y-auto border-none p-3">
          {loading ? (
            <div className="flex flex-row items-center justify-center gap-3 text-lg font-medium text-center max-w-screen-sm mx-auto p-8 animate-pulse">
              <SearchIcon size={12} className="text-light-secondary-txt dark:text-dark-secondary-txt" />
              <h1 className="text-light-secondary-txt dark:text-dark-secondary-txt">Searching....</h1>
            </div>
          ) : listings?.length > 0 ? (
            <div>
              {listings.map((item, index) => (
                <Link href={`/listings/${item?._id}`} key={item?._id} onClick={() => setShowResult(true)}>
                  <div
                    className={`p-2 hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg cursor-pointer rounded-md flex items-center gap-2 ${
                      selectedIndex === index ? "bg-light-primary-bg dark:bg-dark-primary-bg" : ""
                    }`}
                  >
                    <SearchIcon size={12} className="text-light-secondary-txt dark:text-dark-secondary-txt" />
                    <span>{item?.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-lg font-medium text-center max-w-screen-sm mx-auto p-8">
              <FaBoxOpen className="text-2xl opacity-35" />
              <h1 className="text-light-secondary-txt dark:text-dark-secondary-txt">No results found for your search.</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
