"use client";
import React from "react";

import { TCustomInput } from "@/types/form.types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../form";
import { Input } from "../../input";

const CustomInput = ({ form, fieldName, inputType, label, placeholder }: TCustomInput) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-light-primary-txt dark:text-dark-primary-txt">{label}</FormLabel>
          <FormControl>
            <Input type={inputType} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
