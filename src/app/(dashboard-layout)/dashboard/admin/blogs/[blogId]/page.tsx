import UpdateBlogForm from "@/components/modules/dashboard/admin/ManageBlogs/UpdateBlogForm";
import Spinner from "@/components/shared/Loader/Spinner/Spinner";
import { getBlogDetails } from "@/services/blog";
import { Suspense } from "react";

const UpdateListingPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const res = await getBlogDetails(blogId);
  const { data } = res;
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <UpdateBlogForm blogs={data} />
      </Suspense>
    </div>
  );
};

export default UpdateListingPage;
