import { IListing } from "@/types/listing.types";
import FilterSidebar from "./FilterSidebar";
import ListingCard from "./ListingCard";
import SearchListings from "./SearchListings";

const AllListings = ({ listings }: { listings: IListing[] }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 bs:grid-cols-12 gap-5 pt-20 pb-24">
        <div className="bs:col-span-4 xl:col-span-3  hidden bs:block">
          {/* <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-[#f1f1f1]">
            <div className="font-semibold text-slate-800 text-lg ">Filter Products</div>
          </div> */}
          <FilterSidebar />
        </div>
        <div className="bs:col-span-8 xl:col-span-9">
          {/* search option  */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between pb-2 border-b-[1px] border-b-[#f1f1f1]">
            <div>
              <SearchListings />
            </div>
            <div className="flex items-center gap-4">
              {/* <FilterSidbar queryParams={queryParams} setQuerParams={setQuerParams} initialMinPrice={0} initialMaxPrice={10000} /> */}
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
          {/* </> */}
          {/* )} */}
          {/* <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} /> */}
        </div>
      </div>
    </div>
  );
};

export default AllListings;
