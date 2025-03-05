import { getAllListingsByCategory } from "@/services/listing";
import React from "react";
import { TSearchParams } from "../../page";
import AllListingsByCategory from "@/components/modules/home/Category/AllListingsByCategory";

const CategoryListingsPage = async ({ params, searchParams }: { params: Promise<{ category: string }>; searchParams: TSearchParams }) => {
  const { category } = await params;
  const query = await searchParams;

  const { data: listings } = await getAllListingsByCategory(category, undefined, undefined, query);
  return (
    <div>
      <AllListingsByCategory listings={listings} />
    </div>
  );
};

export default CategoryListingsPage;
