"use client";
import { BsEye, BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { formatPrice } from "@/lib/formatePrice";
import { formatMongoDateToDate } from "@/lib/formateDate";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TListingDetails } from "@/types/listing.types";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import RemoveConfirmationModal from "@/components/ui/core/Modal/RemoveConfirmationModal";
import toast from "react-hot-toast";
import { removeFromWishList } from "@/services/wishlist";
import { useState } from "react";
const ManageWishlist = ({ result }: { result: TListingDetails[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: TListingDetails) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await removeFromWishList(selectedId);
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
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-light-primary-txt dark:text-dark-primary-txt">Your Wishlist</h1>
      </div>

      <div className="overflow-x-auto rounded-xl  pb-10">
        <div>
          <table className="w-full border border-[#e9ebec] dark:border-[#142e3a] mb-5 select-none -z-10">
            <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
              <tr>
                <th className="px-4 py-2 text-left border w-32  border-[#e9ebec] dark:border-[#142e3a]">Image</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Title</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Category</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Condition</th>
                <th className="px-4 py-2 text-left border  border-[#e9ebec] dark:border-[#142e3a]">Price</th>
                <th className="px-4 py-2 text-left border border-[#e9ebec] dark:border-[#142e3a]">Action</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item: TListingDetails) => (
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
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{item?.condition}</td>
                  <td className="px-4 py-2 border  border-[#e9ebec] dark:border-[#142e3a] text-sm">{formatPrice(item?.price)}</td>
                  <td className="px-4 py-2 border w-20  dark:border-[#232935] border-slate-300">
                    <div className="flex items-center gap-2">
                      <Link href={`/listings/${item?._id}`}>
                        <MdOutlineRemoveRedEye
                          size={22}
                          className="text-light-primary-txt dark:text-dark-primary-txt hover:scale-105 active:scale-95 duration-700 transition-all ease-in-out hover:cursor-pointer"
                        />
                      </Link>
                      <span
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        <RiDeleteBin2Line
                          size={20}
                          className="text-red-600 hover:scale-105 active:scale-95 duration-700 transition-all ease-in-out hover:cursor-pointer"
                        />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RemoveConfirmationModal name={selectedItem} isOpen={isModalOpen} onOpenChange={setModalOpen} onConfirm={handleDeleteConfirm} />
    </div>
  );
};

export default ManageWishlist;
