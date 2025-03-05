"use server";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const buyListing = async (listingData: { listingId: string }): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(listingData),
    });
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getPaymentSuccessDetails = async (sessionId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/payment-details?session_id=${sessionId}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const getPurchaseHistory = async (userId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases/${userId}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["PAYMENT", "STATUS"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
export const getSalesHistory = async (userId: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/sales/${userId}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["PAYMENT", "STATUS"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
export const updateTransactionStatus = async (id: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/status/${id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("STATUS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
