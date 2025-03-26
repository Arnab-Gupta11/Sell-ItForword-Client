import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { getFeaturedBlogs } from "@/services/blog";
import LatestBlogLoader from "@/components/shared/Loader/BlogLoader/LatestBlogLoader";
import { Suspense } from "react";
import LatestBlogsSlider from "./LatestBlogsSlider";

const LatestBlogs = async () => {
  const result = await getFeaturedBlogs();
  return (
    <div className="pt-14 pb-20">
      {/* Heading */}
      <div className="flex items-center justify-between flex-wrap gap-5 mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold ">Latest Blogs</h1>
        <Link href={"/listings"}>
          <Button variant="primary" className="flex items-center gap-2 text-white">
            <span className="font-medium">View All</span>
            <FaAngleRight />
          </Button>
        </Link>
      </div>

      {/* Blog Slider */}
      <Suspense fallback={<LatestBlogLoader />}>
        <LatestBlogsSlider blogs={result?.data} />
      </Suspense>
    </div>
  );
};

export default LatestBlogs;
