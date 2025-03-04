import UpdateListingForm from "@/components/modules/dashboard/user/ManageListings/UpdateListingForm";
import { getListingDetails } from "@/services/listing";

const UpdateListingPage = async ({ params }: { params: Promise<{ listingId: string }> }) => {
  const { listingId } = await params;

  const res = await getListingDetails(listingId);
  const { data } = res;
  return <div><UpdateListingForm listingDetails={data}/></div>;
};

export default UpdateListingPage;
