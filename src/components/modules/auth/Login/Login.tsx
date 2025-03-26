"use client";

import { z } from "zod";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import useFormHook from "@/hooks/useFormHook";
import { loginFormDefaultValue, loginSchema } from "./loginValidationSchema";
import CustomForm from "@/components/ui/core/form/CustomForm";
import CustomInput from "@/components/ui/core/form/CustomInput";
import CustomPassword from "@/components/ui/core/form/CustomPassword";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUser } from "@/services/auth";
import { ImSpinner10 } from "react-icons/im";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo/Logo1.png";
import { BiLoaderCircle } from "react-icons/bi";
const Login = () => {
  const router = useRouter();
  const { setIsLoading } = useUser();
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const searchParams = useSearchParams();
  const [redirect, setRedirect] = useState<string | null>(null);
  useEffect(() => {
    setRedirect(searchParams.get("redirectPath"));
  }, [searchParams]);
  const [form] = useFormHook(loginSchema, loginFormDefaultValue);
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(userInfo);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const credentialLogin = async (data: { email: string; password: string }) => {
    try {
      if (data.email === "guest@gmail.com") {
        setIsGuestLoading(true);
      } else {
        setIsAdminLoading(true);
      }

      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(userInfo);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      if (data.email === "guest@gmail.com") {
        setIsGuestLoading(false);
      } else {
        setIsAdminLoading(false);
      }
    }
  };

  return (
    <div>
      <Card className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            {/* <Logo width={200} /> */}
            <Link href={"/"} className="cursor-pointer">
              <Image src={logo} alt={"Logo"} width={150} className={"h-auto"} />
            </Link>
          </CardTitle>
          <CardDescription className="text-center text-sm font-medium text-light-secondary-txt dark:text-dark-secondary-txt">
            Welcome back! Log in to access your account and stay connected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />

            <Button disabled={isSubmitting} type="submit" variant="primary" className="w-full mt-8 ">
              {isSubmitting ? <ImSpinner10 className="animate-spin" /> : "Sign In"}
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-center text-light-primary-txt dark:text-dark-primary-txt ">
            <Link href="/register">
              Don&apos;t have an Account? <span className="font-semibold text-primary hover:underline">Sign Up</span>
            </Link>
          </p>
        </CardFooter>
        <h1 className="mx-6 border-t-2 border-gray-300 text-lg text-primary-text-light font-semibold py-4">Credential</h1>
        <div className="grid grid-cols-2 pb-8 px-6  gap-5">
          <Button
            variant="primary"
            onClick={() => credentialLogin({ email: "guest@gmail.com", password: "12345678" })}
            type="submit"
            disabled={isGuestLoading}
            className=" w-full"
          >
            {isGuestLoading ? <BiLoaderCircle className="animate-spin" /> : "Guest User"}
          </Button>
          <Button
            variant="primary"
            onClick={() => credentialLogin({ email: "admin@gmail.com", password: "12345678" })}
            type="submit"
            disabled={isAdminLoading}
            className=" w-full"
          >
            {isAdminLoading ? <BiLoaderCircle className="animate-spin" /> : "Admin"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
