import ManageListings from "@/components/modules/dashboard/user/ManageListings";
import { getCurrentUser } from "@/services/auth";
import { getAllListingsOfAUser } from "@/services/listing";

const ManageListingsPage = async () => {
  const res = await getCurrentUser();
  const result = await getAllListingsOfAUser(res.userId);
  const { data } = result;
  return (
    <div>
      <ManageListings listings={data} />
    </div>
  );
};

export default ManageListingsPage;
