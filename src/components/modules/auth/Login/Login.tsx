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

const Login = () => {
  const [form] = useFormHook(loginSchema, loginFormDefaultValue);
  // console.log(form);
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div>
      <Card className="bg-white dark:bg-dark-secondary-bg shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
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

            <Button type="submit" variant="primary" className="w-full mt-8 ">
              Sign In
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
