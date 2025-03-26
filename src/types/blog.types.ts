export type TBlog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TBlogFormData = {
  title: string;
  content: string;
  image: string;
  category: string;
};
