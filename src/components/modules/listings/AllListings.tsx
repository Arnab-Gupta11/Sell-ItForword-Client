import { TListingDetails } from "@/types/listing.types";
import FilterSidebar from "./FilterSidebar";
import ListingCard from "./ListingCard";
import SearchListings from "./SearchListings";
import FilterResponsiveSidebar from "./FilterResponsiveSidebar";
import { TMeta } from "@/types/global.types";
import { ICategory } from "@/types/category.types";

const AllListings = ({ listings, categories }: { listings: TListingDetails[]; categories: ICategory[] }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 xsm:px-5 bs:px-8 xl:px-0">
      <div className="grid grid-cols-1 bs:grid-cols-12 gap-5 pt-20 pb-24">
        <div className="bs:col-span-4 xl:col-span-3  hidden bs:block">
          <FilterSidebar categories={categories} />
        </div>
        <div className="bs:col-span-8 xl:col-span-9">
          {/* search option  */}
          <div className="flex gap-5 flex-row items-center flex-wrap pb-5 border-b-[1px] border-[#e9ebec] dark:border-[#142e3a]">
            <div className="max-w-screen-xs flex-grow">
              <SearchListings />
            </div>
            <div className="flex items-center gap-4">
              <FilterResponsiveSidebar categories={categories} />
            </div>
          </div>
          {/* {isLoading || isFetching ? (
            <Loader />
          ) : ( */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 pt-6 w-full mb-16">
            {listings?.length > 0 ? (
              listings?.map((listing) => <ListingCard key={listing._id} listing={listing} />)
            ) : (
              <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
                <div className="text-center w-full">
                  <div className="text-slate-500 font-semibold text-base md:text-2xl flex items-center justify-center gap-1 md:gap-5">
                    <span> No products match your selection.</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <CustomPagination meta={meta} /> */}
        </div>
      </div>
    </div>
  );
};

export default AllListings;
