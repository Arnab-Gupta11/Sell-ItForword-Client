"use server";

import { getValidToken } from "@/lib/verifyToken";

export const getMetadata = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/meta`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["USERINFO", "CATEGORY", "LISTING"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
