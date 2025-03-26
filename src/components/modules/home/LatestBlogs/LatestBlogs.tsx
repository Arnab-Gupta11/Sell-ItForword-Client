import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import BlogCard from "../../blog/BlogCard";

const LatestBlogs = () => {
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
      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
      </div>
    </div>
  );
};

export default LatestBlogs;
