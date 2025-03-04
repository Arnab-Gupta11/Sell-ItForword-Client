import { getListingDetails } from "@/services/listing";

const UpdateListingPage = async ({ params }: { params: Promise<{ listingId: string }> }) => {
  const { listingId } = await params;

  const res = await getListingDetails(listingId);
  console.log(res);
  return <div>UpdateListingPage</div>;
};

export default UpdateListingPage;
