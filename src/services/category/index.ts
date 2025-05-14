"use server";

import { getValidToken } from "@/lib/verifyToken";
import { ICategory, ICategoryFormData } from "@/types/category.types";
import { revalidateTag } from "next/cache";

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      next: {
        tags: ["CATEGORY"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const createCategory = async (categoryData: ICategoryFormData): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(categoryData),
    });

    revalidateTag("CATEGORY");
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const updateCategory = async (id: string, categoryData: Partial<ICategory>): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(categoryData),
    });

    revalidateTag("CATEGORY");
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllListingsByAdmin = async (query?: { [key: string]: string | string[] | undefined }) => {
  const token = await getValidToken();
  const params = new URLSearchParams();

  if (query?.page) {
    params.append("page", query?.page.toString());
  }
  if (query?.searchTerm) {
    params.append("searchTerm", query.searchTerm.toString());
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/admin?${params.toString()}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["CATEGORY"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getCategoryDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`, {
      next: {
        tags: ["CATEGORY"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const deleteCategory = async (categoryId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("CATEGORY");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
