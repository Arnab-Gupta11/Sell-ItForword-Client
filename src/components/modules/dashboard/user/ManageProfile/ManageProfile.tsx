"use client";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TRefUser } from "@/types/user.types";
import { ImSpinner10 } from "react-icons/im";
import imageUpload from "@/lib/imageUpload";
import { updateUserProfileDetails } from "@/services/user";
import toast from "react-hot-toast";
const ManageProfile = ({ userInfo }: { userInfo: TRefUser }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      let imageData;
      if (data.image[0]) {
        const fileImage = data.image[0];
        imageData = await imageUpload(fileImage);
      }
      const updatedUserDetails = {
        fullName: data.fullName || userInfo?.fullName,
        image: imageData || userInfo?.image,
        phone: data.phone || String(userInfo?.phone),
        city: data.city || userInfo?.city,
        address: data.address || userInfo?.address,
      };
      const res = await updateUserProfileDetails(userInfo?._id, updatedUserDetails);
      if (res?.success === true) {
        toast.success("User Profile Updated Successfully");
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
          <h2 className="text-base sm:text-lg bs:text-xl font-bold text-light-text-100 dark:text-dark-text-100 ">Update Your Profile</h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start gap-8 md:px-14 rounded-md pb-10">
          <div className="mx-auto w-full xsm:w-56 h-full p-3 bg-light-primary-bg dark:bg-dark-primary-bg rounded-lg mt-2">
            <Avatar className="w-full xsm:w-48 h-48 rounded-lg">
              <AvatarImage src={userInfo ? userInfo?.image : "https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </div>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {/* form row */}
            <div className="flex flex-col bs:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
              <div className="w-full bs:w-1/2">
                <Label>Your email</Label>
                <Input
                  readOnly
                  type="text"
                  defaultValue={userInfo?.email}
                  placeholder="Enter Product name"
                  className="mt-1.5"
                  {...register("email")}
                />
                {/* {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product name is required</span>} */}
              </div>
              <div className="w-full bs:w-1/2">
                <Label>Your Name</Label>
                <Input type="text" defaultValue={userInfo?.fullName} placeholder="Enter You Full Name" className="mt-1.5" {...register("fullName")} />
                {errors.fullName && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Name is required</span>}
              </div>
            </div>
            {/* form row */}
            <div className="flex flex-col bs:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
              <div className="w-full bs:w-1/2">
                <Label>Your Address</Label>
                <Input type="text" defaultValue={userInfo?.address} placeholder="Enter Your Address" className="mt-1.5" {...register("address")} />
              </div>
              <div className="w-full bs:w-1/2">
                <Label>Your City</Label>
                <Input type="text" defaultValue={userInfo?.city} placeholder="Enter Your City" className="mt-1.5" {...register("city")} />
              </div>
            </div>

            {/* form row */}
            <div className="flex flex-col bs:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
              <div className="flex flex-col gap-3 w-full bs:w-1/2">
                <div className="w-full items-center gap-3">
                  <Label>Update Profile Photo</Label>
                  {/* File Upload Button */}
                  <label
                    htmlFor="file_input"
                    className="bg-light-primary-bg dark:bg-dark-primary-bg cursor-pointer flex items-center justify-center px-4 text-balance font-medium rounded-lg text-base transition-all duration-300 flex-1 w-full border border-dashed border-[#e9ebec] dark:border-[#142e3a] mt-1.5 py-3.5"
                  >
                    <FiUpload className="w-3 h-3 xs:w-5 xs:h-5 mr-2" />
                    {/* Display Selected File Name */}
                    <p className="text-sm text-slate-500 font-medium ">{watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "Select Image"}</p>
                  </label>

                  {/* Hidden File Input */}
                  <input className="hidden" id="file_input" type="file" accept="image/*" {...register("image")} />
                </div>
                {errors.image && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Photo is required</span>}
              </div>
              <div className="w-full bs:w-1/2">
                <Label>Your Phone No</Label>
                <Input
                  type="text"
                  defaultValue={String(userInfo?.phone)}
                  placeholder="Enter Your Phone No"
                  className="mt-1.5"
                  {...register("phone")}
                />
              </div>
            </div>

            {/* button */}
            <div className=" mt-8 ">
              <Button variant="primary" type="submit" disabled={loading} className="sm-mx:w-full w-32">
                {loading ? <ImSpinner10 className="animate-spin" /> : "Update Profile"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
