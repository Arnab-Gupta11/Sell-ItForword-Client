/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BsThreeDots } from "react-icons/bs";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IListing } from "@/types/listing.types";
import { formatPrice } from "@/lib/formatePrice";
const ManageListings = ({ listings }: { listings: IListing[] }) => {
  // const handleDelete = (_id: string) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const res = await deleteBlog({ id: _id }).unwrap();
  //         if (res?.success === true) {
  //           Swal.fire("Your Blog has been Deleted!", "success");
  //         }
  //       } catch (error) {
  //         Swal.fire("Error!", "Failed to delete Blog. Please try again later.", "error");
  //       }
  //     }
  //   });
  // };

  return (
    <div>
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
        <h1 className="text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Manage Listings</h1>
        <Link href="/dashboard/user/listings/add-listing">
          <Button variant="primary">
            <Plus />
            <span>Add Listitng</span>
          </Button>
        </Link>
      </div>
      {/* {isLoading || isFetching ? (
        <Loader />
      ) : ( */}
      <div className="overflow-x-auto rounded-xl shadow-sm pb-10">
        <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
          <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
            <tr>
              <th className="px-4 py-2 text-left border w-32  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
              <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Title</th>
              <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Category</th>
              <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Price</th>
              <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">Action</th>
            </tr>
          </thead>
          <tbody>
            {listings?.map((item: IListing) => (
              <tr key={item?._id} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
                <td className="px-4 py-2 border w-32  border-[#e9ebec] dark:border-[#142e3a]">
                  <Image
                    src={"https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"}
                    width={20}
                    height={20}
                    alt="Listing Image"
                    className="w-16 h-16 bg-[#F7F7F7] dark:bg-[#101624] p-2 rounded-lg flex-shrink-0"
                  />
                </td>
                <td className="px-4 py-2 border border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.title}</td>
                <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.category}</td>
                <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{formatPrice(item?.price)}</td>
                <td className="px-4 py-2 border w-20  dark:border-[#232935] border-slate-300">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
                      <BsThreeDots className="mt-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      className="bg-[#f7fbfe] dark:bg-[#101624] border-none shadow-md shadow-secondary-bg-light outline-none p-2 flex flex-col gap-2"
                    >
                      <Link href={`/dashboard/blogs/${item?._id}`}>
                        <span className="text-slate-700 hover:text-slate-900 dark:text-dark-primary-txt dark:hover:text-dark-secondary-txt ">
                          Update
                        </span>
                      </Link>

                      <span
                        // onClick={() => handleDelete(item?._id)}
                        className="text-slate-700 hover:text-slate-900 hover:cursor-pointer dark:text-dark-primary-txt dark:hover:text-dark-secondary-txt "
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
      </div>
      {/* )} */}
    </div>
  );
};

export default ManageListings;
