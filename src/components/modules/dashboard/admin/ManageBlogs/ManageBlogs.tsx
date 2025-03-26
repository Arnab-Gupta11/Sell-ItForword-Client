"use client";
import { BsThreeDots } from "react-icons/bs";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "@/components/ui/core/Modal/DeleteConfirmationModal";
import { TMeta } from "@/types/global.types";
import { CustomPagination } from "@/components/shared/CustomPagination/CustomPagination";
import { TBlog } from "@/types/blog.types";
import { deleteBlog } from "@/services/blog";
const ManageBlogs = ({ blogs, meta }: { blogs: TBlog[]; meta: TMeta }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: TBlog) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteBlog(selectedId);
        if (res?.success) {
          toast.success(res?.message);
          setModalOpen(false);
        } else {
          toast.error(res?.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  return (
    <div>
      {/* Blog Page Heading  */}
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
        <h1 className="text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Manage Blogs</h1>
        <Link href="/dashboard/admin/blogs/add-blog">
          <Button variant="primary">
            <Plus />
            <span>Add Blog</span>
          </Button>
        </Link>
      </div>

      {/* Blog Table  */}
      <div className="overflow-x-auto rounded-xl  pb-10">
        <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
          <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
            <tr>
              <th className="px-4 py-2 text-left border w-32  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
              <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Title</th>
              <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Category</th>
              <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((item: TBlog) => (
              <tr key={item?._id} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
                <td className="px-4 py-2 border w-32  border-[#e9ebec] dark:border-[#142e3a]">
                  <Image
                    src={item?.image || "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
                    width={20}
                    height={20}
                    alt="Listing Image"
                    className="w-16 h-16 bg-[#F7F7F7] dark:bg-[#101624] p-2 rounded-lg flex-shrink-0"
                  />
                </td>
                <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.title}</td>
                <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.category}</td>
                <td className="px-4 py-2 border w-20  dark:border-[#232935] border-slate-300">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
                      <BsThreeDots className="mt-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      className="bg-[#f7fbfe] dark:bg-[#101624] border-none shadow-md shadow-secondary-bg-light outline-none p-2 flex flex-col gap-2"
                    >
                      <span className="hover:text-primary border-2 border-[#e9ebec] dark:border-[#142e3a] py-2 px-5 rounded-lg hover:bg-light-primary-bg dark:hover:bg-dark-secondary-bg font-medium text-sm w-full">
                        <Link href={`/dashboard/admin/blogs/${item?._id}`}>Update</Link>
                      </span>

                      <span
                        onClick={() => handleDelete(item)}
                        className="hover:text-red-500 border-2 border-[#e9ebec] dark:border-[#142e3a] py-2 px-5 rounded-lg hover:bg-light-primary-bg dark:hover:bg-dark-secondary-bg font-medium text-sm w-full cursor-pointer"
                      >
                        Delete
                      </span>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomPagination meta={meta} />
      </div>
      {/* )} */}

      <DeleteConfirmationModal name={selectedItem} isOpen={isModalOpen} onOpenChange={setModalOpen} onConfirm={handleDeleteConfirm} />
    </div>
  );
};

export default ManageBlogs;
