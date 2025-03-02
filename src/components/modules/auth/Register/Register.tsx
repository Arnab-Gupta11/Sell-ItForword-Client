"use client";
import React from "react";
import { z } from "zod";
import useFormHook from "@/hooks/useFormHook";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { registerFormDefaultValue, registerSchema } from "./registerValidationSchema";
import CustomForm from "@/components/ui/core/form/CustomForm";
import CustomInput from "@/components/ui/core/form/CustomInput";
import CustomPassword from "@/components/ui/core/form/CustomPassword";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth";
import toast from "react-hot-toast";
import { ImSpinner10 } from "react-icons/im";

const Register = () => {
  const router = useRouter();
  const [form] = useFormHook(registerSchema, registerFormDefaultValue);
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const res = await registerUser(data);
      // setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div>
      <Card className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            {/* <Logo width={200} /> */}
            <h1>Logo</h1>
          </CardTitle>
          <CardDescription className="text-center text-sm font-medium text-light-secondary-txt dark:text-dark-secondary-txt">
            Create your account to explore jobs and grow your career.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"fullName"} label={"Full Name"} inputType={"text"} placeholder={"Enter your full name"} />
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
            <CustomPassword
              form={form}
              fieldName={"confirmedPassword"}
              label={"Confirmed Password"}
              inputType={"password"}
              placeholder={"Confirm your password"}
            />
            <Button disabled={isSubmitting} type="submit" variant="primary" className="w-full mt-8 ">
              {isSubmitting ? <ImSpinner10 className="animate-spin" /> : "Sign Up"}
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">
            <Link href="/login">
              Already have an Account? <span className="font-semibold text-primary hover:underline">Sign In</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
