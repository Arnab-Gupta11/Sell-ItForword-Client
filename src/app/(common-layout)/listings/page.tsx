import AllListings from "@/components/modules/listings/AllListings";
import { getAllListings } from "@/services/listing";
export type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const AllListingsPage = async ({ searchParams }: { searchParams: TSearchParams }) => {
  const query = await searchParams;

  const { data: listings } = await getAllListings(undefined, undefined, query);
  return (
    <div>
      <AllListings listings={listings} />
    </div>
  );
};

export default AllListingsPage;
