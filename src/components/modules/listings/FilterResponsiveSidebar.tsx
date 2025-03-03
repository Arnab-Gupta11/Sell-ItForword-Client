import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

const FilterResponsiveSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex bs:hidden">
        <span className="bg-primary-btn-bg text-white hover:bg-primary-btn-bg-hover duration-700 transition-all ease-in-out hover:scale-105 active:scale-95 p-3 rounded-lg">
          <Filter />
        </span>
      </SheetTrigger>
      <SheetContent className="w-[90%] xs:w-[400px] bg-light-secondary-bg dark:bg-dark-secondary-bg overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between pb-4 border-b-[1px] border-[#e9ebec] dark:border-[#142e3a] font-semibold text-light-primary-txt dark:text-dark-primary-txt text-lg ">
            Filter Listings
          </SheetTitle>
          <FilterSidebar />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterResponsiveSidebar;
