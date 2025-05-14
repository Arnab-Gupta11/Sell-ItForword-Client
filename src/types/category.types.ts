export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  isActive: boolean;
  icon: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface ICategoryFormData {
  name: string;
  description: string;
  icon: FileList;
}
