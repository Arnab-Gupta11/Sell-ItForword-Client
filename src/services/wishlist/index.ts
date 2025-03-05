"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const updateWishList = async (listingId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist/${listingId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("WISHLIST");
    const data = res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const removeFromWishList = async (listingId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist/${listingId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("WISHLIST");
    const data = res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getWishList = async (userId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist/${userId}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["WISHLIST"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const isListingExistInWishList = async (listingId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist/check/${listingId}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["WISHLIST"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
