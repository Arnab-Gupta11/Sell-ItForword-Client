export type TBlog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};
export type TBlogFormData = {
  title: string;
  content: string;
  image: string;
  category: string;
};
