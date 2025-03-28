"use server";
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
