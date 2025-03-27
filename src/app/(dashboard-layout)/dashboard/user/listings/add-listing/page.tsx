import AddListingForm from "@/components/modules/dashboard/user/ManageListings/AddListingForm";
import { getAllCategories } from "@/services/category";

const AddListingPage = async () => {
  const result = await getAllCategories();
  return (
    <div>
      <AddListingForm categories={result?.data} />
    </div>
  );
};

export default AddListingPage;
