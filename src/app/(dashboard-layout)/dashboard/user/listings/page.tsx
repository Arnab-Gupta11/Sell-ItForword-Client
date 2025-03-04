import ManageListings from "@/components/modules/dashboard/user/ManageListings/ManageListings";
import { getCurrentUser } from "@/services/auth";
import { getAllListingsOfAUser } from "@/services/listing";

const ManageListingsPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
  const { page } = await searchParams;
  const res = await getCurrentUser();
  const result = await getAllListingsOfAUser(res.userId,page);
  const { data, meta } = result;
  return (
    <div>
      <ManageListings listings={data} meta={meta} />
    </div>
  );
};

export default ManageListingsPage;
