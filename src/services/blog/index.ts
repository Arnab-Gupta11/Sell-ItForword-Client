import { getValidToken } from "@/lib/verifyToken";

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
