import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import imageUpload from "@/lib/imageUpload";
import { createCategory } from "@/services/category";
import { ICategory, ICategoryFormData } from "@/types/category.types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICategoryFormData>();

  const onSubmit = async (data: ICategoryFormData) => {
    try {
      setLoading(true);
      const image = data.icon[0];
      const imageData = await imageUpload(image);
      const categoryInfo = {
        name: data.name,
        icon: imageData,
        description: data.description,
      };
      const res = await createCategory(categoryInfo);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"primary"} className="mt-5">
          <Plus />
          <span>Add Category</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95%] xs:max-w-[425px] bg-light-primary-bg dark:bg-dark-secondary-bg rounded-lg shadow-md border-2 border-[#e9ebec] dark:border-[#142e3a]">
        <DialogHeader className=" text-left">
          <DialogTitle className="text-base  sm:text-lg bs:text-xl font-bold text-light-text-100 dark:text-dark-text-100">Add Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="w-full mb-5">
            <Label>
              Category Name <span className="text-red-700">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter category name"
              className="mt-1.5 dark:border-[#1e232e] dark:text-dark-secondary-txt text-light-secondary-txt rounded-lg"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Category Name is required</span>}
          </div>
          <div className="w-full mb-5">
            <div className="flex flex-col gap-3">
              {/* File Upload Button */}
              <Label>
                Upload Category Icon<span className="text-red-700">*</span>
              </Label>
              <label
                htmlFor="file_input"
                className="bg-light-primary-bg dark:bg-dark-primary-bg cursor-pointer flex items-center justify-center px-4 py-3.5 text-balance font-medium rounded-lg text-base transition-all duration-300 flex-1 w-full  border border-dashed border-[#e9ebec] dark:border-[#142e3a]"
              >
                <FiUpload className="w-3 h-3 xs:w-5 xs:h-5 mr-2" />
                {/* Display Selected File Name */}
                <p className="text-sm text-slate-500 font-medium ">{watch("icon")?.[0]?.name ? `${watch("icon")[0].name}` : "Select Icon"}</p>
              </label>

              {/* Hidden File Input */}
              <input className="hidden" id="file_input" type="file" accept="image/*" {...register("icon", { required: true })} />
            </div>
            {errors.icon && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Category icon is required</span>}
          </div>
          <div className=" mt-5">
            <Label>Category Description</Label>
            <textarea
              className="bg-light-primary-bg dark:bg-dark-primary-bg w-full px-3 py-2 text-base shadow-sm md:text-sm text-light-primary-txt dark:text-dark-primary-txt mt-1.5 focus-within:outline-none rounded-lg"
              id=""
              cols={30}
              rows={8}
              placeholder="Enter category description...."
              {...register("description", { required: true })}
            />
            {errors.description && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Category description is required</span>}
          </div>

          <div className=" mt-8">
            <Button variant={"primary"} type="submit" disabled={loading} className="sm-mx:w-full w-32">
              {loading ? <BiLoaderCircle className="animate-spin" /> : "Add Category"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
