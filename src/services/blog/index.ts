"use server";
import { getValidToken } from "@/lib/verifyToken";
import { TBlogFormData } from "@/types/blog.types";
import { revalidateTag } from "next/cache";

export const getAllBlogs = async (query?: { [key: string]: string | string[] | undefined }) => {
  const token = await getValidToken();

  const params = new URLSearchParams();
  if (query?.page) {
    params.append("page", query?.page.toString());
  }
  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm?.toString());
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs?${params}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["BLOG"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const addNewBlog = async (blogData: TBlogFormData) => {
  const token = await getValidToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(blogData),
  });
  revalidateTag("BLOG");
  const result = await res.json();
  return result;
};

export const getBlogDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`, {
      next: {
        tags: ["BLOG"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
