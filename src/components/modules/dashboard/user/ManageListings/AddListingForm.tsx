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
import imageUpload from "@/lib/imageUpload";
import { ImSpinner10 } from "react-icons/im";
import { createListing } from "@/services/listing";
import { useRouter } from "next/navigation";

const AddListingForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const categoryOptions = [
    { value: "Electronics", label: "Electronics" },
    { value: "Furniture", label: "Furniture" },
    { value: "Clothing & Accessories", label: "Clothing & Accessories" },
    { value: "Books", label: "Books" },
    { value: "Home Appliances", label: "Home Appliances" },
    { value: "Toys & Games", label: "Toys & Games" },
    { value: "Sports & Outdoors", label: "Sports & Outdoors" },
    { value: "Vehicles", label: "Vehicles" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Musical Instruments", label: "Musical Instruments" },
    { value: "Collectibles", label: "Collectibles" },
    { value: "Tools & Equipment", label: "Tools & Equipment" },
    { value: "Health & Beauty", label: "Health & Beauty" },
    { value: "Pets & Pet Supplies", label: "Pets & Pet Supplies" },
    { value: "Bikes & Scooters", label: "Bikes & Scooters" },
  ];
  const cityOptions = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Chittagong", label: "Chittagong" },
    { value: "Khulna", label: "Khulna" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Barisal", label: "Barisal" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Mymensingh", label: "Mymensingh" },
    { value: "Narayanganj", label: "Narayanganj" },
    { value: "Comilla", label: "Comilla" },
    { value: "Bogra", label: "Bogra" },
    { value: "Rajbari", label: "Rajbari" },
    { value: "Pabna", label: "Pabna" },
    { value: "Jessore", label: "Jessore" },
    { value: "Cox's Bazar", label: "Cox's Bazar" },
    { value: "Tangail", label: "Tangail" },
    { value: "Gazipur", label: "Gazipur" },
    { value: "Narsingdi", label: "Narsingdi" },
    { value: "Faridpur", label: "Faridpur" },
    { value: "Manikganj", label: "Manikganj" },
  ];
  const conditionOptions = [
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
  ];
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
      const imageData = await imageUpload(image);
      const listingInfo = {
        ...data,
        price: Number(data.price),
        image: imageData,
      };
      const res = await createListing(listingInfo);
      if (res?.success) {
        toast.success(res?.message);
        reset();
        router.push("/dashboard/user/listings");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      // toast.error(err?.data?.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-0">
      <div className="pt-10 px-4 bs:px-0">
        <div className="flex items-center justify-between mb-5 pt-8 md:px-14">
          <h2 className="text-base sm:text-lg bs:text-xl font-bold text-light-text-100 dark:text-dark-text-100 ">Add New Listing</h2>
          <Button>
            <IoMdArrowRoundBack />
          </Button>
        </div>

        <form className="md:px-14   rounded-md pb-10" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <Label>Title</Label>
              <Input type="text" placeholder="Enter listing title" className="mt-1.5" {...register("title", { required: true })} />
              {errors.title && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Title is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <Label>Price</Label>
              <Input
                type="text"
                placeholder="Enter listing price"
                className="mt-1.5"
                {...register("price", {
                  required: "Price is required",
                  validate: (value) => (/^\d+(\.\d{1,2})?$/.test(value) && parseFloat(value) > 0) || "Enter a valid positive number",
                })}
              />
              {errors.price && <span className="text-red-600 text-xs font-medium mt-0 ml-1">{String(errors.price.message)}</span>}
            </div>
          </div>
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <Label>Category</Label>
              <select
                className="bg-light-primary-bg dark:bg-dark-primary-bg flex h-9 w-full rounded-md px-3 py-1.5  md:text-sm hover:cursor-pointer mt-1.5 focus-visible:outline-none"
                {...register("category", { required: true })}
              >
                <option value="" className="text-slate-800">
                  Select Category
                </option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.category && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Category is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <Label>City</Label>
              <select
                className="bg-light-primary-bg dark:bg-dark-primary-bg flex h-9 w-full rounded-md px-3 py-1.5  md:text-sm hover:cursor-pointer mt-1.5 focus-visible:outline-none"
                {...register("city", { required: true })}
              >
                <option value="" className="text-slate-800">
                  Select City
                </option>
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.city && <span className="text-red-600 text-xs font-medium mt-0 ml-1">City is required</span>}
            </div>
          </div>

          {/* form row */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-3 mt-1">
                {/* File Upload Button */}
                <Label>Upload Image</Label>
                <label
                  htmlFor="file_input"
                  className="bg-light-primary-bg dark:bg-dark-primary-bg cursor-pointer flex items-center justify-center px-4 py-2 text-balance font-medium rounded-lg text-base transition-all duration-300 flex-1 w-full   border border-dashed border-[#e9ebec] dark:border-[#142e3a]"
                >
                  <FiUpload className="w-3 h-3 xs:w-5 xs:h-5 mr-2 opacity-40" />
                  {/* Display Selected File Name */}
                  <p className="text-sm text-slate-500 font-medium ">{watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "Select Image"}</p>
                </label>

                {/* Hidden File Input */}
                <input className="hidden" id="file_input" type="file" accept="image/*" {...register("image", { required: true })} />
              </div>
              {errors.image && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Image is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <Label>Condition</Label>
              <select
                className="bg-light-primary-bg dark:bg-dark-primary-bg flex h-9 w-full rounded-md px-3 py-1.5  md:text-sm hover:cursor-pointer mt-1.5 focus-visible:outline-none"
                {...register("condition", { required: true })}
              >
                <option value="" className="text-slate-800">
                  Select Condition
                </option>
                {conditionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.condition && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Condition is required</span>}
            </div>
          </div>

          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <Label>Phone Number</Label>
              <Input
                type="text"
                placeholder="Enter Phone Number"
                className="mt-1.5"
                {...register("phone", {
                  required: "Phone Number is required",
                  validate: (value) => /^01\d{9}$/.test(value) || "Enter a valid 11-digit phone number starting with 01",
                })}
              />
              {errors.phone && <span className="text-red-600 text-xs font-medium mt-0 ml-1">{String(errors.phone.message)}</span>}
            </div>

            <div className="w-full md:w-1/2">
              <Label>Address</Label>
              <Input type="text" placeholder="Enter listing title" className="mt-1.5" {...register("address", { required: true })} />
              {errors.address && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Address is required</span>}
            </div>
          </div>

          {/* form row */}

          <div className=" mt-5">
            <Label>Details Information</Label>
            <textarea
              className="bg-light-primary-bg dark:bg-dark-primary-bg w-full px-3 py-1.5 text-base shadow-sm md:text-sm text-light-primary-txt dark:text-dark-primary-txt mt-1.5 focus-within:outline-none"
              id=""
              cols={30}
              rows={5}
              placeholder="Enter listing details...."
              {...register("description", { required: true })}
            />
            {errors.description && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Details Information is required</span>}
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button variant="primary" type="submit" disabled={loading} className="sm-mx:w-full w-32">
              {loading ? <ImSpinner10 className="animate-spin" /> : "Add Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListingForm;
