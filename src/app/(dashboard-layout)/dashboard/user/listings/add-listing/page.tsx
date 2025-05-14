import DashboardContainer from "@/components/modules/dashboard/Dashboard/DashboardContainer";
import AddListingForm from "@/components/modules/dashboard/user/ManageListings/AddListingForm";
import Spinner from "@/components/shared/Loader/Spinner/Spinner";
import { getAllCategories } from "@/services/category";
import { Suspense } from "react";

const AddListingPage = async () => {
  const result = await getAllCategories();
  return (
    <DashboardContainer>
      <Suspense fallback={<Spinner />}>
        <AddListingForm categories={result?.data} />
      </Suspense>
    </DashboardContainer>
  );
};

export default AddListingPage;
