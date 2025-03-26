import Spinner from "@/components/shared/Loader/Spinner/Spinner";
import { getBlogDetails } from "@/services/blog";


const UpdateListingPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const res = await getBlogDetails(blogId);
  const { data } = res;
  console.log(data);
  return <div>{/* <UpdateListingForm listingDetails={data} /> */}</div>;
};

export default UpdateListingPage;
