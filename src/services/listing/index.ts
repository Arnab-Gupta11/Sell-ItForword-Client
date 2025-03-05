"use server";
import { getValidToken } from "@/lib/verifyToken";
import { TListingDetails } from "@/types/listing.types";
import { revalidateTag } from "next/cache";

export const createListing = async (listingData: FormData): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(listingData),
    });

    revalidateTag("LISTING");
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const UpdateListing = async (id: string, listingData: Partial<TListingDetails>): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(listingData),
    });

    revalidateTag("LISTING");
    const result = res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
// get all products
export const getAllListings = async (page?: string, limit?: string, query?: { [key: string]: string | string[] | undefined }) => {
  const params = new URLSearchParams();

  if (query?.minPrice) {
    params.append("minPrice", query?.minPrice.toString());
  }
  if (query?.maxPrice) {
    params.append("maxPrice", query?.maxPrice.toString());
  }

  if (query?.category && Array.isArray(query?.category)) {
    query.category.forEach((category) => {
      params.append("category[]", category);
    });
  }
  if (query?.city) {
    params.append("city", query?.city.toString());
  }
  if (query?.condition) {
    params.append("condition", query?.condition.toString());
  }
  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm.toString());
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings?limit=${limit}&page=${page}&${params}`, {
      next: {
        tags: ["LISTING"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getAllListingsByCategory = async (
  category: string,
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();

  if (query?.minPrice) {
    params.append("minPrice", query?.minPrice.toString());
  }
  if (query?.maxPrice) {
    params.append("maxPrice", query?.maxPrice.toString());
  }

  // if (query?.category && Array.isArray(query?.category)) {
  //   query.category.forEach((category) => {
  //     params.append("category[]", category);
  //   });
  // }
  if (query?.city) {
    params.append("city", query?.city.toString());
  }
  if (query?.condition) {
    params.append("condition", query?.condition.toString());
  }
  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm.toString());
  }


  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/categories/${category}/?limit=${limit}&page=${page}&${params}`, {
      next: {
        tags: ["LISTING"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getAllListingsOfAUser = async (id: string, page: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/user/${id}?page=${page}`, {
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["LISTING"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getListingDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
      next: {
        tags: ["LISTING"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const deleteListing = async (listingId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    revalidateTag("LISTING");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
