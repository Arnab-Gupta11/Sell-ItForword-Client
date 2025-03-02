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

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const [form] = useFormHook(loginSchema, loginFormDefaultValue);
  const {
    formState: { isSubmitting },
  } = form;
  // console.log(form);
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      // setIsLoading(true);
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

  return (
    <div>
      <Card className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            {/* <Logo width={200} /> */}
            <h1>SellItForword</h1>
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
      </Card>
      {/* </TabsContent> */}
    </div>
  );
};

export default Login;
