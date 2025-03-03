import { getValidToken } from "@/lib/verifyToken";

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

  // console.log("FinalQuery", params);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings?limit=${limit}&page=${page}&${params}`, {
      next: {
        tags: ["PRODUCT"],
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

  // console.log("FinalQuery", params);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/categories/${category}/?limit=${limit}&page=${page}&${params}`, {
      next: {
        tags: ["PRODUCT"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getAllListingsOfAUser = async (id: string) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/user/${id}`, {
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
