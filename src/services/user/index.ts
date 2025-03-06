"use server";

import { getValidToken } from "@/lib/verifyToken";
import { TRefUser } from "@/types/user.types";
import { revalidateTag } from "next/cache";

export const getUserProfileDetails = async (id: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["USERINFO"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const updateUserProfileDetails = async (id: string, updateUserInfo: Partial<TRefUser>) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(updateUserInfo),
    });
    revalidateTag("USERINFO");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getAllUsers = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["USERINFO"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const updateUserStatusInfo = async (id: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/userStatus/${id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("USERINFO");
    return res.json();
  } catch (error: any) {
    return Error(error.message);
  }
};
