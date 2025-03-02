"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

//Login User
export const loginUser = async (userData: FieldValues) => {
  const cookieStore = await cookies();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result?.success) {
      cookieStore.set("accessToken", result?.data?.accessToken);
      cookieStore.set("refreshToken", result?.data?.refreshToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
