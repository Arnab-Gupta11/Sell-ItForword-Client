import { formateDateTime } from "@/lib/formateDateTime";
import { TBlog } from "@/types/blog.types";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="max-w-screen-lg lg:mx-auto p-5 md:p-10 bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-sm min-h-screen rounded-lg mb-20 mx-3 xsm:mx-5">
      <div>
        <Image src={blog?.image} width={800} height={400} alt="Image" className="w-full rounded-lg" />
      </div>
      <p className="flex items-center w-fit text-black bg-[#a0c6eb] rounded-md py-1 text-sm px-2 mt-4">
        <FaCalendar className="mr-2" />
        {formateDateTime(blog?.createdAt)}
      </p>
      <h2 className="text-light-primary-txt dark:text-dark-primary-txt text-xl sm:text-2xl md:text-3xl font-semibold my-5">{blog.title}</h2>
      {/* <div className="flex items-center justify-center bg-gray-100 mb-5 py-2 rounded-lg gap-2">
        <Image src="https://cdn-icons-png.flaticon.com/512/219/219986.png" width={30} height={30} alt="author image" />

        <span className="text-lg font-medium">{"By Admin"}</span>
      </div> */}
      <div className=" leading-relaxed">
        <p className="text-light-secondary-txt dark:text-slate-300 mt-5 text-justify">{blog?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
