// import { Blog } from "@/types";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import fallback from "@/assets/fallback/fallback.png";
import { Button } from "@/components/ui/button";
import { TBlog } from "@/types/blog.types";
import { formateDateTime } from "@/lib/formateDateTime";
import Link from "next/link";
//
const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-full overflow-hidden ">
      <figure>
        <Image src={blog?.image || fallback} width={600} height={100} alt="blog image" className="rounded-lg h-64 object-cover" />
      </figure>
      <div className="py-4">
        {/* <div className="flex items-center justify-center text-black bg-[#a0c6eb] rounded-md py-1 text-sm">
          <FaCalendar className="mr-2" />
          <span>{formateDateTime(blog?.createdAt)}</span>
        </div> */}
        <p className="flex items-center w-fit text-black bg-[#a0c6eb] rounded-md py-1 text-sm px-2">
          <FaCalendar className="mr-2" />
          {formateDateTime(blog?.createdAt)}
        </p>
        <h2 className="text-lg text-light-primary-txt dark:text-dark-primary-txt font-medium mt-3 truncate">{blog?.title}</h2>
        <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
          {blog.content.length > 100 ? blog.content.slice(0, 60) + "..." : blog.content}
        </p>
        <Link href={`/blogs/${blog._id}`}>
          <Button variant="primary" className="mt-3">
            Reade More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
