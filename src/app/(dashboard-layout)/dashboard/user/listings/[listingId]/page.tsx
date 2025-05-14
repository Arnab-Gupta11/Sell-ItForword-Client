import DashboardContainer from "@/components/modules/dashboard/Dashboard/DashboardContainer";
import UpdateListingForm from "@/components/modules/dashboard/user/ManageListings/UpdateListingForm";
import Spinner from "@/components/shared/Loader/Spinner/Spinner";
import { getAllCategories } from "@/services/category";
import { getListingDetails } from "@/services/listing";
import { Suspense } from "react";

const UpdateListingPage = async ({ params }: { params: Promise<{ listingId: string }> }) => {
  const { listingId } = await params;

  const result = await getAllCategories();
  const res = await getListingDetails(listingId);
  const { data } = res;
  return (
    <DashboardContainer>
      <Suspense fallback={<Spinner />}>
        <UpdateListingForm listingDetails={data} categories={result?.data} />
      </Suspense>
    </DashboardContainer>
  );
};

export default UpdateListingPage;
