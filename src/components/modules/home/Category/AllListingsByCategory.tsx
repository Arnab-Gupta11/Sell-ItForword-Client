import { TListingDetails } from "@/types/listing.types";

import CategoryListingFilterSidebar from "./CategoryListingFilterSidebar";
import ListingCard from "../../listings/ListingCard";
import SearchListings from "../../listings/SearchListings";
import CategoryListingFilterResponsiveSidebar from "./CategoryListingFilterResponsiveSidebar";
import { FaBoxOpen } from "react-icons/fa";

const AllListingsByCategory = ({ listings }: { listings: TListingDetails[] }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 xsm:px-5 bs:px-8 xl:px-0">
      {/* {listings?.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center max-w-screen-sm mx-auto px-8">
          <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center">
            <FaBoxOpen className="text-9xl opacity-35" />
            <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">
              Oops! Looks like there are no listings in this category right now. Check back soon.
            </h1>
          </div>
        </div>
      ) : ( */}
      <div className="grid grid-cols-1 bs:grid-cols-12 gap-5 pt-20 pb-24">
        <div className="bs:col-span-4 xl:col-span-3  hidden bs:block">
          <CategoryListingFilterSidebar />
        </div>
        <div className="bs:col-span-8 xl:col-span-9">
          {/* search option  */}
          <div className="flex gap-5 flex-row items-center flex-wrap pb-5 border-b-[1px] border-[#e9ebec] dark:border-[#142e3a]">
            <div className="max-w-screen-xs flex-grow">
              <SearchListings />
            </div>
            <div className="flex items-center gap-4">
              <CategoryListingFilterResponsiveSidebar />
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
                <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
                  <FaBoxOpen className="text-9xl opacity-35" />
                  <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">
                    No listings found in this category. Try adjusting your filters or explore other categories!
                  </h1>
                </div>
              </div>
            )}
          </div>
          {/* </> */}
          {/* )} */}
          {/* <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} /> */}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default AllListingsByCategory;
