"use server";

import { TMessage } from "@/components/modules/contact/ContactForm";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const sendMessage = async (messageData: TMessage): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    revalidateTag("MESSAGE");
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllMessages = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/message`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["MESSAGE"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
