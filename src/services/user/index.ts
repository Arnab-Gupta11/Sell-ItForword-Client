"use server";

import { getValidToken } from "@/lib/verifyToken";

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
