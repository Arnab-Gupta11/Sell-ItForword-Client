"use client";
import React, { useState } from "react";

import { TCustomInput } from "@/types/form.types";
import { Eye, EyeOff } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../form";
import { Input } from "../../input";

const CustomPassword = ({ form, fieldName, label, placeholder }: TCustomInput) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-light-primary-txt dark:text-dark-primary-txt">{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input className="pr-10" type={showPassword ? "text" : "password"} placeholder={placeholder} {...field} />
              <span className="hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Eye size={18} className="text-slate-400 absolute top-4 right-2" />
                ) : (
                  <EyeOff size={18} className="text-slate-400 absolute top-4 right-2" />
                )}
              </span>
            </div>
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomPassword;
