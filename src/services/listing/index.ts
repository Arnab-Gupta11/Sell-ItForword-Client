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

  console.log("FinalQuery", params);

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
