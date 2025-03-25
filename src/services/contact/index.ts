"use server";

import { TContactMessage } from "@/components/modules/contact/ContactForm";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const sendContactMessage = async (contactData: TContactMessage): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    revalidateTag("CONTACT");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllContacts = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["CONTACT"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
