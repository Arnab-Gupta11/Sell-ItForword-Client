"use client";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import imageUpload from "@/lib/imageUpload";
import { TBlog } from "@/types/blog.types";
import { UpdateBlog } from "@/services/blog";
const UpdateBlogForm = ({ blogs }: { blogs: TBlog }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const image = data.image[0];
      let imageData;
      if (image) {
        imageData = await imageUpload(image);
      }
      const blogInfo = {
        title: data.title || blogs.title,
        image: imageData || blogs.image,
        category: data.category || blogs.category,
        content: data.content || blogs.content,
      };
      const res = await UpdateBlog(blogs?._id, blogInfo);
      if (res?.success) {
        toast.success(res?.message);
        reset();
        router.push("/dashboard/admin/blogs");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-0">
      <div className="pt-10 px-4 bs:px-0">
        <div className="flex items-center justify-between mb-5 pt-8 md:px-14">
          <h2 className="text-base sm:text-lg bs:text-xl font-bold text-light-text-100 dark:text-dark-text-100 ">Update Blog</h2>
          <Button variant="primary" onClick={() => router.push("/dashboard/admin/blogs")}>
            <IoMdArrowRoundBack />
          </Button>
        </div>

        <form
          className=" shadow-light-container-shadow dark:shadow-dark-container-shadow md:px-14   rounded-md pb-10"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {/* form row */}
          <div className="mb-3 md:mb-5">
            <div className="w-full">
              <Label>Blog title</Label>
              <Input
                type="text"
                defaultValue={blogs.title}
                placeholder="Enter blog title"
                className="mt-1.5 dark:border-[#1e232e] dark:text-dark-secondary-txt text-light-secondary-txt"
                {...register("title", { required: true })}
              />
              {errors.title && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Blog title is required</span>}
            </div>
          </div>

          {/* form row */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-3 mt-1">
                {/* File Upload Button */}
                <Label>Upload Blog Image</Label>
                <label
                  htmlFor="file_input"
                  className="bg-light-primary-bg dark:bg-dark-primary-bg cursor-pointer flex items-center justify-center px-4 py-3.5 text-balance font-medium rounded-lg text-base transition-all duration-300 flex-1 w-full  border border-dashed border-[#e9ebec] dark:border-[#142e3a] "
                >
                  <FiUpload className="w-3 h-3 xs:w-5 xs:h-5 mr-2" />
                  {/* Display Selected File Name */}
                  <p className="text-sm text-slate-500 font-medium ">{watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "Select Image"}</p>
                </label>

                {/* Hidden File Input */}
                <input className="hidden" id="file_input" type="file" accept="image/*" {...register("image")} />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Label>Category</Label>
              <Input
                type="text"
                defaultValue={blogs.category}
                placeholder="Enter blog category"
                className="mt-1.5 dark:border-[#1e232e] dark:text-dark-secondary-txt text-light-secondary-txt rounded-lg"
                {...register("category", { required: true })}
              />
              {errors.category && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Blog Category is required</span>}
            </div>
          </div>

          {/* form row */}

          <div className=" mt-5">
            <Label>Blog Content</Label>
            <textarea
              defaultValue={blogs.content}
              className="bg-light-primary-bg dark:bg-dark-primary-bg w-full px-3 py-2 text-base shadow-sm md:text-sm text-light-primary-txt dark:text-dark-primary-txt mt-1.5 focus-within:outline-none rounded-lg"
              id=""
              cols={30}
              rows={8}
              placeholder="Write your blog content...."
              {...register("content", { required: true })}
            />
            {errors.content && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Blog Content is required</span>}
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button variant="primary" type="submit" disabled={loading} className="sm-mx:w-full w-32">
              {loading ? <BiLoaderCircle className="animate-spin" /> : "Update Blog"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogForm;
