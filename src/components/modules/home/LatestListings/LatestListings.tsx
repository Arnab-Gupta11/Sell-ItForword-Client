import { Button } from "@/components/ui/button";
import { getAllListings } from "@/services/listing";
import { TListingDetails } from "@/types/listing.types";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import ListingCard from "../../listings/ListingCard";

const LatestListings = async () => {
  const res = await getAllListings();
  console.log(res);
  return (
    <div className="pt-14 pb-20">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h1 className="text-2xl sm:text-3xl font-semibold ">Latest Listings</h1>
        <Link href={"/listings"}>
          <Button variant="primary" className="flex items-center gap-2 text-white">
            <span className="font-medium">View All</span>
            <FaAngleRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 bs:grid-cols-4 gap-3 sm:gap-5 mt-12">
        {res?.data?.slice(0, 4).map((item: TListingDetails) => (
          <ListingCard key={item._id} listing={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestListings;
