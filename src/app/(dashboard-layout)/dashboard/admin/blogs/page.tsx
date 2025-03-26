import ManageBlogs from "@/components/modules/dashboard/admin/ManageBlogs/ManageBlogs";
import TableSkeletonLoader from "@/components/shared/Loader/TableSkeletonLoader";
import { getAllBlogs } from "@/services/blog";
import Link from "next/link";
import { Suspense } from "react";
import { FaBoxOpen } from "react-icons/fa";

const ManageBlogsPage = async ({ searchParams }: { searchParams: Promise<Record<string, string>> }) => {
  const params = await searchParams;
  const result = await getAllBlogs(params);
  const { data, meta } = result;
  console.log(data);
  console.log(meta);
  return (
    <Suspense fallback={<TableSkeletonLoader />}>
      <div>
        {data && data.length > 0 ? (
          <ManageBlogs blogs={data} meta={meta} />
        ) : (
          <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-lg sm:text-2xl font-bold text-center max-w-screen-sm mx-auto px-8">
              <FaBoxOpen className="text-9xl opacity-35" />
              <h1 className=" text-light-secondary-txt dark:text-dark-secondary-txt">Oops! No Blogs available.</h1>
              <Link href="/dashboard/user/listings/add-listing"></Link>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default ManageBlogsPage;
