"use client";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";

import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMessage } from "@/services/message";

export type TMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const messageInfo = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      };
      const res = await sendMessage(messageInfo);
      if (res?.success === true) {
        toast.success(res?.message);
        reset();
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" max-w-lg mx-auto bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-lg shadow-md dark:shadow-slate-900 border dark:border-[#232935] border-slate-200">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="w-full p-3 xsm:p-5 md:p-10 ">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-8">
            <div className="mb-5">
              <Label className="mb-2">Your Name</Label>
              <Input
                type="name"
                id="name"
                className=" text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none  block p-2.5 w-full rounded-lg border border-slate-200 dark:border-slate-800 mt-1"
                placeholder="Name*"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Name is required</span>}
            </div>

            <div className="mb-5">
              <Label className="mb-2">Your Phone No</Label>
              <Input
                type="text"
                id="phone"
                className=" text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none  block p-2.5 w-full rounded-lg border border-slate-200 dark:border-slate-800 mt-1"
                placeholder="Phone No*"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Phone no is required</span>}
            </div>
          </div>

          <div>
            <div className="mb-5">
              <Label className="mb-2">Your Email</Label>
              <Input
                type="email"
                id="email"
                className=" text-light-primary-txt dark:text-[#EAF9F7] text-sm focus-within:outline-none block p-2.5 w-full rounded-lg border border-slate-200 dark:border-slate-800 mt-1"
                placeholder="email*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <span className="text-red-600 text-xs font-medium mt-0 ml-1">{errors.email.message as string}</span>}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <Label className="mb-1">Your Message</Label>
          <textarea
            rows={5}
            className="bg-light-primary-bg dark:bg-dark-primary-bg text-light-primary-txt dark:text-[#EAF9F7] text-sm  focus-within:outline-none rounded-lg border border-slate-200 dark:border-slate-800 block  p-2.5 w-full lg:w-full"
            placeholder="Write Your Message*"
            {...register("message", { required: true })}
          />
          {errors.message && <span className="text-red-600 text-xs font-medium mt-1 ml-1">Message is required</span>}
        </div>

        <Button variant="primary" type="submit" disabled={loading} className="sm-mx:w-full w-32 mt-5">
          {loading ? <BiLoaderCircle className="animate-spin" /> : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
