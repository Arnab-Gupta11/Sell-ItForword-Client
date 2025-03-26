// import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import fallback from "@/assets/fallback/fallback.png";
import { Button } from "@/components/ui/button";
// { blog }: { blog: Blog }
const BlogCard = () => {
  return (
    <div className="w-full overflow-hidden ">
      <figure>
        <Image src={fallback} width={600} height={100} alt="blog image" className="rounded-lg h-64 object-cover" />
      </figure>
      <div className="py-4">
        <div className="flex items-center justify-center text-black w-32 bg-[#a0c6eb] rounded-md py-1 text-sm">
          <FaCalendar className="mr-2" />
          <span>{"fdshsf"}</span>
        </div>
        <h2 className="text-lg text-light-primary-txt dark:text-dark-primary-txt font-medium mt-3">
          {/* {blog.title.length > 30 ? blog.title.slice(0, 30) + "..." : blog.title} */}
          hello
        </h2>
        <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
          {/* {blog.description.length > 100 ? blog.description.slice(0, 60) + "..." : blog.description}
          <Link href={`/blogs/${blog.id}`} className="text-teal-600 ml-1">
            Read More
          </Link> */}
          Hi
        </p>
        <Button className="mt-3">Reade More</Button>
      </div>
    </div>
  );
};

export default BlogCard;
