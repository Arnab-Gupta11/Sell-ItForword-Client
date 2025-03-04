"use server";
import { getValidToken } from "@/lib/verifyToken";

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
